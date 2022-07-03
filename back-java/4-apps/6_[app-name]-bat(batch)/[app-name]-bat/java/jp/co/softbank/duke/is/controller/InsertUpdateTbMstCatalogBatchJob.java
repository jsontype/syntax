/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.service.InsertUpdateTbMstCatalogService;

/**
 * 부재마스타 갱신 Batch Job 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Component
@ConditionalOnProperty(value = "command", havingValue = "InsertUpdateTbMstCatalogBatchJob")
public class InsertUpdateTbMstCatalogBatchJob implements CommandLineRunner {
	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(InsertUpdateTbMstCatalogBatchJob.class);

	/** 부재마스타 INSERT・UPDATE 서비스 */
	@Autowired
	private InsertUpdateTbMstCatalogService insertUpdateTbMstCatalogService;

	@Transactional
	@Override
	public void run(String... args) throws Exception {
		log.info("run start");

		insertUpdateTbMstCatalogService.insertUpdateTbMstCatalog();

		log.info("run end");
	}

}
