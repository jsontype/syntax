package com.sbs.starter.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbs.starter.dao.MemberDao;
import com.sbs.starter.dto.Member;
import com.sbs.starter.util.CUtil;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemberServiceImpl implements MemberService {
	@Autowired
	MemberDao memberDao;

	public Map<String, Object> checkLoginIdDup(String loginId) {
		int count = memberDao.getLoginIdDupCount(loginId);

		String resultCode = "";
		String msg = "";

		if ( count == 0 ) {
			resultCode = "S-1";
			msg = "사용가능한 로그인 ID 입니다.";
		}
		else {
			resultCode = "F-1";
			msg = "이미 사용중인 로그인 ID 입니다.";
		}

		Map<String, Object> rs = new HashMap<String, Object>();
		rs.put("resultCode", resultCode);
		rs.put("msg", msg);

		return rs;
	}

	@Override
	public Map<String, Object> join(Map<String, Object> param) {
		memberDao.join(param);

		long newId = CUtil.getAsLong(param.get("id"));

		String resultCode = "";
		String msg = "";

		if ( newId == 0 ) {
			resultCode = "F-1";
			msg = "회원가입에 실패했습니다.";
		}
		else {
			resultCode = "S-1";
			msg = "회원가입 되었습니다.";
		}

		Map<String, Object> rs = new HashMap<String, Object>();
		rs.put("resultCode", resultCode);
		rs.put("msg", msg);
		rs.put("newId", newId);

		return rs;
	}

	@Override
	public Member getMatchedOne(String loginId, String loginPw) {
		return memberDao.getMatchedOne(loginId, loginPw);
	}

	@Override
	public Member getOne(long loginedMemberId) {
		return memberDao.getOne(loginedMemberId);
	}
}