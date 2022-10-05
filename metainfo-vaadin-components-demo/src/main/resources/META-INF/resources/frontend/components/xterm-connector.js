import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebLinksAddon } from 'xterm-addon-web-links';
import { SearchAddon } from 'xterm-addon-search';

window.Vaadin.xtermConnector = {

	initialize(container, wsContext, workingDirectory) {

		let terminal = new Terminal({
			cursorBlink: true
		});

		let fitAddon = new FitAddon();
		terminal.loadAddon(fitAddon);

		terminal.loadAddon(new WebLinksAddon());

		let searchAddon = new SearchAddon();
		terminal.loadAddon(searchAddon);

		terminal.open(container);

		const info = {
			terminal: terminal,
			fitAddon: fitAddon,
			searchAddon: searchAddon,
			container: container
		}
		container.info = info;

		new ResizeObserver(()=>this.fit(container)).observe(container)

		let sec = location.protocol.indexOf("https") > -1
		let ws = new WebSocket(`${sec ? "wss" : "ws"}://${location.host}${wsContext}`);
		info.ws = ws;

		info.terminal.onData(data => {
			ws.send(
				this.action('TERMINAL_COMMAND', {
					data
				})
			);
		});

		ws.onopen = () => {
			ws.send(this.action('TERMINAL_INIT'));
			ws.send(this.action('TERMINAL_READY', {workingDirectory}));
			this.fit(info.container)
		};

		ws.onmessage = e => {
			if (!info.terminal.resized) {
				this.fit(info.container)
				info.terminal.resized = true;
			}
			let data = JSON.parse(e.data);
			switch (data.type) {
				case 'TERMINAL_PRINT':
					info.terminal.write(data.text);
			}
		};

		ws.onerror = e => {
			console.warn(e);
		};

		ws.onclose = e => {
			console.warn(e);
			info.terminal.dispose();
		};
	},

	action(type, data) {
		return JSON.stringify({
			type,
			...data,
		});
	},

	fit(container) {
		if(container.info && container.info.ws.readyState == 1) {
			container.info.fitAddon.fit();
			try {
				container.info.ws.send(this.action('TERMINAL_RESIZE', {columns: container.info.terminal.cols, rows: container.info.terminal.rows}));
			} catch(ex) {
				console.log(ex);
			}
		}
	},

	findNext(container, text) {
		if(container.info) {
			container.info.searchAddon.findNext(text);
		}
	},

	findPrevious(container, text) {
		if(container.info) {
			container.info.searchAddon.findPrevious(text);
		}
	}
}
