package to.pc.azuma2.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import to.pc.azuma2.vo.Blog1ReplyVO;

@Repository
public class Blog1ReplyDAOImpl implements Blog1ReplyDAO {

	@Inject SqlSession sql;

	// 블로그 댓글 조회
	@Override
	public List<Blog1ReplyVO> sBlog1ReadReply(int bno) throws Exception {
		return sql.selectList("Blog1ReplyMapper.readReply", bno);
	}

	// 블로그 댓글  작성
	@Override
	public void sBlog1WriteReply(Blog1ReplyVO vo) throws Exception {
		sql.insert("Blog1ReplyMapper.writeReply", vo);
	}

	// 블로그 댓글 수정
	@Override
	public void sBlog1UpdateReply(Blog1ReplyVO vo) throws Exception {
		sql.update("Blog1ReplyMapper.updateReply", vo);
	}

	// 블로그 댓글 삭제
	@Override
	public void sBlog1DeleteReply(Blog1ReplyVO vo) throws Exception {
		sql.delete("Blog1ReplyMapper.deleteReply", vo);
	}

	// 블로그 댓글 수정뷰, 블로그 댓글 삭제뷰
	@Override
	public Blog1ReplyVO sBlog1SelectReply(int rno) throws Exception {
		return sql.selectOne("Blog1ReplyMapper.selectReply", rno);
	}

}

