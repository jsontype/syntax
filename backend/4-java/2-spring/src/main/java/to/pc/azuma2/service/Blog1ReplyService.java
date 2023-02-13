package to.pc.azuma2.service;

import java.util.List;

import to.pc.azuma2.vo.Blog1ReplyVO;

public interface Blog1ReplyService {

	// 블로그 댓글 조회
	public List<Blog1ReplyVO> sBlog1ReadReply(int bno) throws Exception;

	// 블로그 댓글 작성
	public void sBlog1WriteReply(Blog1ReplyVO vo) throws Exception;

	// 블로그 댓글 수정
	public void sBlog1UpdateReply(Blog1ReplyVO vo) throws Exception;

	// 블로그 댓글 삭제
	public void sBlog1DeleteReply(Blog1ReplyVO vo) throws Exception;

	// 블로그 댓글 수정뷰, 블로그 댓글 삭제뷰
	public Blog1ReplyVO sBlog1SelectReply(int rno) throws Exception;


}
