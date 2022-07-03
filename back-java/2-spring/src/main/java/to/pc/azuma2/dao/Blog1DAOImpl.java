package to.pc.azuma2.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import to.pc.azuma2.vo.Blog1SearchCriteria;
import to.pc.azuma2.vo.Blog1VO;

@Repository
public class Blog1DAOImpl implements Blog1DAO {

	@Inject
	private SqlSession sqlSession;

	// 블로그 작성
	@Override
	public void sBlog1Write(Blog1VO Blog1VO) throws Exception {
		sqlSession.insert("Blog1Mapper.insert", Blog1VO);
	}

	// 블로그 목록 조회
	@Override
	public List<Blog1VO> sBlog1List(Blog1SearchCriteria scri) throws Exception {
		return sqlSession.selectList("Blog1Mapper.listPage", scri);
	}

	// 블로그 목록 갯수
	@Override
	public int sBlog1ListCount(Blog1SearchCriteria scri) throws Exception {
		return sqlSession.selectOne("Blog1Mapper.listCount", scri);
	}

	// 블로그 수정
	@Override
	public void sBlog1Update(Blog1VO Blog1VO) throws Exception {
		sqlSession.update("Blog1Mapper.update", Blog1VO);
	}

	// 블로그 수정뷰 조회
	@Override
	public Blog1VO sBlog1Read(int bno) throws Exception {
		return sqlSession.selectOne("Blog1Mapper.read", bno);
	}

	// 블로그 삭제
	@Override
	public void sBlog1Delete(int bno) throws Exception {
		sqlSession.delete("Blog1Mapper.delete", bno);
	}

}

