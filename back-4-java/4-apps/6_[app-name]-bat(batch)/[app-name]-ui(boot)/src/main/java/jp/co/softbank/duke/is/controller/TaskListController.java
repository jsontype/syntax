/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jp.co.[company_name].[main_system_name].auth.UserInfo;
import jp.co.[company_name].[main_system_name].is.config.Consts;
import jp.co.[company_name].[main_system_name].is.service.TbHisIsTaskListService;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * 태스크 리스트 컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class TaskListController extends IsControllerBase {

	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(TaskListController.class);

	/** 태스크 리스트 서비스 */
	@Autowired
	private TbHisIsTaskListService service;

	/**
	 * 태스크 리스트를 취득한다.
	 *
	 * @param request 리퀘스트
	 * @param specid 제원정보
	 * @param siteId 사이트ID
	 * @return 태스트 리스트 취득결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_TASK_LIST)
	public WebApiResponse<Object> getTaskList(HttpServletRequest request, @RequestParam("spec-id") String specId, @RequestParam("site-id") String siteId) {
		log.info("getTaskList Start");

		WebApiResponse<Object> response = service.getTaskList(specId, siteId);

		log.info("getTaskList End");

		return response;
	}

	/**
	 * 태스크 리스트를 설정한다.
	 *
	 * @param params 태스크 리스트 설정정보
	 * @param userInfo 유저정보
	 * @return 태스크 리스트 설정결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_TASK_LIST)
	public WebApiResponse<Object> setTaskList(@RequestBody Object params, @AuthenticationPrincipal UserInfo userInfo) {
		log.info("setTaskList Start");

		WebApiResponse<Object> response = service.setTaskList(params, userInfo.getUserId());

		log.info("setTaskList End");

		return response;
	}

}
