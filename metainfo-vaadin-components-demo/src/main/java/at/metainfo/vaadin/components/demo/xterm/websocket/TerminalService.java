package at.metainfo.vaadin.components.demo.xterm.websocket;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.LinkedBlockingQueue;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pty4j.PtyProcess;
import com.pty4j.PtyProcessBuilder;
import com.pty4j.WinSize;
import com.sun.jna.Platform;

@Component
@Scope("prototype")
public class TerminalService {

	@Value("${shell:#{null}}")
	private String shellStarter;

	private boolean isReady;
	private String[] termCommand;
	private PtyProcess process;
	private Integer columns = 120;
	private Integer rows = 40;
	private BufferedReader inputReader;
	private BufferedReader errorReader;
	private BufferedWriter outputWriter;
	private WebSocketSession webSocketSession;

	private LinkedBlockingQueue<String> commandQueue = new LinkedBlockingQueue<>();

	public void onTerminalInit() {
	}

	public void onTerminalReady(String workingDirectory) throws Exception {
		initializeProcess(workingDirectory);
	}

	private void initializeProcess(String workingDirectory) throws Exception {
		if (isReady) {
			return;
		}

		String userHome = workingDirectory == null || workingDirectory.isBlank() ? System.getProperty("user.home") : workingDirectory;
		//Path dataDir = Paths.get(userHome).resolve(".pty4j");
		//if (Files.notExists(dataDir)) Files.createDirectories(dataDir);

		if (Platform.isWindows()) {
			this.termCommand = "cmd.exe".split("\\s+");
		} else {
			this.termCommand = "/bin/sh -i".split("\\s+");
		}

		if (Objects.nonNull(shellStarter)) {
			this.termCommand = shellStarter.split("\\s+");
		}

		Map<String, String> envs = new HashMap<>(System.getenv());
		envs.put("TERM", "xterm");

		//System.setProperty("pty4j.tmpdir", dataDir.toString());

		this.process = new PtyProcessBuilder(termCommand).setEnvironment(envs).setDirectory(userHome).start();

		process.setWinSize(new WinSize(columns, rows));
		this.inputReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
		this.errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
		this.outputWriter = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()));

		start(() -> {
			printReader(inputReader);
		});

		start(() -> {
			printReader(errorReader);
		});
		this.isReady = true;
		
		process.onExit().thenRun(() -> {
			System.out.println("Process exit");
		});
	}

	public void print(String text) throws IOException {
		Map<String, String> map = new HashMap<>();
		map.put("type", "TERMINAL_PRINT");
		map.put("text", text);
		String message = new ObjectMapper().writeValueAsString(map);
		webSocketSession.sendMessage(new TextMessage(message));
	}

	private void printReader(BufferedReader bufferedReader) {
		try {
			int nRead;
			char[] data = new char[1 * 1024];

			while ((nRead = bufferedReader.read(data, 0, data.length)) != -1) {
				StringBuilder builder = new StringBuilder(nRead);
				builder.append(data, 0, nRead);
				print(builder.toString());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void onCommand(String command) throws InterruptedException {
		if (Objects.isNull(command)) {
			return;
		}

		commandQueue.put(command);
		start(() -> {
			try {
				outputWriter.write(commandQueue.poll());
				outputWriter.flush();
			} catch (IOException e) {
				e.printStackTrace();
			}
		});
	}

	public void onTerminalResize(String columns, String rows) {
		if (Objects.nonNull(columns) && Objects.nonNull(rows)) {
			this.columns = Integer.valueOf(columns);
			this.rows = Integer.valueOf(rows);
			if (Objects.nonNull(process)) {
				process.setWinSize(new WinSize(this.columns, this.rows));
			}
		}
	}

	public void onTerminalClose() {
		if (null != process && process.isAlive()) {
			process.destroy();
		}
	}

	public void setWebSocketSession(WebSocketSession webSocketSession) {
		this.webSocketSession = webSocketSession;
	}

	public WebSocketSession getWebSocketSession() {
		return webSocketSession;
	}

	public static void start(Runnable runnable) {
		Thread thread = new Thread(runnable);
		thread.start();
	}
}
