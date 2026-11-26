/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
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
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocNodeEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.enums.VariableDisplayTypeEnum;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.service.[main_system_name]SpecService;
import jp.co.[company_name].[main_system_name].is.service.TbTrnIsdocService;
import jp.co.[company_name].[main_system_name].is.utils.ChangeVariableName;
import jp.co.[company_name].[main_system_name].is.utils.EntityChangeUtils;
import jp.co.[company_name].[main_system_name].is.utils.IsJsonUtil;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * IS Doc 정보취득, 갱신 컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
@RequestMapping(Consts.SIM_UI_PATH)
public class IsDocController extends IsControllerBase {

	private static final Logger log = LoggerFactory.getLogger(IsDocController.class);

	private static final String[] colNames = { "versionNo" };

	private static final String keyColName = "specId";

	/** 갱신일시의 컬럼명칭 */
	private static final String colUpdateDate = "updateDate";

	@Autowired
	private TbTrnIsdocService service;

	@Autowired
	private [main_system_name]SpecService serviceDesignSpecification;

	@Autowired
	private Environment env;

	private EntityChangeUtils<TbTrnIsdocEntity, TbTrnIsdocNodeEntity> entityChange = new EntityChangeUtils<TbTrnIsdocEntity, TbTrnIsdocNodeEntity>(
			TbTrnIsdocEntity.class, TbTrnIsdocNodeEntity.class);

	/**
	 * 옥내설계다큐멘트를 검색한다.
	 *
	 * @param id 제원정보
	 * @param colName 옥내설계다큐멘트의 컬럼명
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISDOC_PATH + "/{id}/{columnName}")
	public WebApiResponse<Object> select(@PathVariable("id") String id, @PathVariable("columnName") String colName,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<Object>();
		try {
			log.info("Select Start");
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
				Result<List<TbTrnIsdocEntity>> body = service.select(ifCondMap);
				if (body == null) {
					body = new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
				}
				result.setMessages(body.getMessages());
				List<TbTrnIsdocEntity> listEntity = body.getResponse();
				List<TbTrnIsdocNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);

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
						for (TbTrnIsdocNodeEntity bean : listNodeEntity) {
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
					if (listNodeEntity == null || listNodeEntity.isEmpty()) {
						result.setResponseBody(null);
					} else if (listNodeEntity.size() == 1) {
						result.setResponseBody(listNodeEntity.get(0));
					} else {
						result.setResponseBody(listNodeEntity);
					}
				}
			}
			log.info("Select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 옥내설계다큐멘트를 검색한다.
	 *
	 * @param id 제원정보
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISDOC_PATH + "/{id}")
	public WebApiResponse<Object> select(@PathVariable("id") String id,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<Object>();
		try {
			log.info("Select Start");
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
				Result<List<TbTrnIsdocEntity>> body = service.select(ifCondMap);
				if (body == null) {
					body = new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
				}
				List<TbTrnIsdocEntity> listEntity = body.getResponse();
				List<TbTrnIsdocNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);
				result.setMessages(body.getMessages());
				if (listNodeEntity == null || listNodeEntity.isEmpty()) {
					// 건수가「0」건의 경우
					// specId 취득
					String specId = (String)ifCondMap.get(keyColName);
					if (StringUtils.isNoneEmpty(specId)) {
						// [main_system_name]으로부터 제원정보취득
						WebApiResponse<Object> resultDB = getDocument(specId);
						result.setMessages(resultDB.getMessages());
						result.setResponseBody(resultDB.getResponseBody());
					} else {
						result.setResponseBody(null);
					}
				} else if (listNodeEntity.size() == 1) {
					result.setResponseBody(listNodeEntity.get(0));
				} else {
					result.setResponseBody(listNodeEntity);
				}
			}
			log.info("Select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 옥내설계다큐멘트를 검색한다.
	 *
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_ISDOC_PATH)
	public WebApiResponse<Object> select(@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<Object>();
		try {
			log.info("Select Start");
			Map<String, ?> ifCondMap = new HashMap<String, String>();
			Result<List<TbTrnIsdocEntity>> body = service.select(ifCondMap);
			if (body == null) {
				body = new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
			}
			List<TbTrnIsdocEntity> listEntity = body.getResponse();
			List<TbTrnIsdocNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);
			result.setMessages(body.getMessages());
			if (listNodeEntity == null || listNodeEntity.isEmpty()) {
				result.setResponseBody(null);
			} else if (listNodeEntity.size() == 1) {
				result.setResponseBody(listNodeEntity.get(0));
			} else {
				result.setResponseBody(listNodeEntity);
			}
			log.info("Select End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 옥내설계다큐멘트를 갱신한다.
	 *
	 * @param id 제원정보
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_ISDOC_PATH + "/{id}")
	public WebApiResponse<Object> update(@PathVariable("id") String id, @RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("Update Start");
			Map<String, ?> ifCondMap = this.parseID(id);
			// Body Process
			TbTrnIsdocEntity data = entityChange.getObjectT1(dataBody);

			// 확장 for문 패턴
			data.setObjectValue(data, ifCondMap);
			// 유저성+유저이름
			String userName = userInfo.getUsernameSei() + userInfo.getUsernameMei();
			data.setCreateUserName(userName);
			data.setUpdateUserName(userName);
			// 소프트웨어버전
			String swVersion = env.getProperty("swVersion");

			data.setCreateUser(userInfo.getUserId());
			data.setUpdateUser(userInfo.getUserId());

			List<String> nameList = IsJsonUtil.getNameList(dataBody);

			Result<Map<String, Integer>> body = service.update(data, swVersion, true);

			result.setMessages(body.getMessages());

			Result<List<TbTrnIsdocEntity>> resultBody = service.select(ifCondMap);
			List<TbTrnIsdocEntity> listEntity = resultBody.getResponse();
			List<TbTrnIsdocNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);

			List<Map<String, Object>> resultData = new ArrayList<Map<String, Object>>();

			// false로 초기치를 설정
			boolean blExist = false;

			for (String name : nameList) {
				if (colUpdateDate.equals(name)) {
					// 갱신일시가 존재한다.
					blExist = true;
					break;
				}
			}
			// 갱신일시가 존재하지 않는 경우, 추가한다.
			if (blExist == false) {
				nameList.add(colUpdateDate);
			}
			for (TbTrnIsdocNodeEntity resultBean : listNodeEntity) {
				Map<String, Object> resultMap = new HashMap<String, Object>();
				for (String name : nameList) {
					Object resultValue = resultBean.getObjectValue(resultBean, name);
					resultMap.put(name, resultValue);
				}
				resultData.add(resultMap);
			}

			if (resultData == null || resultData.isEmpty()) {
				result.setResponseBody(null);
			} else if (resultData.size() == 1) {
				result.setResponseBody(resultData.get(0));
			} else {
				result.setResponseBody(resultData);
			}
			log.info("Update End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 설계_제원정보로부터 ISDOC 정보를 취득한다.
	 *
	 * @param specid 제원정보
	 * @return 검색결과
	 */
	private WebApiResponse<Object> getDocument(String specId) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<Object>();

		try {
			log.info("getDocument Start");
			Result<TbTrnIsdocNodeEntity> resultData = serviceDesignSpecification.getAll(specId);

			result.setMessages(resultData.getMessages());
			result.setResponseBody(resultData.getResponse());

			log.info("getDocument End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}
}
