package jp.co.[company_name].[main_system_name].is.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbMstIscommonEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.logic.YskIscommonLoader;
import jp.co.[company_name].[main_system_name].is.mapper.TbMstIscommonMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「공통마스타」액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbMstIscommonService {

	@Autowired
	TbMstIscommonMapper mapper;

	/** 시뮬레이션용 IsCommon 정보 로더 */
	@Autowired
	YskIscommonLoader yskIscommonLoader;

	private static String TABLE_NAME = "tb_mst_iscommon";
	private String[] keyList = { "iscommonId" };
	private EntityAccessUtils<TbMstIscommonEntity> entityBean = new EntityAccessUtils<TbMstIscommonEntity>(TbMstIscommonEntity.class);

	/**
	 * 테이블「공통마스타」검색
	 *
	 * @param bean 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbMstIscommonEntity>> select(TbMstIscommonEntity bean) {
		bean.setDeleteFlg("0");

		List<TbMstIscommonEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * 테이블「공통마스타」검색
	 *
	 * @param param 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbMstIscommonEntity>> select(Map<String, ?> param) throws Exception {

		TbMstIscommonEntity bean = entityBean.Map2Bean(param);
		bean.setDeleteFlg("0");

		List<TbMstIscommonEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * 테이블「공통마스타」갱신 (이하생략)
	 *
	 * @param bean 갱신조건
	 * @return 갱신건수
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbMstIscommonEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbMstIscommonEntity searchBean = new TbMstIscommonEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbMstIscommonEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbMstIscommonEntity> listData = new ArrayList<TbMstIscommonEntity>();
			listData.add(bean);
			count = mapper.insert(bean);
		} else {
			int oldVersion = bean.getVersionNo();
			int newVersion = datas.get(0).getVersionNo();
			if (oldVersion == newVersion) {
				count = mapper.update(bean, String.valueOf(bean.getVersionNo()));
			} else {
				throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			// シミュレーション用IsCommon情報ローダーを利用して、シミュレーション用IsCommon情報をリロード
			yskIscommonLoader.load();
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「共通マスター」更新
	 *
	 * @param param 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(Map<String, ?> param) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbMstIscommonEntity bean = entityBean.Map2Bean(param);

		// No Update Key
		boolean bool = entityBean.checkKey(keyList, bean);
		if (!bool) {
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, String.join(",", keyList), TABLE_NAME));
		}

		TbMstIscommonEntity searchBean = new TbMstIscommonEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbMstIscommonEntity> datas = mapper.select(searchBean);

		// TODO Test User Setting
		bean.setCreateUser("System");
		bean.setUpdateUser("System");

		if (datas.isEmpty()) {
			count = mapper.insert(bean);
		} else {
			String delFlag = datas.get(0).getDeleteFlg();
			if ("0".equals(delFlag)) {
				int oldVersion = bean.getVersionNo();
				int newVersion = datas.get(0).getVersionNo();
				if (oldVersion == newVersion) {
					count = mapper.update(bean, "version");
				} else {
					throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
				}
			} else {
				count = mapper.delete(bean);
				count = mapper.insert(bean);
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「共通マスター」削除
	 *
	 * @param bean 削除条件
	 * @return 削除件数
	 */
	@Transactional
	public Result<Map<String, Integer>> cancel(TbMstIscommonEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();
		int count = mapper.cancel(bean);

		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};
}
