/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import jp.co.[company_name].[main_system_name].is.entity.TbMstCatalogEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserCatalog;
import jp.co.[company_name].[main_system_name].is.enums.VariableDisplayTypeEnum;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.service.CatalogManufcturerService;
import jp.co.[company_name].[main_system_name].is.service.CatalogService;
import jp.co.[company_name].[main_system_name].is.service.TbMstCatalogService;
import jp.co.[company_name].[main_system_name].is.utils.ChangeVariableName;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].is.utils.IsJsonUtil;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * Catalog 정보취득・변경컨트롤러 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = Consts.SIM_UI_PATH)
public class CatalogController extends IsControllerBase {

	private static final Logger log = LoggerFactory.getLogger(CatalogController.class);

	@Autowired
	private CatalogService catalogService;

	@Autowired
	private CatalogManufcturerService catalogManufcturerService;

	@Autowired
	private TbMstCatalogService service;

	private EntityAccessUtils<TbMstCatalogEntity> entityBean = new EntityAccessUtils<TbMstCatalogEntity>(TbMstCatalogEntity.class);

	/**
	 * ED040_화면상세_G032_090_설계대상부재설정MDL을 검색하는 메소드입니다.
	 *
	 * @param params 검색조건
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@PostMapping(Consts.SIM_UI_ISDOC_SEARCH_CATALOG)
	public WebApiResponse<Object> searchCatalog(@RequestBody Object params, @AuthenticationPrincipal UserInfo userInfo) {
		log.info("searchCatalog");
		WebApiResponse<Object> response = new WebApiResponse<>();
		Result<List<TbTrnUserCatalog>> result = catalogService.searchCatalog(params, userInfo.getUserId());
		response.setMessages(result.getMessages());
		response.setResponseBody(result.getResponse());
		return response;
	}

	/**
	 * ED040_화면상세_G032_090_설계대상부재설정MDL의 카탈로그명을 취득한다.
	 *
	 * @param userInfo 유저정보
	 * @return 취득결과
	 */
	@GetMapping(Consts.SIM_UI_ISDOC_SEARCH_CATALOG_NAME)
	public WebApiResponse<Object> searchCatalogName(@AuthenticationPrincipal UserInfo userInfo) {
		log.info("searchCatalogName");
		Message msg = new Message(MessageConst.MSG_S_IS0000);
		WebApiResponse<Object> response = new WebApiResponse<>();
		response.addMessage(msg);
		response.setResponseBody(catalogService.searchCatalogName(userInfo.getUserId()));
		return response;
	}

	/**
	 * 제조 메이커를 검색한다. (이하생략)
	 *
	 * @param params 검색조건
	 * @return 검색결과
	 */
	@PostMapping(Consts.SIM_UI_ISDOC_SEARCH_CATALOG_MANUFACTURER)
	public WebApiResponse<Object> searchCatalogManufcturer(@RequestBody Object params) {
		log.info("searchCatalogManufcturer");
		Message msg = new Message(MessageConst.MSG_S_IS0000);
		WebApiResponse<Object> response = new WebApiResponse<>();
		response.addMessage(msg);
		response.setResponseBody(catalogManufcturerService.searchCatalogManufcturer(params));
		return response;
	}

	/**
	 * 部材マスターを검색한다.
	 *
	 * @param id 제원정보
	 * @param colName 部材マスターの컬럼명
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_CATALOG_PATH + "/{id}/{columnName}")
	public WebApiResponse<Object> select(@PathVariable("id") String id, @PathVariable("columnName") String colName,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
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
				Result<List<TbMstCatalogEntity>> body = service.select(ifCondMap);
				result.setMessages(body.getMessages());
				List<TbMstCatalogEntity> listEntity = body.getResponse();
				if (colName != null) {
					String valName = ChangeVariableName.changeName(VariableDisplayTypeEnum.LowerCamelCase, colName);
					String dbColName = ChangeVariableName.changeName(VariableDisplayTypeEnum.SnakeCase, colName);
					log.info("colName : " + colName);
					log.info("colName1 : " + valName);
					log.info("colName2 : " + dbColName);
					List<String> response = new ArrayList<String>();
					for (TbMstCatalogEntity bean : listEntity) {
						String value = bean.getValue(bean, valName);
						response.add(value);
					}
					if (response.isEmpty()) {
						result.setResponseBody(null);
					} else if (response.size() == 1) {
						Map<String, String> responseMap = new HashMap<String, String>();
						responseMap.put(valName, response.get(0));
						result.setResponseBody(responseMap);
					} else {
						Map<String, List<String>> dataMap = new HashMap<String, List<String>>();
						dataMap.put(dbColName, response);
						result.setResponseBody(dataMap);
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
	 * 部材マスターを검색한다.
	 *
	 * @param id 제원정보
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_CATALOG_PATH + "/{id}")
	public WebApiResponse<Object> select(@PathVariable("id") String id,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
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
				Result<List<TbMstCatalogEntity>> body = service.select(ifCondMap);
				result.setMessages(body.getMessages());
				List<TbMstCatalogEntity> listEntity = body.getResponse();
				if (listEntity == null || listEntity.isEmpty()) {
					result.setResponseBody(null);
				} else if (listEntity.size() == 1) {
					result.setResponseBody(listEntity.get(0));
				} else {
					result.setResponseBody(listEntity);
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
	 * 部材マスターを검색한다.
	 *
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_CATALOG_PATH)
	public WebApiResponse<Object> select(@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("Select Start");
			Map<String, ?> ifCondMap = new HashMap<String, String>();
			Result<List<TbMstCatalogEntity>> body = service.select(ifCondMap);
			result.setMessages(body.getMessages());
			List<TbMstCatalogEntity> listEntity = body.getResponse();
			if (listEntity == null || listEntity.isEmpty()) {
				result.setResponseBody(null);
			} else if (listEntity.size() == 1) {
				result.setResponseBody(listEntity.get(0));
			} else {
				result.setResponseBody(listEntity);
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
	 * 部材マスターを갱신한다.
	 *
	 * @param id 제원정보
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_CATALOG_PATH + "/{id}")
	public WebApiResponse<Object> update(@PathVariable("id") String id, @RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("Update Start");
			Map<String, ?> delConfMap = this.parseID(id);

			List<TbMstCatalogEntity> beanInsList = new ArrayList<TbMstCatalogEntity>();
			List<Map<String, ?>> indDataMapList = IsJsonUtil.listUsingTypeReference(dataBody);
			for (Map<String, ?> tempMap : indDataMapList) {
				TbMstCatalogEntity beanIns = entityBean.Map2Bean(tempMap);
				for (Map.Entry<String, ?> entity : delConfMap.entrySet()) {
					String name = entity.getKey();
					String value = (String)entity.getValue();
					boolean bool = beanIns.chkFieldName(beanIns, name);
					if (!bool) {
						String className = beanIns.getClass().getName();
						throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, name, className));
					}
					beanIns.setObjectValue(beanIns, name, value);
				}
				beanIns.setCreateUser(userInfo.getUserId());
				beanIns.setUpdateUser(userInfo.getUserId());
				beanInsList.add(beanIns);
			}

			Result<Map<String, Integer>> body = service.update(beanInsList.get(0));

			result.setMessages(body.getMessages());

			Result<List<TbMstCatalogEntity>> response = service.select(delConfMap);
			List<TbMstCatalogEntity> responseBody = response.getResponse();
			if (responseBody == null || responseBody.isEmpty()) {
				result.setResponseBody(null);
			} else if (responseBody.size() == 1) {
				result.setResponseBody(responseBody.get(0));
			} else {
				result.setResponseBody(responseBody);
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
}
