/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.[company_name].[main_system_name].auth.UserInfo;
import jp.co.[company_name].[main_system_name].is.config.Consts;
import jp.co.[company_name].[main_system_name].is.service.CreatePdfService;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * PDF출력 컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class CreatePdfController extends IsControllerBase {

	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(CreatePdfController.class);

	/** PDF출력 서비스 */
	@Autowired
	private CreatePdfService service;

	/**
	 * PDF를 출력한다.
	 *
	 * @param params PDF출력정보
	 * @param userInfo 유저정보
	 * @return PDF출력결과
	 */
	@PostMapping(Consts.SIM_UI_CREATE_PDF)
	public WebApiResponse<Object> createPdf(@RequestBody Object params, @AuthenticationPrincipal UserInfo userInfo) {
		log.info("createPdf Start");
		
		WebApiResponse<Object> response = service.createPdf(params, userInfo.getUserId());

		log.info("createPdf End");

		return response;
	}

}
