package at.metainfo.vaadin.components.demo.views;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.Notification.Position;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

import at.metainfo.enhanced.Closeable;
import at.metainfo.enhanced.IEnhancedView;
import at.metainfo.utilities.IGuiUtilities;
import de.f0rce.ace.AceEditor;
import de.f0rce.ace.enums.AceMode;
import de.f0rce.ace.enums.AceTheme;

public class AceEditorView implements IEnhancedView, IGuiUtilities {

	private Path path;
	private String content;
	private AceEditor editor;
	private ComboBox<AceMode> mode;

	public AceEditorView(Path path) {
		this.path = path;
	}

	@Override
	public Object object() {
		return path;
	}

	@Override
	public String title() {
		return path == null ? "ace.editor" : path.getFileName().toString();
	}

	@Override
	public Object titleIcon() {
		return icon(VaadinIcon.EDIT);
	}

	@Override
	public boolean close(Closeable closeable) {
		if(closeable != null) {
			if(Objects.equals(content, editor.getValue())) {
				closeable.close();
			} else {
				new ConfirmDialog(title(), "File changed. Save changes?",
				"Save", event -> {
					try {
						Files.write(path, editor.getValue().getBytes());
						closeable.close();
					} catch (IOException ex) {
						Notification.show("Error during write: " + ex.getMessage(), 5000, Position.MIDDLE);
					}
				},
				"Discard Changes", event -> {
					closeable.close();
				},
				"Cancel", event -> {
					// Stay open
				}).open();
			}
		}
		return true;
	}

	@Override
	public Component createContent() {
		editor = new AceEditor();
		resize();
		return editor;
	}

	@Override
	public Component createToolbar() {
		mode = new ComboBox<>();
		mode.setItems(AceMode.values());
		mode.setPlaceholder("mode");
		mode.addValueChangeListener(event -> editor.setMode(event.getValue() == null ? AceMode.javascript : event.getValue()));
		mode.setClearButtonVisible(true);

		ComboBox<AceTheme> theme = new ComboBox<>();
		theme.setItems(AceTheme.values());
		theme.setPlaceholder("theme");
		theme.addValueChangeListener(event -> editor.setTheme(event.getValue() == null ? AceTheme.eclipse : event.getValue()));
		theme.setClearButtonVisible(true);

		reload();

		return toolbar(mode, theme);
	}

	@Override
	public Component createFooter() {
		HorizontalLayout footer = toolbar(
			VaadinIcon.FILE.create()
		);
		/*
		 * The default alignment for components in the footer is on the right side (margin-left: auto)
		 * using the following line would position the components in the footer on the left side (get the whole width)
		 */
		//footer.setWidthFull();
		return footer;
	}

	@Override
	public void resize() {
		editor.setSizeFull();
	}

	@Override
	public void reset() {
		// Do nothing, will be rebuilded ...
	}

	private void reload() {
		if(path != null && path.toFile().exists()) {
			try {
				content = Files.readString(path);
				editor.setValue(content);
				String extension = path.getFileName().toString();
				extension = extension.substring(extension.lastIndexOf(".")+1);
				AceMode aceMode = determineAceMode(extension);
				mode.setValue(aceMode);
				editor.setMode(aceMode);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	private AceMode determineAceMode(String extension) {
		AceMode aceMode = AceMode.text;
		if(extension != null) {
    		try {
    			aceMode = AceMode.valueOf(extension);
    		} catch(IllegalArgumentException ex) {
    			switch(extension) {
    				case "cmd":
    				case "ps1":
    					aceMode = AceMode.powershell;
    					break;
    				case "js":
    				case "cjs":
    					aceMode = AceMode.javascript;
    					break;
    				case "ts":
    					aceMode = AceMode.typescript;
    					break;
    				case "txt": 
    				case "log":
    				case "mf":
    					aceMode = AceMode.text;
    					break;
    				case "xtend":
    					aceMode = AceMode.java;
    					break;
    				case "graph":
    				case "prefs":
    				case "factories":
    					aceMode = AceMode.properties;
    					break;
    				case "fipos":
    				case "changes":
    				case "fiposws":
    				case "ecore":
    				case "genmodel":
    				case "bpmn":
    				case "project":
    				case "classpath":
    				case "factorypath":
    				case "launch":
    				case "xml_gen":
    				case "setup":
    					aceMode = AceMode.xml;
    					break;
    				case "md":
    					aceMode = AceMode.markdown;
    					break;
    				case "npmignore":
    				case "gitattributes":
    					aceMode = AceMode.gitignore;
    					break;
    				case "xtext":
    				case "mwe2":
    					aceMode = AceMode.java;
    					break;
    			}
    		}
    	}
		return aceMode;
	}
}
