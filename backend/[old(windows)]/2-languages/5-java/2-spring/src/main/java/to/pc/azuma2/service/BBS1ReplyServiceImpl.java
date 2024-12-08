package to.pc.azuma2.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import to.pc.azuma2.dao.BBS1ReplyDAO;
import to.pc.azuma2.vo.BBS1ReplyVO;

@Service
public class BBS1ReplyServiceImpl implements BBS1ReplyService {

	@Inject
	private BBS1ReplyDAO dao;

	// 게시판 댓글 조회
	@Override
	public List<BBS1ReplyVO> sBBS1ReadReply(int bno) throws Exception {
		return dao.sBBS1ReadReply(bno);
	}

	// 게시판 댓글 작성
	@Override
	public void sBBS1WriteReply(BBS1ReplyVO vo) throws Exception {
		dao.sBBS1WriteReply(vo);
	}

	// 게시판 댓글 수정
	@Override
	public void sBBS1UpdateReply(BBS1ReplyVO vo) throws Exception {
		dao.sBBS1UpdateReply(vo);
	}

	// 게시판 댓글 삭제
	@Override
	public void sBBS1DeleteReply(BBS1ReplyVO vo) throws Exception {
		dao.sBBS1DeleteReply(vo);
	}

	// 게시판 댓글 수정뷰, 게시판 댓글 삭제뷰
	@Override
	public BBS1ReplyVO sBBS1SelectReply(int rno) throws Exception {
		return dao.sBBS1SelectReply(rno);
	}



}
