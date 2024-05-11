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
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserCatalogEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnUserCatalogMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「유저부재일람」액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbTrnUserCatalogService {

	@Autowired
	TbTrnUserCatalogMapper mapper;

	private static String TABLE_NAME = "tb_trn_user_catalog";

	private String[] keyList = { "user_id", "catalog_name", "model_name", "model_category" };

	private EntityAccessUtils<TbTrnUserCatalogEntity> entityBean = new EntityAccessUtils<TbTrnUserCatalogEntity>(TbTrnUserCatalogEntity.class);

	/**
	 * 테이블「유저부재일람」검색
	 *
	 * @param bean 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnUserCatalogEntity>> select(TbTrnUserCatalogEntity bean) {
		bean.setDeleteFlg("0");

		List<TbTrnUserCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * 테이블「유저부재일람」검색 (이하생략)
	 *
	 * @param userId 유저ID
	 * @param param 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnUserCatalogEntity>> select(String userId, Map<String, ?> param) throws Exception {

		TbTrnUserCatalogEntity bean = entityBean.Map2Bean(param);
		bean.setUserId(userId);
		bean.setDeleteFlg("0");

		List<TbTrnUserCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * テーブル「ユーザー部材一覧」更新
	 *
	 * @param bean 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbTrnUserCatalogEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnUserCatalogEntity searchBean = new TbTrnUserCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnUserCatalogEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbTrnUserCatalogEntity> listData = new ArrayList<TbTrnUserCatalogEntity>();
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
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「ユーザー部材一覧」更新
	 *
	 * @param param 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(Map<String, ?> param) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnUserCatalogEntity bean = entityBean.Map2Bean(param);

		// No Update Key
		boolean bool = entityBean.checkKey(keyList, bean);
		if (!bool) {
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, String.join(",", keyList), TABLE_NAME));
		}

		TbTrnUserCatalogEntity searchBean = new TbTrnUserCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnUserCatalogEntity> datas = mapper.select(searchBean);

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
					count = mapper.update(bean, String.valueOf(bean.getVersionNo()));
				} else {
					throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
				}
			} else {
				count = mapper.delete(bean);
				count = mapper.insert(bean);
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 *
	 * テーブル「ユーザー部材一覧」更新(Delete -> Insert)
	 *
	 * @param beanDel 削除条件
	 * @param beanInsList 挿入データ
	 * @return
	 */
	@Transactional
	public Result<Map<String, Integer>> deleteInsert(TbTrnUserCatalogEntity beanDel, List<TbTrnUserCatalogEntity> beanInsList) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int countDel = 0;
		int countIns = 0;

		List<TbTrnUserCatalogEntity> datas = mapper.select(beanDel);

		if (!datas.isEmpty()) {
			countDel = mapper.delete(beanDel);
		}
		countIns = mapper.insertList(beanInsList);

		result.put("deleteCount", countDel);
		result.put("updateCount", countIns);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
	};

	/**
	 * テーブル「ユーザー部材一覧」削除
	 *
	 * @param bean 削除条件
	 * @return 削除件数
	 */
	@Transactional
	public Result<Map<String, Integer>> cancel(TbTrnUserCatalogEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();
		int count = mapper.cancel(bean);

		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};
}
