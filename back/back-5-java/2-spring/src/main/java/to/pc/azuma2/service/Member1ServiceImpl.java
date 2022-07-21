package to.pc.azuma2.service;


import javax.inject.Inject;

import org.springframework.stereotype.Service;

import to.pc.azuma2.dao.Member1DAO;
import to.pc.azuma2.vo.Member1VO;

@Service
public class Member1ServiceImpl implements Member1Service {

	@Inject Member1DAO dao;

	// 회원가입
	@Override
	public void sMember1Register(Member1VO vo) throws Exception {
		dao.sMember1Register(vo);
	}

	// 회원가입 - 아이디 중복 체크
	@Override
	public int sMember1IdChk(Member1VO vo) throws Exception {
		int result = dao.sMember1IdChk(vo);
		return result;
	}

	// 회원로그인
	@Override
	public Member1VO sMember1Login(Member1VO vo) throws Exception {
	return dao.sMember1Login(vo);
	}

	// 회원정보수정: Controller에서 보내는 파라미터들을 memberUpdate(Member1VO vo)로 받고
	@Override
	public void sMember1MemberUpdate(Member1VO vo) throws Exception {
		//받은 vo를 DAO로 보내준다.
		dao.sMember1MemberUpdate(vo);
	}

	// 회원탈퇴: 업데이트에서 처리한 내용과 같다.
	@Override
	public void sMember1MemberDelete(Member1VO vo) throws Exception {
		dao.sMember1MemberDelete(vo);
	}

	// 회원탈퇴 - 패스워드 체크
	@Override
	public int sMember1PassChk(Member1VO vo) throws Exception {
		int result = dao.sMember1PassChk(vo);
		return result;
	}




}
