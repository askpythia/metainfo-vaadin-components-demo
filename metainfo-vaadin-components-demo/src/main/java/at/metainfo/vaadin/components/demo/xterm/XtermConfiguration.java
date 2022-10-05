package at.metainfo.vaadin.components.demo.xterm;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import at.metainfo.vaadin.components.demo.xterm.websocket.WebSocketConfig;

@Configuration
@EnableWebSocket
public class XtermConfiguration extends WebSocketConfig {

	public static final String XTERM_CONTEXT = "/xterm";

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(terminalSocket(), XTERM_CONTEXT);
    }
}
