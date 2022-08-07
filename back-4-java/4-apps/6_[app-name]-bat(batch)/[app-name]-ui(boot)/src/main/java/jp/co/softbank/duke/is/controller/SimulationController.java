/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.[company_name].[main_system_name].auth.UserInfo;
import jp.co.[company_name].[main_system_name].is.config.Consts;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocEntity;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.service.TbTrnIsdocService;
import jp.co.[company_name].[main_system_name].is.service.YskSimulationService;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * 시뮬레이션 컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class SimulationController {
	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(SimulationController.class);

	/** 예측도, 시뮬레이션 서비스 */
	@Autowired
	private YskSimulationService yskSimulationService;

	/** 제원정보 서비스 */
	@Autowired
	private TbTrnIsdocService isDocService;

	/**
	 * 시뮬레이션 개시, 정지를 요구한다.
	 * 샘플 URL:http://localhost:9090/[app_name]-ui/simulation-command?spec-id=D002023416&command=START
	 * 이하로 변경
	 * 샘플 URL:http://localhost:8080/[app_name]-ui/[app_name]/simulate/D002023416/START
	 *
	 * @param specid 제원정보
	 * @param command 시뮬레이션 명령
	 * @param userInfo 인증 유저 정보
	 * @return 처리결과
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_SIMULATE + "/{spec-id}/{command}")
	public WebApiResponse<Object> simulation(@PathVariable("spec-id") String specId,
			@PathVariable("command") String command,
			@AuthenticationPrincipal UserInfo userInfo) {
		log.info("simulation Start");

		TbTrnIsdocEntity isDocSearchBean = new TbTrnIsdocEntity();
		isDocSearchBean.setSpecId(specId);
		Result<List<TbTrnIsdocEntity>> isResult = isDocService.select(isDocSearchBean);
		List<TbTrnIsdocEntity> isBeanList = isResult.getResponse();
		if (isBeanList == null || isBeanList.isEmpty()) {
			// 제원정보취득 없음
			WebApiResponse<Object> result = new WebApiResponse<Object>();
			result.addMessage(new Message(MessageConst.MSG_W_IS0009, specId));
			return result;
		}
		TbTrnIsdocEntity isDocResultBean = isBeanList.get(0);

		// 시뮬레이션 개시, 정지를 불러온다.
		WebApiResponse<Object> response = yskSimulationService.runCommand(specId, command, userInfo.getUserId(), isDocResultBean.getSiteId());

		log.info("simulation End");

		return response;
	}
}
