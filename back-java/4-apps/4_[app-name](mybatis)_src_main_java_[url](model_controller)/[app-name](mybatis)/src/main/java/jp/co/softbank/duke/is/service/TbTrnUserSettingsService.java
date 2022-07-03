package jp.co.[company_name].[main_system_name].is.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsUpdateEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnUserSettingsMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「유저전용설정정보」액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbTrnUserSettingsService {

	@Autowired
	TbTrnUserSettingsMapper mapper;

	private EntityAccessUtils<TbTrnUserSettingsEntity> entityBean = new EntityAccessUtils<TbTrnUserSettingsEntity>(TbTrnUserSettingsEntity.class);

	/**
	 * 테이블「유저전용설정정보」검색
	 *
	 * @param param 검색조건
	 * @param userId 유저ID
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnUserSettingsEntity>> select(Map<String, ?> param, String userId) throws Exception {

		TbTrnUserSettingsEntity entity = entityBean.Map2Bean(param);
		// 유저ID를 설정
		entity.setUserId(userId);
		entity.setDeleteFlg("0");

		List<TbTrnUserSettingsEntity> listEntity = mapper.select(entity);

		if (listEntity.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), listEntity);
		}
	};

	/**
	 * 테이블「유저전용설정정보」저장
	 *
	 * @param listEntity 저장조건
	 * @return 저장결과
	 */
	@Transactional
	public Result<Map<String, Integer>> deleteInsert(List<TbTrnUserSettingsEntity> listEntity) {

		Map<String, Integer> map = new HashMap<String, Integer>();

		int countDel = 0;
		int countIns = 0;

		List<String> dataNameList = new ArrayList<String>();

		for (TbTrnUserSettingsEntity entity : listEntity) {
			dataNameList.add(entity.getDataName());
		}

		countDel = mapper.delete(listEntity.get(0).getUserId(), listEntity.get(0).getDataType());

		countIns = mapper.insertList(listEntity);

		map.put("deleteCount", countDel);
		map.put("saveCount", countIns);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), map);
	};

	/**
	 * 테이블「유저전용설정정보」삭제
	 *
	 * @param entity 삭제조건
	 * @return 삭제결과
	 */
	@Transactional
	public Result<Map<String, Integer>> delete(TbTrnUserSettingsEntity entity) {

		Map<String, Integer> map = new HashMap<String, Integer>();

		int intDel = 0;

		intDel = mapper.deleteByPrimaryKey(entity.getUserId(), entity.getDataType(), entity.getDataName());

		if (intDel < 1) {
			String msg = "ユーザーID :" + entity.getUserId() + ",データタイプ :" + entity.getDataType() + ",データ名 :" + entity.getDataName();
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_W_IS0002, msg));
		}

		map.put("deleteCount", intDel);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), map);
	};

	/**
	 * 테이블「유저전용설정정보」등록
	 *
	 * @param entity 등록조건
	 * @return 등록결과
	 */
	@Transactional
	public Result<Map<String, Integer>> insert(TbTrnUserSettingsEntity entity) {

		Map<String, Integer> map = new HashMap<String, Integer>();

		int count = 0;
		int countIns = 0;

		count = mapper.countByPrimaryKey(entity.getUserId(), entity.getDataType(), entity.getDataName());

		if (count == 1) {
			String msg = "ユーザーID :" + entity.getUserId() + ",データタイプ :" + entity.getDataType() + ",データ名 :" + entity.getDataName();
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_W_IS0005, msg));
		}

		countIns = mapper.insert(entity);

		map.put("insertCount", countIns);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), map);
	};

	/**
	 * 테이블「유저전용설정정보」갱신
	 *
	 * @param entity 갱신조건
	 * @return 갱신결과
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbTrnUserSettingsUpdateEntity entity) {

		Map<String, Integer> map = new HashMap<String, Integer>();

		int intUpd = 0;

		int intCount = 0;

		intCount = mapper.countByPrimaryKey(entity.getUserId(), entity.getDataType(), entity.getDataName());

		if (intCount > 0) {
			String msg = "ユーザーID :" + entity.getUserId() + ",データタイプ :" + entity.getDataType() + ",データ名 :" + entity.getDataName();
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_W_IS0005, msg));
		}

		intUpd = mapper.update(entity);

		if (intUpd == 0) {
			String msg = "ユーザーID :" + entity.getUserId() + ",データタイプ :" + entity.getDataType() + ",データ名 :" + entity.getOldDataName();
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_W_IS0002, msg));
		}

		map.put("updateCount", intUpd);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), map);
	};

}
