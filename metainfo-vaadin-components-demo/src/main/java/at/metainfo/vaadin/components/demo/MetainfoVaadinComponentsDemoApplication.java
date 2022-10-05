package at.metainfo.vaadin.components.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MetainfoVaadinComponentsDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MetainfoVaadinComponentsDemoApplication.class, args);
	}

	@Value("${server.servlet.context-path:}")
	private String CONTEXT_PATH;

	public String contextPath() {
		return CONTEXT_PATH == null ? "" : CONTEXT_PATH;
	}

//	@Bean
//	public ResourceBundleMessageSource getResourceBundleMessageSource() {
//		ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
//		//resourceBundleMessageSource.setBasenames("i18n");
//		return resourceBundleMessageSource;
//	}
}
