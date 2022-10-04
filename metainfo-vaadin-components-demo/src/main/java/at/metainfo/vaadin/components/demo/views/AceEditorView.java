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

public class AceEditorView implements IEnhancedView, IGuiUtilities {

	private Path path;
	private AceEditor editor;
	private String content;

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
		reload();
		return editor;
	}

	@Override
	public Component createToolbar() {
		ComboBox<AceMode> mode = new ComboBox<>();
		mode.setItems(AceMode.values());
		mode.setPlaceholder("mode");
		mode.addValueChangeListener(event -> editor.setMode(event.getValue()));
		return toolbar(mode);
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
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
