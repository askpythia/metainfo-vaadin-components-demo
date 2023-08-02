package at.metainfo.vaadin.components.demo.xterm;

import java.nio.file.Path;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JavaScript;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

@SuppressWarnings("serial")
@NpmPackage(value="xterm", version="^5.2.1")
@NpmPackage(value="xterm-addon-fit", version="^0.7.0")
@NpmPackage(value="xterm-addon-web-links", version="^0.8.0")
@NpmPackage(value="xterm-addon-search", version="^0.12.0")
//@NpmPackage(value="xterm-addon-unicode11", version="^0.5.0")
//@NpmPackage(value="xterm-addon-web-fonts", version="^1.0.1")
@CssImport("xterm/css/xterm.css")
@JavaScript("./components/xterm-connector.js")
public class Xterm extends Div {

	private int fontSize = 16;

    public Xterm(String wsContext, Path path) {
    	setSizeFull();
    	String wd = path.toFile().getAbsolutePath();
        getElement().executeJs("window.Vaadin.xtermConnector.initialize(this, $0, $1)", wsContext, wd);
        setWhiteTheme();
    }

    public void fit() {
    	getElement().executeJs("window.Vaadin.xtermConnector.fit(this)");    	
    }

    public void findNext(String text) {
    	getElement().executeJs("window.Vaadin.xtermConnector.findNext(this, $0)", text);    	
    }

    public void findPrevious(String text) {
    	getElement().executeJs("window.Vaadin.xtermConnector.findPrevious(this, $0)", text);    	
    }
    
    public void clear() {
    	getElement().executeJs("this.info.terminal.clear()");
    	focus();
    }

    public void setFontSize(int fontSize) {
    	getElement().executeJs("this.info.terminal.options.fontSize=$0", fontSize);
    	fit();
    	focus();
    }
    
    public void setFontSizeLarger() {
    	setFontSize(++fontSize);
    }

    public void setFontSizeSmaller() {
    	setFontSize(--fontSize);
    }

    public void setWhiteTheme() {
    	getElement().executeJs("this.info.terminal.options.theme = {background: '#FFFFFF', foreground: '#000000', selectionForeground: '#C0C0C0', selectionBackground: '#303030', cursor: '#000000'}");
    	focus();
    }

    public void setBlackTheme() {
    	getElement().executeJs("this.info.terminal.options.theme = {background: '#000000', foreground: '#FFFFFF', selectionForeground: '#303030', selectionBackground: '#C0C0C0', cursor: '#FFFFFF'}");
    	focus();
    }

    public void focus() {
    	getElement().executeJs("this.info.terminal.focus()");
    }

    public void write(String text) {
    	getElement().executeJs("this.info.terminal.write($0)", text);
    }

    public void writeln(String text) {
    	getElement().executeJs("this.info.terminal.writeln($0)", text);
    }

    public Component actions(XtermAction... actions) {
		HorizontalLayout actionBar = new HorizontalLayout();
		for(XtermAction action : actions) {
			actionBar.add(action.getAction().apply(this));
		}
		actionBar.setWidthFull();
    	return actionBar;
    }
}
