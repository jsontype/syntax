package com.sbs.starter.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sbs.starter.dto.Member;

@Mapper
public interface MemberDao {
	public int getLoginIdDupCount(String loginId);

	public void join(Map<String, Object> param);

	public Member getMatchedOne(String loginId, String loginPw);

	public Member getOne(long loginedMemberId);
}