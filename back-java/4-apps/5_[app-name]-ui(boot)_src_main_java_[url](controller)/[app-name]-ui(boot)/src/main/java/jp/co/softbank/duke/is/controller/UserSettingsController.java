/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

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
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsNodeEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsNodeUpdateEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsUpdateEntity;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.service.TbTrnUserSettingsService;
import jp.co.[company_name].[main_system_name].is.utils.EntityChangeUtils;
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
public class UserSettingsController extends IsControllerBase {

	private static final Logger log = LoggerFactory.getLogger(UserSettingsController.class);

	@Autowired
	private TbTrnUserSettingsService service;

	private EntityChangeUtils<TbTrnUserSettingsEntity, TbTrnUserSettingsNodeEntity> entityChange = new EntityChangeUtils<TbTrnUserSettingsEntity, TbTrnUserSettingsNodeEntity>(
			TbTrnUserSettingsEntity.class, TbTrnUserSettingsNodeEntity.class);

	private EntityChangeUtils<TbTrnUserSettingsUpdateEntity, TbTrnUserSettingsNodeUpdateEntity> entityChangeUpdate = new EntityChangeUtils<TbTrnUserSettingsUpdateEntity, TbTrnUserSettingsNodeUpdateEntity>(
			TbTrnUserSettingsUpdateEntity.class, TbTrnUserSettingsNodeUpdateEntity.class);

	/**
	 * 유저전용설정정보를 검색한다.
	 *
	 * @param dataType 데이터타입(템플릿：template)
	 * @param userInfo 유저정보
	 * @return 검색결과
	 */
	@GetMapping(Consts.SIM_UI_GET_PATH + Consts.SIM_UI_USER_SETTING_PATH + "/{dataType}")
	public WebApiResponse<Object> select(@PathVariable("dataType") String dataType,
			@AuthenticationPrincipal UserInfo userInfo) throws Exception {
		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("select Start");
			// 인증유저ID를 취득한다.
			String userId = userInfo.getUserId();

			Map<String, ?> map = this.parseID(dataType);

			Result<List<TbTrnUserSettingsEntity>> resultList = service.select(map, userId);

			result.setMessages(resultList.getMessages());

			List<TbTrnUserSettingsEntity> listEntity = resultList.getResponse();

			List<TbTrnUserSettingsNodeEntity> listNodeEntity = entityChange.changeListT2(listEntity);

			if (listNodeEntity == null || listNodeEntity.isEmpty()) {
				result.setResponseBody(null);
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
	 * 유저전용설정정보를 저장한다.
	 *
	 * @param dataType 데이터타입(템플릿：template)
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_USER_SETTING_PATH + "/{dataType}")
	public WebApiResponse<Object> save(@PathVariable("dataType") String dataType,
			@RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("save Start");
			// 인증유저ID를 취득한다.
			String userId = userInfo.getUserId();

			Map<String, ?> map = this.parseID(dataType);
			List<TbTrnUserSettingsEntity> beanInsList = entityChange.getListT1(dataBody);

			for (TbTrnUserSettingsEntity entity : beanInsList) {
				for (Map.Entry<String, ?> mapEntry : map.entrySet()) {
					String name = mapEntry.getKey();
					Object value = mapEntry.getValue();
					boolean bool = entity.chkFieldName(entity, name);
					if (!bool) {
						String className = entity.getClass().getName();
						throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, name, className));
					}
					entity.setObjectValue(entity, name, value);
				}
				entity.setUserId(userId);
				entity.setCreateUser(userId);
				entity.setUpdateUser(userId);

			}

			Result<Map<String, Integer>> resultMap = service.deleteInsert(beanInsList);

			result.setMessages(resultMap.getMessages());
			result.setResponseBody(resultMap.getResponse());

