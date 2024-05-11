/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocEntity;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocRequest;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocResult;

/**
 *
 * 메인 DB 매퍼 IF
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Mapper
public interface TbTrnIsdocMapper {
	public List<TbTrnIsdocEntity> select(@Param("bean") TbTrnIsdocEntity tbTrnIsdocEntity);

	public int update(@Param("bean") TbTrnIsdocEntity tbTrnIsdocEntity, @Param("mode") String mode);

	public int insert(@Param("bean") TbTrnIsdocEntity tbTrnIsdocEntity);

	public int insertList(@Param("beanList") List<TbTrnIsdocEntity> tbTrnIsdocEntityList);

	public int cancel(@Param("bean") TbTrnIsdocEntity tbTrnIsdocEntity);

	public int delete(@Param("bean") TbTrnIsdocEntity tbTrnIsdocEntity);

	public List<SearchTbTrnIsdocResult> searchTbTrnIsdoc(@Param("searchRequest") SearchTbTrnIsdocRequest searchRequest);

	public int selectTbTrnIsdocCnt(@Param("specId") String specId);

	public int updateTbTrnIsdoc(@Param("tbTrnIsdoc") TbTrnIsdocEntity tbTrnIsdoc);

	public int insertTbTrnIsdoc(@Param("tbTrnIsdocList") List<TbTrnIsdocEntity> tbTrnIsdocList);

	public int updateFloorImages(@Param("tbTrnIsdoc") TbTrnIsdocEntity tbTrnIsdoc);

	public int insertFloorImages(@Param("tbTrnIsdoc") TbTrnIsdocEntity tbTrnIsdoc);

	public int insertTbTrnIsdocCatalog(@Param("specId") String specId, @Param("listRadioModel") List<String> listRadioModel,
			@Param("userId") String userId);

	public int deleteIsdoc(@Param("specId") String specId);

	public int deleteIsdocCatalog(@Param("specId") String specId);

	public int deleteHisIsTaskList(@Param("specId") String specId);
}
