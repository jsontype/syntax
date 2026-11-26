/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.[company_name].[main_system_name].auth.UserInfo;
import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.Consts;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbMstIscommonEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbMstIscommonNodeEntity;
import jp.co.[company_name].[main_system_name].is.enums.VariableDisplayTypeEnum;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.service.TbMstIscommonService;
import jp.co.[company_name].[main_system_name].is.utils.ChangeVariableName;
import jp.co.[company_name].[main_system_name].is.utils.EntityChangeUtils;
import jp.co.[company_name].[main_system_name].is.utils.IsJsonUtil;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * IS Doc 정보취득, 갱신커맨드 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class IscommonController extends IsControllerBase {

	private static final Logger log = LoggerFactory.getLogger(IscommonController.class);

	private static final String[] colNames = { "versionNo" };

	@Autowired
	private TbMstIscommonService service;

	private EntityChangeUtils<TbMstIscommonEntity, TbMstIscommonNodeEntity> entityChange = new EntityChangeUtils<TbMstIscommonEntity, TbMstIscommonNodeEntity>(
			TbMstIscommonEntity.class, TbMstIscommonNodeEntity.class);

	/**
	 * 공통마스타를 검색한다.
	 *
	 * @param id 공통마스타ID
	 * @param colName 공통마스타의 컬럼명
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISCOMMON_PATH + "/{id}/{columnName}")
	public WebApiResponse<Object> select(@PathVariable("id") String id, @PathVariable("columnName") String colName,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("select Start");
			if (id != null) {
				Map<String, ?> ifCondMap = this.parseID(id);
				String ifCondJson = IsJsonUtil.Map2JSON(ifCondMap);
				String ifCondJson1 = IsJsonUtil.Map2JSON(ifCondMap, false);
				String ifCondJson2 = IsJsonUtil.Map2JSON(ifCondMap, true);
				log.info("ID : " + id);
				log.info("Parse ID : " + ifCondJson);
				log.info("Parse ID1 : " + ifCondJson1);
				log.info("Parse ID2 : " + ifCondJson2);
				log.info("Map ID : " + ifCondMap);
				Result<List<TbMstIscommonEntity>> body = service.select(ifCondMap);
				result.setMessages(body.getMessages());
				List<TbMstIscommonEntity> listEntity = body.getResponse();
				List<TbMstIscommonNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);
				if (colName != null) {
					String valName = ChangeVariableName.changeName(VariableDisplayTypeEnum.LowerCamelCase, colName);
					String dbColName = ChangeVariableName.changeName(VariableDisplayTypeEnum.SnakeCase, colName);
					log.info("colName : " + colName);
					log.info("colName1 : " + valName);
					log.info("colName2 : " + dbColName);
					List<Map<String, Object>> response = new ArrayList<Map<String, Object>>();
					List<String> nameList = new ArrayList<String>(Arrays.asList(colNames));
					nameList.add(valName);
					if (listNodeEntity != null && !listNodeEntity.isEmpty()) {
						for (TbMstIscommonNodeEntity bean : listNodeEntity) {
							Map<String, Object> resultValue = new HashMap<String, Object>();
							for (String name : nameList) {
								Object value = bean.getObjectValue(bean, name);
								resultValue.put(name, value);
							}
							response.add(resultValue);
						}
					}
					if (response.isEmpty()) {
						result.setResponseBody(null);
					} else if (response.size() == 1) {
						result.setResponseBody(response.get(0));
					} else {
						result.setResponseBody(response);
					}
				} else {
					if (listEntity == null || listEntity.isEmpty()) {
						result.setResponseBody(null);
					} else if (listEntity.size() == 1) {
						result.setResponseBody(listEntity.get(0));
					} else {
						result.setResponseBody(listEntity);
					}
				}
			}
			log.info("select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 공통마스타를 검색한다.
	 *
	 * @param id 공통마스타ID
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISCOMMON_PATH + "/{id}")
	public WebApiResponse<Object> select(@PathVariable("id") String id,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("select Start");
			if (id != null) {
				log.info("ID : " + id);
				Map<String, ?> ifCondMap = this.parseID(id);
				String ifCondJson = IsJsonUtil.Map2JSON(ifCondMap);
				String ifCondJson1 = IsJsonUtil.Map2JSON(ifCondMap, false);
				String ifCondJson2 = IsJsonUtil.Map2JSON(ifCondMap, true);
				log.info("ID : " + id);
				log.info("Parse ID : " + ifCondJson);
				log.info("Parse ID1 : " + ifCondJson1);
				log.info("Parse ID2 : " + ifCondJson2);
				log.info("Map ID : " + ifCondMap);
				Result<List<TbMstIscommonEntity>> body = service.select(ifCondMap);
				result.setMessages(body.getMessages());
				List<TbMstIscommonEntity> listEntity = body.getResponse();
				List<TbMstIscommonNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);
				if (listNodeEntity == null || listNodeEntity.isEmpty()) {
					result.setResponseBody(null);
				} else if (listNodeEntity.size() == 1) {
					result.setResponseBody(listNodeEntity.get(0));
				} else {
					result.setResponseBody(listNodeEntity);
				}
			}
			log.info("select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 공통마스타를 검색한다.
	 *
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISCOMMON_PATH)
	public WebApiResponse<Object> select(@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("select Start");
			Map<String, ?> ifCondMap = new HashMap<String, String>();
			Result<List<TbMstIscommonEntity>> body = service.select(ifCondMap);
			result.setMessages(body.getMessages());
			List<TbMstIscommonEntity> listEntity = body.getResponse();
			List<TbMstIscommonNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);
			if (listNodeEntity == null || listNodeEntity.isEmpty()) {
				result.setResponseBody(null);
			} else if (listNodeEntity.size() == 1) {
				result.setResponseBody(listNodeEntity.get(0));
			} else {
				result.setResponseBody(listNodeEntity);
			}
			log.info("select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 공통마스타를 갱신한다.
	 *
	 * @param id 공통마스타ID
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_MST_PATH + Consts.SIM_UI_ISCOMMON_PATH + "/{id}")
	public WebApiResponse<Object> update(@PathVariable("id") String id, @RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("update Start");
			Map<String, ?> ifCondMap = this.parseID(id);
			// Body Process
			TbMstIscommonEntity data = entityChange.getObjectT1(dataBody);

			// 확장 for문의 패턴
			data.setObjectValue(data, ifCondMap);

			data.setCreateUser(userInfo.getUserId());
			data.setUpdateUser(userInfo.getUserId());

			List<String> nameList = IsJsonUtil.getNameList(dataBody);

			Result<Map<String, Integer>> body = service.update(data);
			result.setMessages(body.getMessages());

			Result<List<TbMstIscommonEntity>> resultList = service.select(ifCondMap);

			List<TbMstIscommonEntity> listEntity = resultList.getResponse();

			List<TbMstIscommonNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);

			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
			for (TbMstIscommonNodeEntity nodeEntity : listNodeEntity) {
				Map<String, Object> resultMap = new HashMap<String, Object>();
				for (String name : nameList) {
					Object resultValue = nodeEntity.getObjectValue(nodeEntity, name);
					resultMap.put(name, resultValue);
				}
				listMap.add(resultMap);
			}
			if (listMap == null || listMap.isEmpty()) {
				result.setResponseBody(null);
			} else if (listMap.size() == 1) {
				result.setResponseBody(listMap.get(0));
			} else {
				result.setResponseBody(listMap);
			}
			log.info("update End");

		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}
}
