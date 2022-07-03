package to.pc.azuma2.service;

import java.util.List;

import to.pc.azuma2.vo.BBS1ReplyVO;

public interface BBS1ReplyService {

	// 게시판 댓글 조회
	public List<BBS1ReplyVO> sBBS1ReadReply(int bno) throws Exception;

	// 게시판 댓글 작성
	public void sBBS1WriteReply(BBS1ReplyVO vo) throws Exception;

	// 게시판 댓글 수정
	public void sBBS1UpdateReply(BBS1ReplyVO vo) throws Exception;

	// 게시판 댓글 삭제
	public void sBBS1DeleteReply(BBS1ReplyVO vo) throws Exception;

	// 게시판 댓글 수정뷰, 게시판 댓글 삭제뷰
	public BBS1ReplyVO sBBS1SelectReply(int rno) throws Exception;

}




