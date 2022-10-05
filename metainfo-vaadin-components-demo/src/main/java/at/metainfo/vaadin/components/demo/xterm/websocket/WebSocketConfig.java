package at.metainfo.vaadin.components.demo.xterm.websocket;

import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.handler.PerConnectionWebSocketHandler;

public abstract class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public abstract void registerWebSocketHandlers(WebSocketHandlerRegistry registry);
    /* registry.addHandler(terminalSocket(), "/terminal"); */

    @Bean
    public WebSocketHandler terminalSocket() {
        WebSocketHandler webSocketHandler = new PerConnectionWebSocketHandler(TerminalSocket.class);
        return webSocketHandler;
    }
}
