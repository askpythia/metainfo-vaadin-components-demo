package at.metainfo.vaadin.components.demo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.splitlayout.SplitLayout;
import com.vaadin.flow.router.Route;

import at.metainfo.color.Css3Color;
import at.metainfo.enhanced.EnhancedTabs;
import at.metainfo.utilities.IGuiUtilities;
import at.metainfo.vaadin.components.demo.views.AceEditorView;
import at.metainfo.vaadin.components.demo.views.FilesystemView;
import at.metainfo.vaadin.components.demo.views.TerminalView;
import at.metainfo.vaadin.components.demo.views.TextAreaView;

@SuppressWarnings("serial")
@Route("")
public class MetainfoVaadinComponentsDemo extends Div implements IGuiUtilities {

	public MetainfoVaadinComponentsDemo() {
		// Use the full size of the root div
		setSizeFull();

		// Build initial EnhancedTabs
		EnhancedTabs editors = editors();
		EnhancedTabs tree = tree(editors);
		EnhancedTabs tools = tools();

		// Arrange the double split layout
		SplitLayout horizontalSplit = hs(
			tree,
			editors
		);
		horizontalSplit.setSplitterPosition(25);
		SplitLayout verticalSplit = vs(
			horizontalSplit,
			tools
		);
		add(verticalSplit);
		verticalSplit.setSplitterPosition(66);

		// Add resize listeners to inform potential views who need a resize event
		horizontalSplit.addSplitterDragendListener(event -> {
			tree.resize();
			editors.resize();
		});
		verticalSplit.addSplitterDragendListener(event -> {
			tree.resize();
			editors.resize();
			tools.resize();
		});
	}

	private EnhancedTabs tree(EnhancedTabs editors) {
		EnhancedTabs treeTabs = new EnhancedTabs();
		treeTabs.setSizeFull();
		treeTabs.setDraggable(true);
		treeTabs.setGlobalTarget(true);

		Path root; 
		try {
			root = new File(".").getCanonicalFile().toPath();
		} catch (IOException e) {
			root = Path.of(".");
		}
		treeTabs.addView(new FilesystemView(root, editors, false));

		return treeTabs;
	}

	private EnhancedTabs editors() {
		EnhancedTabs editorTabs = new EnhancedTabs();
		editorTabs.setSizeFull();
		editorTabs.setDraggable(true);
		editorTabs.setGlobalTarget(true);

		editorTabs.addView(new AceEditorView(Path.of("info.txt")));
		editorTabs.addView(new FilesystemView(Paths.get("src/main/java/at/metainfo/vaadin/components/demo"), editorTabs, true));

		return editorTabs;
	}

	private EnhancedTabs tools() {
		EnhancedTabs toolTabs = new EnhancedTabs();
		toolTabs.setSizeFull();
		toolTabs.setDraggable(true);
		toolTabs.setGlobalTarget(true);
		
		toolTabs.addToToolbar(
			new Button("Add Terminal", event -> toolTabs.addView(new TerminalView()))
		);

		toolTabs.addView(new TextAreaView(Css3Color.LavenderBlush, Locale.ENGLISH));
		toolTabs.addView(new TextAreaView(Css3Color.DimGray, Locale.GERMAN));
		toolTabs.addView(new TerminalView());

		return toolTabs;
	}
}
