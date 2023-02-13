package to.pc.azuma2.dao;

import java.util.List;

import to.pc.azuma2.vo.Blog1SearchCriteria;
import to.pc.azuma2.vo.Blog1VO;

public interface Blog1DAO {

	// 블로그 작성
	public void sBlog1Write(Blog1VO Blog1VO) throws Exception;

	// 블로그 목록 조회
	public List<Blog1VO> sBlog1List(Blog1SearchCriteria scri) throws Exception;

	// 블로그 목록 갯수
	public int sBlog1ListCount(Blog1SearchCriteria scri) throws Exception;

	// 블로그 수정
	public void sBlog1Update(Blog1VO Blog1VO) throws Exception;

	// 블로그 수정뷰 조회
	public Blog1VO sBlog1Read(int bno) throws Exception;

	// 블로그 삭제
	public void sBlog1Delete(int bno) throws Exception;

}


