package at.metainfo.vaadin.components.demo;

import static at.metainfo.color.Css3Color.*;

import java.util.Locale;
import java.util.function.Function;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.Notification.Position;
import com.vaadin.flow.component.splitlayout.SplitLayout;
import com.vaadin.flow.router.Route;

import at.metainfo.color.Css3Color;
import at.metainfo.enhanced.EnhancedDialog;
import at.metainfo.enhanced.HasIconProvider.ViewIcon;
import at.metainfo.enhanced.EnhancedTabs;
import at.metainfo.utilities.IGuiUtilities;
import at.metainfo.vaadin.components.demo.views.TerminalView;
import at.metainfo.vaadin.components.demo.views.TextAreaView;

@SuppressWarnings("serial")
@Route("")
public class MetainfoVaadinComponentsDemo extends Div implements IGuiUtilities {

	public MetainfoVaadinComponentsDemo() {
		setSizeFull();

		EnhancedTabs ev1 = createEnhancedView(Red/*, Green, Blue*/);
		EnhancedTabs ev2 = createEnhancedView(Yellow/*, Cyan, Magenta*/);
		EnhancedTabs ev3 = createEnhancedView(Locale.ENGLISH, /*Black,*/ White);
		EnhancedTabs ev4 = createEnhancedView(Locale.ENGLISH);
		ev4.addView(new TerminalView());

		ev1.getStyle().set("overflow", "hidden");
		ev2.getStyle().set("overflow", "hidden");
		ev3.getStyle().set("overflow", "hidden");
		ev4.getStyle().set("overflow", "hidden");

		SplitLayout vs1 = vs(ev1, ev2);
		SplitLayout vs2 = vs(ev3, ev4);
		SplitLayout hs = hs(vs1,vs2);

		vs1.addSplitterDragendListener(event -> {
			ev1.reset();
			ev2.reset();
		});
		vs2.addSplitterDragendListener(event -> {
			ev3.resize();
			ev4.resize();
		});
		hs.addSplitterDragendListener(event -> {
			ev1.resize();
			ev2.resize();
			ev3.resize();
			ev4.resize();
		});

		add(hs);
	}

	private EnhancedTabs createEnhancedView(Css3Color... colors) {
		return createEnhancedView(Locale.forLanguageTag(Locale.getDefault().getLanguage()), colors);
	}

	private EnhancedTabs createEnhancedView(Locale locale, Css3Color... colors) {
		EnhancedTabs enhancedView = new EnhancedTabs(locale == Locale.ENGLISH ? getIconProvider() : null);
		enhancedView.setSizeFull();
		enhancedView.setDraggable(true);
		enhancedView.setGlobalTarget(true);

		for(Css3Color color : colors) {
			enhancedView.addView(new TextAreaView(color, locale));
		}

		ComboBox<Css3Color> colorSelection = new ComboBox<>();
		colorSelection.setItems(Css3Color.values());
		colorSelection.setPlaceholder("Select color for new Tab");
		colorSelection.setWidth("14em");
		Button add = new Button("Add", click -> {
			if(colorSelection.isEmpty()) {
				Notification.show("Select a background color first!", 2000, Position.MIDDLE);
			} else {
				TextAreaView view = new TextAreaView(colorSelection.getValue(), locale);
				enhancedView.addView(view);
				enhancedView.selectTab(view);
				colorSelection.clear();
			}
		});
		Button term = new Button("Add Terminal", click -> {
			TerminalView terminal = new TerminalView();
			enhancedView.addView(terminal);
			enhancedView.selectTab(terminal);
		});
		Button dialog = new Button("Dialog", click -> {
			new EnhancedDialog(new TextAreaView(Cyan, Locale.ENGLISH)).open();
		});
		enhancedView.addToToolbar(colorSelection, add, term, dialog);
		enhancedView.setMinimizeable(true);

		return enhancedView;
	}

	private Function<ViewIcon, Component> getIconProvider() {
		return key -> {
			switch(key) {
			case tabsMinimizeIcon:
				return VaadinIcon.CARET_SQUARE_UP_O.create();
			case tabsMaximizeIcon:
				return VaadinIcon.CARET_SQUARE_DOWN_O.create();
			default:
				return null;
			}
		};
	}
}
