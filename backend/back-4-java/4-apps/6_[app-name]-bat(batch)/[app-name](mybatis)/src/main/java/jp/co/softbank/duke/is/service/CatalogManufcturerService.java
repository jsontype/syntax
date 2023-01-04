package jp.co.[company_name].[main_system_name].is.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.logic.Convert;
import jp.co.[company_name].[main_system_name].is.logic.SetParamsToEntity;
import jp.co.[company_name].[main_system_name].is.mapper.TbMstCatalogMapper;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnUserCatalogMapper;
import jp.co.[company_name].[main_system_name].is.model.SearchCatalogRequest;

@Service
public class CatalogManufcturerService {
	final static String CATALOG_NAME = "部材マスター";

	@Autowired
	TbMstCatalogMapper tbMstCatalogMapper;

	@Autowired
	TbTrnUserCatalogMapper tbTrnUserCatalogMapper;

	/**
	 * 제조 메이커를 검색한다.
	 *
	 * @param params 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public String searchCatalogManufcturer(Object params) {
		SearchCatalogRequest searchRequest = SetParamsToEntity.searchManufacturer(params);
		String strJosn = "";
		if (CATALOG_NAME.equals(searchRequest.getCatalogName())) {
			strJosn = Convert.convertObjToJson(tbMstCatalogMapper.searchTbMstManufacturer(searchRequest));
		} else {
			strJosn = Convert.convertObjToJson(tbTrnUserCatalogMapper.searchTbTrnManufacturer(searchRequest));
		}
		return strJosn;
	};

}
