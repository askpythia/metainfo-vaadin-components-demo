package at.metainfo.vaadin.components.demo.views;

import java.nio.file.Path;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.icon.VaadinIcon;

import at.metainfo.enhanced.IEnhancedView;
import at.metainfo.vaadin.components.demo.MetainfoVaadinComponentsDemoApplication;
import at.metainfo.vaadin.components.demo.SpringContext;
import at.metainfo.vaadin.components.demo.xterm.Xterm;
import at.metainfo.vaadin.components.demo.xterm.XtermAction;
import at.metainfo.vaadin.components.demo.xterm.XtermConfiguration;

public class TerminalView implements IEnhancedView {

	private Xterm xterm;
	private Path path;

	public TerminalView(Path path) {
		this.path = path;
	}

	@Override
	public String title() {
		return "Shell";
	}

	@Override
	public Object titleIcon() {
		return icon(VaadinIcon.TERMINAL);
	}

	@Override
	public Component createContent() {
		init();
		return xterm;
	}

	@Override
	public Component createToolbar() {
		init();
		return toolbar(xterm.actions(XtermAction.values()));
	}

	private void init() {
		MetainfoVaadinComponentsDemoApplication app = SpringContext.getBean(MetainfoVaadinComponentsDemoApplication.class);
		if(xterm == null) { 
			xterm = new Xterm(app.contextPath() + XtermConfiguration.XTERM_CONTEXT, path);
		}
	}
}
