package at.metainfo.vaadin.components.demo.xterm;

import java.util.function.Function;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.KeyModifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.textfield.TextField;

public enum XtermAction {

	fit(x -> new Button("Fit", click -> x.fit())),
	clear(x -> new Button("Clear", click -> x.clear())),
	find(x -> {
		TextField search = new TextField();
		Icon prev = new Icon(VaadinIcon.CHEVRON_LEFT);
		prev.addClickListener(event -> x.findPrevious(search.getValue()));
		Icon next = new Icon(VaadinIcon.CHEVRON_RIGHT);
		next.addClickListener(event -> x.findNext(search.getValue()));
		search.setPlaceholder("Search");
		search.setPrefixComponent(prev);
		search.setSuffixComponent(next);
		search.addKeyPressListener(event -> {
			if(event.getKey().equals(Key.ENTER)) {
				if(event.getModifiers().contains(KeyModifier.SHIFT)) {
					x.findPrevious(search.getValue());
				} else {
					x.findNext(search.getValue());
				}
			}
		});
		return search;
	}),
	fontSizeLarger(x -> new Button("Font +", click -> x.setFontSizeLarger())),
	fontSizeSmaller(x -> new Button("Font -", click -> x.setFontSizeSmaller())),
	blackTheme(x -> new Button("Black", click -> x.setBlackTheme())),
	whiteTheme(x -> new Button("White", click -> x.setWhiteTheme())),
	;

	private final Function<Xterm,Component> action;

	private XtermAction(Function<Xterm,Component> action) {
		this.action = action;
	}

	public Function<Xterm, Component> getAction() {
		return action;
	}
}
