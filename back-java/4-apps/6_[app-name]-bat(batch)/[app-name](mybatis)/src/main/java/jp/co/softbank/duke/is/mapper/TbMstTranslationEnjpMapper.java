/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjp;
import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjpEntity;

/**
 *
 * 출력언어 DB 매퍼 IF
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Mapper
public interface TbMstTranslationEnjpMapper {
	public List<TbMstTranslationEnjp> selectTranslationEnjp();

	public List<TbMstTranslationEnjpEntity> select(@Param("bean") TbMstTranslationEnjpEntity tbMstTranslationEnjpEntity);

	public int update(@Param("bean") TbMstTranslationEnjpEntity tbMstTranslationEnjpEntity, @Param("mode") String mode);

	public int cancel(@Param("bean") TbMstTranslationEnjpEntity tbMstTranslationEnjpEntity);

	public int insert(@Param("bean") TbMstTranslationEnjpEntity tbMstTranslationEnjpEntity);

	public int insertList(@Param("beanList") List<TbMstTranslationEnjpEntity> tbMstTranslationEnjpEntityList);

	public int delete(@Param("bean") TbMstTranslationEnjpEntity tbMstTranslationEnjpEntity);

}
