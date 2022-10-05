package at.metainfo.vaadin.components.demo.views;

import com.flowingcode.vaadin.addons.xterm.ITerminalOptions.CursorStyle;
import com.flowingcode.vaadin.addons.xterm.XTerm;
import com.github.javafaker.Faker;
import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.DetachEvent;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

import at.metainfo.enhanced.Closeable;
import at.metainfo.enhanced.IEnhancedView;
import at.metainfo.utilities.IGuiUtilities;

public class ConsoleView implements IEnhancedView, IGuiUtilities {

	private Div content;
	private XTerm xterm;
	private Faker faker = new Faker();

	public ConsoleView() {
	}

	@Override
	public Object object() {
		return new Object();
	}

	@Override
	public String title() {
		return "Console";
	}

	@Override
	public Object titleIcon() {
		return icon(VaadinIcon.TERMINAL);
	}

	@Override
	public boolean close(Closeable closeable) {
		if(closeable != null) {
			new ConfirmDialog("Close " + title(), "Do you want to close the " + title() + "?", "Close", event -> {
				closeable.close();
			}, "Stay Open", event -> {}).open();
		}
		return true;
	}

	@Override
	public Component createToolbar() {
		return toolbar(
			icon(VaadinIcon.EDIT, click -> xterm.writeln(faker.chuckNorris().fact())),
			icon(VaadinIcon.ERASER, click -> xterm.clear()),
			icon(VaadinIcon.REFRESH, click -> xterm.reset()),
			icon(VaadinIcon.RESIZE_H, click -> resize()),
			icon(VaadinIcon.REFRESH, click -> rebuild())
		);
	}

	@Override
	public Component createFooter() {
		HorizontalLayout footer = toolbar(
			VaadinIcon.ABACUS.create(),
			VaadinIcon.ACADEMY_CAP.create()
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
		if(xterm != null) xterm.fit();
	}

	@Override
	public void reset() {
		// Do nothing, will be rebuilded ...
	}

	private void rebuild() {
		content.removeAll();
		content.add(createXterm());
	}

	@Override
	public Component createContent() {
		content = new Div();
		content.setSizeFull();
		content.add(createXterm());
		return content;
	}

	@SuppressWarnings("serial")
	private XTerm createXterm() {
		xterm = new XTerm() {
			/* 
			 * Xterm has a problem when it will be detatched and re-attached
			 * A quick-fix is to re-instanciate a new Xterm when detach / re-attach happens
			 */
			boolean detached = false;
			@Override
			protected void onAttach(AttachEvent attachEvent) {
				if(detached) rebuild();
			}
			@Override
			protected void onDetach(DetachEvent detachEvent) {
				detached = true;
			}
		};

		xterm.setCursorStyle(CursorStyle.BLOCK);
		xterm.setCursorBlink(true);
		xterm.setFitOnResize(true);
		xterm.setRightClickSelectsWord(true);

		xterm.writeln(faker.chuckNorris().fact());

		return xterm;
	}
}