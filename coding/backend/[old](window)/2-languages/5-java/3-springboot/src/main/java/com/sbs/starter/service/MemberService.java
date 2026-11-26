package com.sbs.starter.service;

import java.util.Map;

import com.sbs.starter.dto.Member;

public interface MemberService {
	public Map<String, Object> checkLoginIdDup(String loginId);

	public Map<String, Object> join(Map<String, Object> param);

	public Member getMatchedOne(String loginId, String loginPw);

	public Member getOne(long loginedMemberId);
}