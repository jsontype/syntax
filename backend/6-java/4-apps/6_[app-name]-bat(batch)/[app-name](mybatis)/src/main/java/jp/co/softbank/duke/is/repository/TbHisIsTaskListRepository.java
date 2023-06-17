/**
 * Copyright ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.repository;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.entity.TbHisIsTaskListEntity;
import jp.co.[company_name].[main_system_name].is.mapper.TbHisIsTaskListMapper;

/**
 * 태스크 리스트(tb_his_is_task_list) 레포지토리 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Repository
public class TbHisIsTaskListRepository {
	/** 로그 출력 */
	@SuppressWarnings("unused")
	private static final Logger log = LoggerFactory.getLogger(TbHisIsTaskListRepository.class);

	/** 태스크 리스트(tb_his_is_task_list) 매퍼 */
	@Autowired
	private TbHisIsTaskListMapper tbHisIsTaskListMapper;

	/**
	 * 태스크 리스트(tb_his_is_task_list)를 검색한다.
	 *
	 * @param tbHisIsTaskListEntity 태스크 리스트(tb_his_is_task_list) 엔티티
	 * @return 태스크 리스트(tb_his_is_task_list) 엔티티리스트
	 */
	public List<TbHisIsTaskListEntity> select(@Param("bean") TbHisIsTaskListEntity tbHisIsTaskListEntity) {
		List<TbHisIsTaskListEntity> tbHisIsTaskListEntityList = tbHisIsTaskListMapper.select(tbHisIsTaskListEntity);

		return tbHisIsTaskListEntityList;
	}

	/**
	 * 태스크 리스트(tb_his_is_task_list)를 신규등록한다.
	 *
	 * @param tbHisIsTaskListEntity 태스크 리스트(tb_his_is_task_list) 엔티티
	 * @return 신규등록건수
	 */
	@Transactional
	public int insert(@Param("bean") TbHisIsTaskListEntity tbHisIsTaskListEntity) {
		return tbHisIsTaskListMapper.insert(tbHisIsTaskListEntity);
	}

	/**
	 * 태스크 리스트(tb_his_is_task_list)를 갱신한다.
	 *
	 * @param tbHisIsTaskListEntity 태스크 리스트(tb_his_is_task_list) 엔티티
	 * @return 갱신건수
	 */
	@Transactional
	public int update(@Param("bean") TbHisIsTaskListEntity tbHisIsTaskListEntity) {
		return tbHisIsTaskListMapper.update(tbHisIsTaskListEntity);
	}

}
