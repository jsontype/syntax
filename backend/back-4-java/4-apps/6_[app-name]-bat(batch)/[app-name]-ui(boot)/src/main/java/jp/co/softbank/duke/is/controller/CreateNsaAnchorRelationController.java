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
import jp.co.[company_name].[main_system_name].is.service.CreateNsaAnchorRelationService;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * NSA Anchor Relation 작성 컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class CreateNsaAnchorRelationController extends IsControllerBase {

	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(CreateNsaAnchorRelationController.class);

	/** NSA Anchor Relation 작성 서비스 */
	@Autowired
	private CreateNsaAnchorRelationService service;

	/**
	 * NSA Anchor Relation을 작성한다.
	 *
	 * @param params NSA Anchor Relation 작성정보
	 * @param userInfo 유저정보
	 * @return NSA Anchor Relation 작성결과
	 */
	@PostMapping(Consts.SIM_UI_CREATE_NSA_ANCHOR_RELATION)
	public WebApiResponse<Object> createNsaAnchorRelation(@RequestBody Object params, @AuthenticationPrincipal UserInfo userInfo) {

		log.info("createNsaAnchorRelation Start");

		WebApiResponse<Object> response = service.createNsaAnchorRelation(params, userInfo.getUserId());

		log.info("createNsaAnchorRelation End");
		
		return response;
	}
}
