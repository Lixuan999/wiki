package com.zyplayer.doc.swagger.framework.configuration;

import com.zyplayer.doc.swagger.framework.filter.ZyplayerProxyFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
@Import({SwaggerCommonConfiguration.class, SpringContextUtil.class, ZyplayerProxyFilter.class})
public @interface EnableDocSwagger {
	
	/**
	 * 是否自动把自身的swagger-resources加进来
	 *
	 * @return 配置
	 */
	boolean selfDoc() default true;
	
	/**
	 * 启动后第一次访问没有数据情况下需要加载进来的swagger-resources地址
	 *
	 * @return swagger-resources地址
	 */
	String[] defaultResources() default {};
	
	/**
	 * 启动后第一次访问没有数据情况下需要加载进来的/v2/doc地址
	 *
	 * @return /v2/doc地址
	 */
	String[] defaultLocation() default {};
}
