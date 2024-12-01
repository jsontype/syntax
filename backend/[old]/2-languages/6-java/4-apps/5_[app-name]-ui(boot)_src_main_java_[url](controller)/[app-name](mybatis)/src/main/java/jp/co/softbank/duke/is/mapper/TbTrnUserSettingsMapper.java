/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnUserSettingsUpdateEntity;

/**
 *
 * 사용자 설정 DB 매퍼 IF
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Mapper
public interface TbTrnUserSettingsMapper {
	public List<TbTrnUserSettingsEntity> select(@Param("bean") TbTrnUserSettingsEntity tbTrnUserSettingsEntity);

	public int insert(@Param("bean") TbTrnUserSettingsEntity tbTrnUserSettingsEntity);

	public int update(@Param("bean") TbTrnUserSettingsUpdateEntity tbTrnUserSettingsEntity);

	public int delete(@Param("userId") String userId, @Param("dataType") String dataType);

	public int deleteByPrimaryKey(@Param("userId") String userId, @Param("dataType") String dataType, @Param("dataName") String dataName);

	public int countByPrimaryKey(@Param("userId") String userId, @Param("dataType") String dataType, @Param("dataName") String dataName);

	public int insertList(@Param("beanList") List<TbTrnUserSettingsEntity> tbTrnUserSettingsEntityList);
}
