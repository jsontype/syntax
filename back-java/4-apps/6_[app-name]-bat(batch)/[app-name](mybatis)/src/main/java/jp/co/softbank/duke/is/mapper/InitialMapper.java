/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.co.[company_name].[main_system_name].is.entity.TbMstArea;

/**
 *
 * 최초 제원 검색용 DB 매퍼 IF
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Mapper
public interface InitialMapper {
	public List<TbMstArea> selectTbMstArea();

	public List<String> selectProjectId();

	public List<String> selectFrequencyBand();

	public List<String> searchCity(@Param("prefecture") String prefecture);

}
