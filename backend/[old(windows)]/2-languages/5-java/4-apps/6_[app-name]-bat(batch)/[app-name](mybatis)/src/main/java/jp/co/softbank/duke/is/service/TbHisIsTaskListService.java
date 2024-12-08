/**
 * Copyright ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.service;

import java.sql.Timestamp;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbHisIsTaskListEntity;
import jp.co.[company_name].[main_system_name].is.model.TaskList;
import jp.co.[company_name].[main_system_name].is.repository.TbHisIsTaskListRepository;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * 태스크리스트 서비스 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbHisIsTaskListService {
	/** 로그 출력 */
	private static final Logger log = LoggerFactory.getLogger(TbHisIsTaskListService.class);

	/** 태스크 리스트(tb_his_is_task_list) 레포지토리 */
	@Autowired
	private TbHisIsTaskListRepository tbHisIsTaskListRepository;

	/**
	 * 태스크 리스트(tb_his_is_task_list)를 검색한다.
	 *
	 * @param specId 제원정보
	 * @param siteId 사이트ID
	 * @return WEB-API의 레스폰스
	 */
	public WebApiResponse<Object> getTaskList(String specId, String siteId) {
		WebApiResponse<Object> response = new WebApiResponse<>();
		Message msg = null;

		try {
			TbHisIsTaskListEntity tbHisIsTaskListEntity = new TbHisIsTaskListEntity();
			tbHisIsTaskListEntity.setSpecId(specId);
			tbHisIsTaskListEntity.setSiteId(siteId);

			List<TbHisIsTaskListEntity> tbHisIsTaskListEntityList = tbHisIsTaskListRepository.select(tbHisIsTaskListEntity);

			if (tbHisIsTaskListEntityList != null && !tbHisIsTaskListEntityList.isEmpty()) {
				response.setResponseBody(tbHisIsTaskListEntityList);
				msg = new Message(MessageConst.MSG_S_IS0000);
			} else {
				msg = new Message(MessageConst.MSG_I_IS0001);
			}
		} catch (Exception e) {
			msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);
		}

		if (msg != null) {
			response.addMessage(msg);
		}

		return response;
	}

	/**
	 * 태스크 리스트(tb_his_is_task_list)를 신규등록한다.
	 *
	 * @param params 태스크 리스트(tb_his_is_task_list) 신규등록정보
	 * @param userId 유저ID
	 * @return WEB-API를 레스폰스
	 */
	public WebApiResponse<Object> setTaskList(Object params, String userId) {
		WebApiResponse<Object> response = new WebApiResponse<>();
		Message msg = null;

		try {
			ObjectMapper objectMapper = new ObjectMapper();

			String jsonString = objectMapper.writeValueAsString(params);

			if (jsonString != null && !jsonString.isEmpty()) {
				TaskList taskList = objectMapper.readValue(jsonString, TaskList.class);

				if (taskList != null) {
					TbHisIsTaskListEntity tbHisIsTaskListEntity = new TbHisIsTaskListEntity();
					tbHisIsTaskListEntity.setSpecId(taskList.getSpecId());
					tbHisIsTaskListEntity.setOrderId(taskList.getOrderId());
					tbHisIsTaskListEntity.setSiteId(taskList.getSiteId());
					Timestamp currentTime = new Timestamp(System.currentTimeMillis());
					tbHisIsTaskListEntity.setBeginTime(currentTime);
					tbHisIsTaskListEntity.setEndTime(currentTime);
					tbHisIsTaskListEntity.setTaskName(taskList.getTaskName());
					tbHisIsTaskListEntity.setDescription(taskList.getDescription());
					tbHisIsTaskListEntity.setCreateUser(userId);
					tbHisIsTaskListEntity.setUpdateUser(userId);

					int insertCount = tbHisIsTaskListRepository.insert(tbHisIsTaskListEntity);

					if (0 < insertCount) {
						msg = new Message(MessageConst.MSG_S_IS0000);
					} else {
						msg = new Message(MessageConst.MSG_I_IS0002);
					}
				} else {
					msg = new Message(MessageConst.MSG_I_IS0002);
				}
			}
		} catch (Exception e) {
			msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);
		}

		if (msg != null) {
			response.addMessage(msg);
		}

		return response;
	}

}
