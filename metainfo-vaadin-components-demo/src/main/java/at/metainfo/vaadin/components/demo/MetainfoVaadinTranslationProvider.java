package at.metainfo.vaadin.components.demo;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.vaadin.flow.i18n.I18NProvider;

@Component
public class MetainfoVaadinTranslationProvider implements I18NProvider {
	private static final long serialVersionUID = 314931112507893763L;

	private ResourceBundleMessageSource resourceBundleMessageSource;

	public MetainfoVaadinTranslationProvider(ResourceBundleMessageSource resourceBundleMessageSource) {
		this.resourceBundleMessageSource = resourceBundleMessageSource;
	}

	@Override
	public List<Locale> getProvidedLocales() {
		return Arrays.asList(Locale.getAvailableLocales());
	}

	@Override
	public String getTranslation(String key, Locale locale, Object... params) {
		String message = resourceBundleMessageSource.getMessage(key, params, null, locale);
		if(message == null) {
			message = key.formatted(params);
		}
		return message;
	}
}
