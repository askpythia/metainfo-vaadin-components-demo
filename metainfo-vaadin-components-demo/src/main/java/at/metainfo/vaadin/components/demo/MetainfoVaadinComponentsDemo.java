package at.metainfo.vaadin.components.demo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.page.Push;
import com.vaadin.flow.component.splitlayout.SplitLayout;
import com.vaadin.flow.router.PreserveOnRefresh;
import com.vaadin.flow.router.Route;

import at.metainfo.color.Css3Color;
import at.metainfo.enhanced.EnhancedTabs;
import at.metainfo.utilities.IGuiUtilities;
import at.metainfo.vaadin.components.demo.views.AceEditorView;
import at.metainfo.vaadin.components.demo.views.CkEditorView;
import at.metainfo.vaadin.components.demo.views.FilesystemView;
import at.metainfo.vaadin.components.demo.views.ConsoleView;
import at.metainfo.vaadin.components.demo.views.TextAreaView;

@SuppressWarnings("serial")
@Route("")
@PreserveOnRefresh
public class MetainfoVaadinComponentsDemo extends Div implements IGuiUtilities {

	public MetainfoVaadinComponentsDemo() {
		// Use the full size of the root div
		setSizeFull();

		// Build initial EnhancedTabs
		EnhancedTabs tools = tools();
		EnhancedTabs editors = editors(tools);
		EnhancedTabs tree = tree(editors, tools);

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

	private EnhancedTabs tree(EnhancedTabs editors, EnhancedTabs tools) {
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
		treeTabs.addView(new FilesystemView(root, editors, tools, false));

		return treeTabs;
	}

	private EnhancedTabs editors(EnhancedTabs tools) {
		EnhancedTabs editors = new EnhancedTabs();
		editors.setSizeFull();
		editors.setDraggable(true);
		editors.setGlobalTarget(true);

		editors.addView(new AceEditorView(Path.of("metainfo.txt")));
		editors.addView(new CkEditorView(Path.of("metainfo.html")));
		editors.addView(new FilesystemView(Paths.get("src/main/java/at/metainfo/vaadin/components/demo"), editors, tools, true));

		return editors;
	}

	private EnhancedTabs tools() {
		EnhancedTabs toolTabs = new EnhancedTabs();
		toolTabs.setSizeFull();
		toolTabs.setDraggable(true);
		toolTabs.setGlobalTarget(true);

		ComboBox<Css3Color> selectNewTextArea = new ComboBox<>();
		selectNewTextArea.addValueChangeListener(event -> {
			toolTabs.selectTab(toolTabs.addViewTab(new TextAreaView(event.getValue(), Locale.forLanguageTag(Locale.getDefault().getLanguage()))));
			selectNewTextArea.clear();
		});
		selectNewTextArea.setPlaceholder("Add Textarea");
		selectNewTextArea.setItems(Css3Color.values());

		toolTabs.addToToolbar(
			new Button("Console", event -> toolTabs.addView(new ConsoleView())),
			selectNewTextArea
		);

		toolTabs.addView(new TextAreaView(Css3Color.LavenderBlush, Locale.ENGLISH));
		toolTabs.addView(new TextAreaView(Css3Color.DimGray, Locale.GERMAN));
		toolTabs.addView(new ConsoleView());

		return toolTabs;
	}
}
