package to.pc.azuma2.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import to.pc.azuma2.vo.Member1VO;

@Repository
public class Member1DAOImpl implements Member1DAO {

	@Inject SqlSession sql;

	// 회원가입
	@Override
	public void sMember1Register(Member1VO vo) throws Exception {
		sql.insert("Member1Mapper.register", vo);
	}

	// 회원가입 - 아이디 중복 체크
	@Override
	public int sMember1IdChk(Member1VO vo) throws Exception {
		int result = sql.selectOne("Member1Mapper.idChk", vo);
		return result;
	}

	// 회원로그인
	@Override
	public Member1VO sMember1Login(Member1VO vo) throws Exception {
	return sql.selectOne("Member1Mapper.login", vo);
	}

	// 회원정보수정: 서비스에서 보낸 파라미터들을 memberUpdate(Member1VO vo)에 담는다.
	@Override
	public void sMember1MemberUpdate(Member1VO vo) throws Exception {
		// vo에 담긴 파라미터들은 Member1Mapper.xml에 Member1Mapper라는 namespace에
		// 아이디가 memberUpdate인 쿼리에 파라미터들을 넣어준다.
		sql.update("Member1Mapper.memberUpdate", vo);
	}

	// 회원탈퇴: 업데이트와 마찬가지로 흐름은 같다.
	@Override
	public void sMember1MemberDelete(Member1VO vo) throws Exception {
	// Member1VO에 담긴 값들을 보내준다.
	// 그럼 xml에서 Member1Mapper.memberDelete에 보면
	//  #{userId}, #{userPass}에 파라미터값이 매칭이 된다.
	sql.delete("Member1Mapper.memberDelete", vo);
	}

	// 회원탈퇴 - 패스워드 체크
	@Override
	public int sMember1PassChk(Member1VO vo) throws Exception {
		int result = sql.selectOne("Member1Mapper.passChk", vo);
		return result;
	}

}


