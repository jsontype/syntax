/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.co.[company_name].[main_system_name].is.entity.DesignSiteEntity;

/**
 *
 * 사이트 제원 DB 매퍼 IF
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Mapper
public interface DesignSiteMapper {
	public List<DesignSiteEntity> select(@Param("specId") String specId);
}