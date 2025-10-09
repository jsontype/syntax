/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name];

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import jp.co.[company_name].[main_system_name].config.FQCNBeanNameGenerator;

/**
 * UI 어플리케이션
 * 
 * @author [author]
 * @version [version] [update_date]
 */
@SpringBootApplication
@ComponentScan(nameGenerator = FQCNBeanNameGenerator.class)
@MapperScan(basePackages = { "jp.co.[company_name].[main_system_name].mapper", "jp.co.[company_name].[main_system_name].is.mapper" }, nameGenerator = FQCNBeanNameGenerator.class)
public class IndoorSimUiApplication {

	/**
	 * 메인
	 * 
	 * @param args 인자
	 */
	public static void main(String[] args) {
		// 앱을 실행한다.
		SpringApplication app = new SpringApplication(IndoorSimUiApplication.class);
		app.run(args);
	}
}