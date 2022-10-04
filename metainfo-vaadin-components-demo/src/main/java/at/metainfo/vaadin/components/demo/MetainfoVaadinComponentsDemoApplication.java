package at.metainfo.vaadin.components.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MetainfoVaadinComponentsDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MetainfoVaadinComponentsDemoApplication.class, args);
	}
	
//	@Bean
//	public ResourceBundleMessageSource getResourceBundleMessageSource() {
//		ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
//		//resourceBundleMessageSource.setBasenames("i18n");
//		return resourceBundleMessageSource;
//	}
}
