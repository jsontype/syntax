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
import jp.co.[company_name].[main_system_name].is.entity.TbMstCatalogEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.TbMstCatalogMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「부재마스타」액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbMstCatalogService {

	@Autowired
	TbMstCatalogMapper mapper;

	private static String TABLE_NAME = "tb_mst_catalog";

	private String[] keyList = { "model_category", "model_name" };

	private EntityAccessUtils<TbMstCatalogEntity> entityBean = new EntityAccessUtils<TbMstCatalogEntity>(TbMstCatalogEntity.class);

	/**
	 * 테이블「부재마스타」검색
	 *
	 * @param bean 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbMstCatalogEntity>> select(TbMstCatalogEntity bean) {
		bean.setDeleteFlg("0");

		List<TbMstCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * 테이블「부재마스타」검색
	 *
	 * @param param 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbMstCatalogEntity>> select(Map<String, ?> param) throws Exception {

		TbMstCatalogEntity bean = entityBean.Map2Bean(param);
		bean.setDeleteFlg("0");

		List<TbMstCatalogEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * 테이블「부재마스타」갱신
	 *
	 * @param bean 갱신조건
	 * @return 갱신결과
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbMstCatalogEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbMstCatalogEntity searchBean = new TbMstCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbMstCatalogEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbMstCatalogEntity> listData = new ArrayList<TbMstCatalogEntity>();
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
	 * 테이블「부재마스타」갱신
	 *
	 * @param param 갱신조건
	 * @return 갱신결과
	 */
	@Transactional
	public Result<Map<String, Integer>> update(Map<String, ?> param) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbMstCatalogEntity bean = entityBean.Map2Bean(param);

		// No Update Key
		boolean bool = entityBean.checkKey(keyList, bean);
		if (!bool) {
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, String.join(",", keyList), TABLE_NAME));
		}

		TbMstCatalogEntity searchBean = new TbMstCatalogEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}

		List<TbMstCatalogEntity> datas = mapper.select(searchBean);

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
	 * 테이블「부재마스타」삭제
	 *
	 * @param bean 삭제조건
	 * @return 삭제결과
	 */
	@Transactional
	public Result<Map<String, Integer>> cancel(TbMstCatalogEntity bean) {

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
