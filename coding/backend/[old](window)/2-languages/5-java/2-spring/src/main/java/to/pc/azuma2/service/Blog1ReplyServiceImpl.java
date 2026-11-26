package to.pc.azuma2.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import to.pc.azuma2.dao.Blog1ReplyDAO;
import to.pc.azuma2.vo.Blog1ReplyVO;

@Service
public class Blog1ReplyServiceImpl implements Blog1ReplyService {

	@Inject
	private Blog1ReplyDAO dao;

	// 블로그 댓글 조회
	@Override
	public List<Blog1ReplyVO> sBlog1ReadReply(int bno) throws Exception {
		return dao.sBlog1ReadReply(bno);
	}

	// 블로그 댓글 작성
	@Override
	public void sBlog1WriteReply(Blog1ReplyVO vo) throws Exception {
		dao.sBlog1WriteReply(vo);
	}

	// 블로그 댓글 수정
	@Override
	public void sBlog1UpdateReply(Blog1ReplyVO vo) throws Exception {
		dao.sBlog1UpdateReply(vo);
	}

	// 블로그 댓글 삭제
	@Override
	public void sBlog1DeleteReply(Blog1ReplyVO vo) throws Exception {
		dao.sBlog1DeleteReply(vo);
	}

	// 블로그 댓글 수정뷰, 블로그 댓글 삭제뷰
	@Override
	public Blog1ReplyVO sBlog1SelectReply(int rno) throws Exception {
		return dao.sBlog1SelectReply(rno);
	}



}
