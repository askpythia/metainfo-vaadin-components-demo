package at.metainfo.vaadin.components.demo.views;

import java.io.IOException;
import java.nio.file.Path;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.Notification.Position;
import com.vaadin.flow.component.spreadsheet.Spreadsheet;

import at.metainfo.enhanced.Closeable;
import at.metainfo.enhanced.IEnhancedView;

public class SpreadsheetView implements IEnhancedView {

	private Path path;
	private Spreadsheet spreadsheet;

	public SpreadsheetView(Path path) {
		this.path = path;
	}

	@Override
	public String title() {
		return "Spreadsheet";
	}

	@Override
	public Object titleIcon() {
		return icon(VaadinIcon.TABLE);
	}

	@Override
	public boolean close(Closeable closeable) {
		if(closeable != null) {
			new ConfirmDialog(title(), "Save changes?",
			"Save", event -> {
				try {
					spreadsheet.write(path.toString());
					closeable.close();
				} catch (IOException ex) {
					Notification.show("Error during save: " + ex.getMessage(), 5000, Position.MIDDLE);
				}
			},
			"Discard Changes", event -> {
				closeable.close();
			},
			"Cancel", event -> {
				// Stay open
			}).open();
		}
		return true;
	}

	@Override
	public void resize() {
		if(spreadsheet != null) spreadsheet.setSizeFull();
	}

	@Override
	public Component createContent() {
		init();
		return spreadsheet;
	}

	@Override
	public Component createToolbar() {
		init();
		return toolbar();
	}

	private void init() {
		try {
			spreadsheet = new Spreadsheet(path.toFile());
			resize();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