			log.info("save End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 유저전용설정정보를 삭제한다.
	 *
	 * @param dataType 데이터타입(템플릿：template)
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_USER_SETTING_PATH + "/del" + "/{dataType}")
	public WebApiResponse<Object> delete(@PathVariable("dataType") String dataType,
			@RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("delete Start");
			// 인증유저ID를 취득한다.
			String userId = userInfo.getUserId();

			Map<String, ?> mapDataType = this.parseID(dataType);

			TbTrnUserSettingsEntity entity = entityChange.getObjectT1(dataBody);
			// 인증유저ID
			entity.setUserId(userId);
			// 데이터타입과 데이터명을 설정한다.
			for (Map.Entry<String, ?> mapEntry : mapDataType.entrySet()) {
				String name = mapEntry.getKey();
				Object value = mapEntry.getValue();
				boolean bool = entity.chkFieldName(entity, name);
				if (!bool) {
					String className = entity.getClass().getName();
					throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, name, className));
				}
				entity.setObjectValue(entity, name, value);
			}

			Result<Map<String, Integer>> resultMap = service.delete(entity);

			result.setMessages(resultMap.getMessages());
			result.setResponseBody(resultMap.getResponse());

			log.info("delete End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 유저전용설정정보를 추가한다.
	 *
	 * @param dataType 데이터타입과 데이터명
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_USER_SETTING_PATH + "/ins" + "/{dataType}")
	public WebApiResponse<Object> insert(@PathVariable("dataType") String dataType,
			@RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("insert Start");
			// 인증유저ID를 취득한다.
			String userId = userInfo.getUserId();

			Map<String, ?> mapDataType = this.parseID(dataType);

			TbTrnUserSettingsEntity entity = entityChange.getObjectT1(dataBody);
			// 인증유저ID를 설정한다.
			entity.setUserId(userId);
			entity.setCreateUser(userId);
			entity.setUpdateUser(userId);
			// 데이터타입과 데이터명를 설정한다.
			for (Map.Entry<String, ?> mapEntry : mapDataType.entrySet()) {
				String name = mapEntry.getKey();
				Object value = mapEntry.getValue();
				boolean bool = entity.chkFieldName(entity, name);
				if (!bool) {
					String className = entity.getClass().getName();
					throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, name, className));
				}
				entity.setObjectValue(entity, name, value);
			}

			Result<Map<String, Integer>> resultMap = service.insert(entity);

			result.setMessages(resultMap.getMessages());
			result.setResponseBody(resultMap.getResponse());

			log.info("insert End");
		} catch (ApplicationException ae) {
			result.setMessages(ae.getMessages());
		} catch (Exception e) {
			result.addMessage(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
			log.warn(e.getMessage(), e);
		}
		return result;
	}

	/**
	 * 유저전용설정정보를 추가한다.
	 *
	 * @param dataType 데이터타입(템플릿：template)
	 * @param dataBody 데이터바디
	 * @param userInfo 유저정보
	 * @return 갱신결과
	 */
	@PostMapping(Consts.SIM_UI_SET_PATH + Consts.SIM_UI_USER_SETTING_PATH + "/upd" + "/{dataType}")
	public WebApiResponse<Object> update(@PathVariable("dataType") String dataType,
			@RequestBody String dataBody,
			@AuthenticationPrincipal UserInfo userInfo) {

		WebApiResponse<Object> result = new WebApiResponse<>();
		try {
			log.info("update Start");
			// 인증유저ID를 취득한다.
			String userId = userInfo.getUserId();

			Map<String, ?> mapDataType = this.parseID(dataType);

			TbTrnUserSettingsUpdateEntity entity = entityChangeUpdate.getObjectT1(dataBody);
			// 인증유저ID를 설정한다.
			entity.setUserId(userId);
			entity.setCreateUser(userId);
			entity.setUpdateUser(userId);
			// 데이터타입과 데이터명를 설정한다.
			for (Map.Entry<String, ?> mapEntry : mapDataType.entrySet()) {
				String name = mapEntry.getKey();
				Object value = mapEntry.getValue();
				boolean bool = entity.chkFieldName(entity, name);
				if (!bool) {
					String className = entity.getClass().getName();
					throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, name, className));
				}
				entity.setObjectValue(entity, name, value);

			}

			Result<Map<String, Integer>> resultMap = service.update(entity);

			result.setMessages(resultMap.getMessages());
			result.setResponseBody(resultMap.getResponse());

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
