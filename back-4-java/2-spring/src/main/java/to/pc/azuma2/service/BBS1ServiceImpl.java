package to.pc.azuma2.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import to.pc.azuma2.dao.BBS1DAO;
import to.pc.azuma2.vo.BBS1SearchCriteria;
import to.pc.azuma2.vo.BBS1VO;

/* Service : Controller가 Request를 받으면 제일 먼저 적절한 Service에 전달하는데,
전달 받은 Service는 비즈니스 로직을 처리한다.
	* 비지니스 로직 : 앱에서 절대 빠져선 안되는, 무거운, 복잡한 부분. 서비스 운영에 대한 로직을 말함
	* 이후 DAO로 연결된다. DAO는 이후 Mapper를 통해 Database로 접근하여 정보를 얻고, 그 정보를 DTO의 데이터에 담아 보낸 뒤, 최종적으로 컨트롤러가 화면에 반환한다.
*/

@Service
public class BBS1ServiceImpl implements BBS1Service {

	@Inject
	private BBS1DAO dao;

	// 게시판 작성
	@Override
	public void sBBS1Write(BBS1VO BBS1VO) throws Exception {
		dao.sBBS1Write(BBS1VO);
	}

	// 게시판 목록 조회
	@Override
	public List<BBS1VO> sBBS1List(BBS1SearchCriteria scri) throws Exception {
		return dao.sBBS1List(scri);
	}

	// 게시판 목록 갯수
	@Override
	public int sBBS1ListCount(BBS1SearchCriteria scri) throws Exception {
		return dao.sBBS1ListCount(scri);
	}

	// 게시판 수정
	@Override
	public void sBBS1Update(BBS1VO BBS1VO) throws Exception {
		dao.sBBS1Update(BBS1VO);
	}

	// 게시판 수정뷰 조회, 게시판 조회
	@Override
	public BBS1VO sBBS1Read(int bno) throws Exception {
		return dao.sBBS1Read(bno);
	}

	// 게시판 삭제
	@Override
	public void sBBS1Delete(int bno) throws Exception {
		dao.sBBS1Delete(bno);
	}



}




