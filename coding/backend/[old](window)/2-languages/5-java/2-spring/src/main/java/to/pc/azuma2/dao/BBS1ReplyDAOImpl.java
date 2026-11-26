package to.pc.azuma2.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import to.pc.azuma2.vo.BBS1ReplyVO;

@Repository
public class BBS1ReplyDAOImpl implements BBS1ReplyDAO {

	@Inject SqlSession sql;

	// 게시판 댓글 조회
	@Override
	public List<BBS1ReplyVO> sBBS1ReadReply(int bno) throws Exception {
		return sql.selectList("BBS1ReplyMapper.readReply", bno);
	}

	// 게시판 댓글  작성
	@Override
	public void sBBS1WriteReply(BBS1ReplyVO vo) throws Exception {
		sql.insert("BBS1ReplyMapper.writeReply", vo);
	}

	// 게시판 댓글 수정
	@Override
	public void sBBS1UpdateReply(BBS1ReplyVO vo) throws Exception {
		sql.update("BBS1ReplyMapper.updateReply", vo);
	}

	// 게시판 댓글 삭제
	@Override
	public void sBBS1DeleteReply(BBS1ReplyVO vo) throws Exception {
		sql.delete("BBS1ReplyMapper.deleteReply", vo);
	}

	// 게시판 댓글 수정뷰, 댓글 삭제뷰
	@Override
	public BBS1ReplyVO sBBS1SelectReply(int rno) throws Exception {
		return sql.selectOne("BBS1ReplyMapper.selectReply", rno);
	}

}



