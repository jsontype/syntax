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
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocCatalogEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnIsdocCatalogMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「설계대상부재 일람」액세서
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbTrnIsdocCatalogService {

	@Autowired
	TbTrnIsdocCatalogMapper mapper;

	private static String TABLE_NAME = "tb_trn_isdoc_catalog";

	private String[] keyList = { "specId", "model_category", "model_name" };

	private EntityAccessUtils<TbTrnIsdocCatalogEntity> entityBean = new EntityAccessUtils<TbTrnIsdocCatalogEntity>(TbTrnIsdocCatalogEntity.class);

	/**
	 * テーブル「設計対象部材一覧」検索
	 *
	 * @param bean 検索条件
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnIsdocCatalogEntity>> select(TbTrnIsdocCatalogEntity bean) {
		bean.setDeleteFlg("0");

		List<TbTrnIsdocCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * テーブル「設計対象部材一覧」検索
	 *
	 * @param param 検索条件
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnIsdocCatalogEntity>> select(Map<String, ?> param) throws Exception {

		TbTrnIsdocCatalogEntity bean = entityBean.Map2Bean(param);
		bean.setDeleteFlg("0");

		List<TbTrnIsdocCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * テーブル「設計対象部材一覧」更新
	 *
	 * @param bean 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbTrnIsdocCatalogEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnIsdocCatalogEntity searchBean = new TbTrnIsdocCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnIsdocCatalogEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbTrnIsdocCatalogEntity> listData = new ArrayList<TbTrnIsdocCatalogEntity>();
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
	 * テーブル「設計対象部材一覧」更新
	 *
	 * @param param 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(Map<String, ?> param) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnIsdocCatalogEntity bean = entityBean.Map2Bean(param);

		// No Update Key
		boolean bool = entityBean.checkKey(keyList, bean);
		if (!bool) {
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, String.join(",", keyList), TABLE_NAME));
		}

		TbTrnIsdocCatalogEntity searchBean = new TbTrnIsdocCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnIsdocCatalogEntity> datas = mapper.select(searchBean);

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
	 * テーブル「設計対象部材一覧」更新
	 *
	 * @param beanDel 削除条件
	 * @param beanInsList 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> deleteInsert(TbTrnIsdocCatalogEntity beanDel, List<TbTrnIsdocCatalogEntity> beanInsList) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int countDel = 0;
		int countIns = 0;

		List<TbTrnIsdocCatalogEntity> datas = mapper.select(beanDel);

		if (!datas.isEmpty()) {
			countDel = mapper.delete(beanDel);
		}

		if (beanInsList != null && beanInsList.isEmpty() == false) {
			countIns = mapper.insertList(beanInsList);
		}

		result.put("deleteCount", countDel);
		result.put("updateCount", countIns);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
	};

	/**
	 * テーブル「設計対象部材一覧」削除
	 *
	 * @param bean 削除条件
	 * @return 削除件数
	 */
	@Transactional
	public Result<Map<String, Integer>> cancel(TbTrnIsdocCatalogEntity bean) {

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
