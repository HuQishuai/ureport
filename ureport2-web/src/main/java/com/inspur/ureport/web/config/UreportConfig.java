package com.inspur.ureport.web.config;

import com.bstek.ureport.console.UReportServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

import javax.servlet.Servlet;

/**
 *  Ureport2 配置类
 * @author huqishuai
 */

@Configuration
@ImportResource("classpath:ureport-console-context.xml")
public class UreportConfig {

	@Bean
	public ServletRegistrationBean<Servlet> buildUreportServlet(){
		return new ServletRegistrationBean<>(new UReportServlet(), "/ureport/*");
	}

}


