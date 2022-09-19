package jp.co.[company_name].[main_system_name].is.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserCatalog;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.logic.SetParamsToEntity;
import jp.co.[company_name].[main_system_name].is.mapper.TbMstCatalogMapper;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnUserCatalogMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.model.SearchCatalogRequest;
import jp.co.[company_name].[main_system_name].model.Message;

@Service
public class CatalogService {
	final static String CATALOG_NAME = "部材マスター";

	@Autowired
	TbMstCatalogMapper tbMstCatalogMapper;

	@Autowired
	TbTrnUserCatalogMapper tbTrnUserCatalogMapper;

	/**
	 * 카탈로그를 검색한다.
	 *
	 * @param params 검색조건
	 * @param userId 유저ID
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnUserCatalog>> searchCatalog(Object params, String userId) {
		SearchCatalogRequest searchRequest = SetParamsToEntity.searchCatalog(params, userId);
		List<TbTrnUserCatalog> listEntity = null;
		if (CATALOG_NAME.equals(searchRequest.getCatalogName())) {
			// 카탈로그명이 부재마스타의 경우, 부재마스타를 검색한다.
			listEntity = tbMstCatalogMapper.searchTbMstCatalog(searchRequest);
		} else {
			// 카탈로그명이 부재마스타 이외의 경우, 유저부재일람를 검색한다.
			listEntity = tbTrnUserCatalogMapper.searchTbTrnUserCatalog(searchRequest);
		}
		if (listEntity.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), listEntity);
		}
	};

	/**
	 * 카탈로그명을 검색한다.
	 *
	 * @param userId 유저ID
	 * @return 카탈로그명 일람
	 */
	@Transactional
	public List<String> searchCatalogName(String userId) {
		List<String> listCatalogName = tbTrnUserCatalogMapper.searchTbTrnUserCatalogName(userId);
		// 카탈로그명 일람에게 부재마스타를 추가
		listCatalogName.add(0, CATALOG_NAME);
		return listCatalogName;
	};
}
