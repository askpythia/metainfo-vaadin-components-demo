package at.metainfo.vaadin.components.demo;
 
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;
 
/**
 * SpringContext provides access to Spring beans from not Spring managed classes
 */
@Component
public class SpringContext implements ApplicationContextAware {
     
    private static ApplicationContext context;
     
    /**
     * Returns the Spring managed bean instance of the given class type if it exists.
     * Returns null otherwise.
     * @param beanClass
     * @return
     */
	public static <T extends Object> T getBean(Class<T> beanClass) {
		return context == null ? null : context.getBean(beanClass);
	}

    @Override
    public void setApplicationContext(ApplicationContext context) throws BeansException {
        // store ApplicationContext reference to access required beans later on
        SpringContext.context = context;
    }
}