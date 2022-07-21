/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name];

import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.MDC;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.EnableAsync;

import jp.co.[company_name].[main_system_name].config.FQCNBeanNameGenerator;
import jp.co.[company_name].[main_system_name].exception.BatchRuntimeException;

/**
 * Batch 어플리케이션
 * @author auto generate.
 */
@Profile("!test")
@SpringBootApplication
@EnableAsync
@ComponentScan(nameGenerator = FQCNBeanNameGenerator.class)
@MapperScan(basePackages = {"jp.co.[company_name].[main_system_name].mapper", "jp.co.[company_name].[main_system_name].is.mapper"}, nameGenerator = FQCNBeanNameGenerator.class)
public class IndoorSimBatApplication {

	private static final String THREAD_ID = "threadId";
	private static final int THREAD_ID_SIZE = 4;

	/**
	 * main
	 * @param args a
	 */
	public static void main(String[] args) {

		ConfigurableApplicationContext context = null;
		try {
			MDC.put(THREAD_ID, DateFormatUtils.format(new Date(), "yyyyMMddHHmmssSSS")
					+ StringUtils.leftPad(String.valueOf(Thread.currentThread().getId()), THREAD_ID_SIZE, "0"));

			context = new SpringApplicationBuilder(IndoorSimBatApplication.class).web(WebApplicationType.NONE).run(args);
			System.exit(SpringApplication.exit(context, () -> 0));

		} catch (BatchRuntimeException e) {
			System.exit(SpringApplication.exit(context, e));

		} finally {
			MDC.remove(THREAD_ID);
		}
	}
}
