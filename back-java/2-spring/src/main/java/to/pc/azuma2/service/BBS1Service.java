package to.pc.azuma2.service;

import java.util.List;

import to.pc.azuma2.vo.BBS1SearchCriteria;
import to.pc.azuma2.vo.BBS1VO;

public interface BBS1Service {

	// 게시판 작성
	public void sBBS1Write(BBS1VO BBS1VO) throws Exception;

	// 게시판 목록 조회
	public List<BBS1VO> sBBS1List(BBS1SearchCriteria scri) throws Exception;

	// 게시판 목록 갯수
	public int sBBS1ListCount(BBS1SearchCriteria scri) throws Exception;

	// 게시판 수정
	public void sBBS1Update(BBS1VO BBS1VO) throws Exception;

	// 게시판 수정뷰 조회, 게시판 조회
	public BBS1VO sBBS1Read(int bno) throws Exception;

	// 게시판 삭제
	public void sBBS1Delete(int bno) throws Exception;

}