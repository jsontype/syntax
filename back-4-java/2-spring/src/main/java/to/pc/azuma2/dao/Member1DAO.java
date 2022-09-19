package to.pc.azuma2.dao;

import to.pc.azuma2.vo.Member1VO;

public interface Member1DAO {

	// 회원가입
	public void sMember1Register(Member1VO vo) throws Exception;

	// 회원가입 - 아이디 중복 체크
	public int sMember1IdChk(Member1VO vo) throws Exception;

	// 회원로그인
	public Member1VO sMember1Login(Member1VO vo) throws Exception;

	// 회원정보수정
	public void sMember1MemberUpdate(Member1VO vo)throws Exception;

	// 회원탈퇴
	public void sMember1MemberDelete(Member1VO vo)throws Exception;

	// 회원탈퇴 - 패스워드 체크
	public int sMember1PassChk(Member1VO vo) throws Exception;

}
