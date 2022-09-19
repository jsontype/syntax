package to.pc.azuma2.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import to.pc.azuma2.vo.BBS1SearchCriteria;
import to.pc.azuma2.vo.BBS1VO;

/*
 * DAO(Data Access Object) : Service로부터 명령를 받아 Mapper를 통해 해당 명령(DB를 통해 데이터를 조회하거나 수정 삭제 하는)을 수행한다.
 * BBS1DAO : BBS1Mapper.xml에 있는 여러 DB Query들의 호출 명령문을 정의해둔다.
 *
 * import 단축키 : ctrl + shift + O
 * BBS1DAOImpl.java : 구현부인 BBS1DAOImpl로 들어가서 인터페이스 BBS1DAO에 정의된 멤버들을 클래스에서 대신 구현하도록 한다.
 * return sqlSession.selectList("BBS1Mapper.listPage"); → BBS1Mapper.xml에서 mapper의 namespace가 BBS1Mapper인 쿼리 중에 id가 listPage인것을 가져와서 반환한다.
 */

@Repository
public class BBS1DAOImpl implements BBS1DAO {

	@Inject
	private SqlSession sqlSession;

	// 게시판 작성
	@Override
	public void sBBS1Write(BBS1VO BBS1VO) throws Exception {
		sqlSession.insert("BBS1Mapper.insert", BBS1VO);
	}

	// 게시판 목록 조회
	@Override
	public List<BBS1VO> sBBS1List(BBS1SearchCriteria scri) throws Exception {
		return sqlSession.selectList("BBS1Mapper.listPage", scri);
	}

	// 게시판 목록 갯수
	@Override
	public int sBBS1ListCount(BBS1SearchCriteria scri) throws Exception {
		return sqlSession.selectOne("BBS1Mapper.listCount", scri);
	}

	// 게시판 수정
	@Override
	public void sBBS1Update(BBS1VO BBS1VO) throws Exception {
		sqlSession.update("BBS1Mapper.update", BBS1VO);
	}

	// 게시판 수정뷰 조회, 게시판 조회
	@Override
	public BBS1VO sBBS1Read(int bno) throws Exception {
		return sqlSession.selectOne("BBS1Mapper.read", bno);
	}

	// 게시판 삭제
	@Override
	public void sBBS1Delete(int bno) throws Exception {
		sqlSession.delete("BBS1Mapper.delete", bno);
	}

}
