package at.metainfo.vaadin.components.demo.views;

import java.io.File;
import java.lang.reflect.Field;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.vaadin.filesystemdataprovider.FileSelect;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.contextmenu.GridContextMenu;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.treegrid.TreeGrid;
import com.vaadin.flow.shared.Registration;

import at.metainfo.enhanced.EnhancedTabs;
import at.metainfo.enhanced.EnhancedTabs.Tab;
import at.metainfo.enhanced.IEnhancedView;
import at.metainfo.utilities.IGuiUtilities;

public class FilesystemView extends Div implements IEnhancedView, IGuiUtilities {
	private static final long serialVersionUID = -3917524669192158025L;

	private Path path;
	private EnhancedTabs editors;
	private EnhancedTabs tools;
	private boolean closeable;

	private Registration treeDoubleClickRegistration;

	public FilesystemView(Path path, EnhancedTabs editors, EnhancedTabs tools, boolean closeable) {
		this.path = path;
		this.editors = editors;
		this.tools = tools;
		this.closeable = closeable;
		setSizeFull();
	}

	@Override
	public Object object() {
		return path;
	}

	@Override
	public String title() {
		return path == null ? "filesystem" : path.getFileName().toString();
	}

	@Override
	public Object titleIcon() {
		return icon(VaadinIcon.FILE_TREE);
	}

	@Override
	public boolean isCloseable() {
		return closeable;
	}

	@Override
	public Component createToolbar() {
		return toolbar(
			new Button(VaadinIcon.CODE.create(), event -> editors.selectTab(editors.addViewTab(new FilesystemView(Paths.get("src/main/java/at/metainfo/vaadin/components/demo"), editors, tools, true)))),
			new Button(VaadinIcon.REFRESH.create(), event -> reset())
		);
	}

	@Override
	public Component createContent() {
		reset();
		return this;
	}

	private FileSelect createFileSelect() {
		if(treeDoubleClickRegistration != null) {
			treeDoubleClickRegistration.remove();
		}
		FileSelect fileSelect = new FileSelect(path.toFile());
		TreeGrid<File> treeGrid = getTreeGrid(fileSelect);
		treeDoubleClickRegistration = treeGrid.addItemDoubleClickListener(event -> {
			File item = event.getItem();
			String name = item == null ? null : item.getName().toLowerCase();
			if(item != null && name != null) {
				if(item.isDirectory()) {
					editors.selectTab(editors.addViewTab(new FilesystemView(item.toPath(), editors, tools, true)));
				} else {
					if(name.endsWith(".html") || name.endsWith(".htm")) {
						editors.selectTab(editors.addViewTab(new CkEditorView(item.toPath())));
					} else if(name.endsWith(".xlsx") || name.endsWith(".xls")) {
						editors.selectTab(editors.addViewTab(new SpreadsheetView(item.toPath())));
					} else {
						editors.selectTab(editors.addViewTab(new AceEditorView(item.toPath())));
					}
				}
			}
		});
		GridContextMenu<File> contextMenu = treeGrid.addContextMenu();
		contextMenu.setDynamicContentHandler(file -> {
			contextMenu.removeAll();
			if(file.isDirectory()) {
				contextMenu.addItem("Open Terminal", event -> {
					if(event.getItem().isPresent()) {
						TerminalView terminalView = new TerminalView(event.getItem().get().toPath());
						Tab terminalViewTab = tools.addViewTab(terminalView);
						tools.selectTab(terminalViewTab);
					}
				});
				return true;
			}
			return false;
		});
		resize();
		return fileSelect;
	}

	@Override
	public void reset() {
		removeAll();
		FileSelect fileSelect = createFileSelect();
		add(fileSelect);
		getTreeGrid(fileSelect).expand(path.toFile());
	}

	@SuppressWarnings("unchecked")
	private TreeGrid<File> getTreeGrid(FileSelect fileSelect) {
		try {
			Field treeField;
			treeField = FileSelect.class.getDeclaredField("tree");
			treeField.setAccessible(true);
			return (TreeGrid<File>)treeField.get(fileSelect);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
}
