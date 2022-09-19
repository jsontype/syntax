package to.pc.azuma2.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import to.pc.azuma2.dao.Blog1DAO;
import to.pc.azuma2.vo.Blog1SearchCriteria;
import to.pc.azuma2.vo.Blog1VO;

@Service
public class Blog1ServiceImpl implements Blog1Service {

	@Inject
	private Blog1DAO dao;

	// 블로그 작성
	@Override
	public void sBlog1Write(Blog1VO Blog1VO) throws Exception {
		dao.sBlog1Write(Blog1VO);
	}

	// 블로그 목록 조회
	@Override
	public List<Blog1VO> sBlog1List(Blog1SearchCriteria scri) throws Exception {
		return dao.sBlog1List(scri);
	}

	// 블로그 목록 갯수
	@Override
	public int sBlog1ListCount(Blog1SearchCriteria scri) throws Exception {
		return dao.sBlog1ListCount(scri);
	}

	// 블로그 수정
	@Override
	public void sBlog1Update(Blog1VO Blog1VO) throws Exception {
		dao.sBlog1Update(Blog1VO);
	}

	// 블로그 수정뷰 조회
	@Override
	public Blog1VO sBlog1Read(int bno) throws Exception {
		return dao.sBlog1Read(bno);
	}

	// 블로그 삭제
	@Override
	public void sBlog1Delete(int bno) throws Exception {
		dao.sBlog1Delete(bno);
	}




}


