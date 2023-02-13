package to.pc.azuma2.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import to.pc.azuma2.service.BBS1ReplyService;
import to.pc.azuma2.service.BBS1Service;
import to.pc.azuma2.vo.BBS1PageMaker;
import to.pc.azuma2.vo.BBS1ReplyVO;
import to.pc.azuma2.vo.BBS1SearchCriteria;
import to.pc.azuma2.vo.BBS1VO;

/*
 * 홈페이지 (home.jsp)
	model.addAttribute("serverTime", formattedDate );
	model : 데이터를 담을 그릇
	addAttribute : 후자의 내용을 전자에 담겠다는 뜻. 즉, formattedDate안에 담긴 데이터를 "serverTime"이라는 이름으로 담을 것이라는 뜻이다.

	model.addAttribute("replyList", replyList);
	위 설명에 대한 예시로, 일부러 얘 하나만 sBBS1ReplyList라는 이름으로 하지 않았다. 이럴 경우 sBBS1ReadView.jsp파일에서 어떤 차이가 생기는지 보자.
 *
 * 게시판 목록조회
  	Criteria 기준을 내포한, SearchCriteria 기준에 맞춰진 리스트목록을 띄운다.
   	* SearchCriteria.java안에서 Criteria를 extends 했기때문에  Criteria기능을 내포할 수 있다.
  	그리고 이를 페이지화 하기 위해 pageMaker에 scri(기준) 정보와 listCount(수) 정보를 담는다.
 *
 * 게시판 수정뷰, 게시판 조회
  	현재 게시판 목록에서는 bno값들이 다 있기때문에 이것을 불러와야 한다. bno값들은 BBS1VO에 들어있기 때문에 서비스를 실행할때 그 번호를 넣어주어서
  		sBBS1Read라는 이름으로 값을 저장한다.
  	BBS1SearchCriteria값을 사용하기위해 매개변수에 파라미터를 통해 값을 받고 model을 이용하여 scri를 보내준다.
  		목록조회가 아닌데도 scri를 담는 이유는 상세조회 화면에서 목록조회로 돌아가도 해당 페이지와 검색어 정보를 유지시키기 위해서이다.
 *
 * 댓글
	게시판 댓글류는 따로 Controller를 만들지 않는 이유 : 댓글은 게시판에 종속되어 있기 때문
 	댓글작성 : 파라미터로 BBS1ReplyVO, BBS1SearchCriteria, RedirectAttributes를 넣어주었는데,
			BBS1ReplyVO는 댓글 작성하기위한 데이터,
			BBS1SearchCriteria는 sBBS1ReadView에 있던 page, perPageNum, searchType, keyword값을 받아오기 위한 것이고,
			RedirectAttributes는 redirect했을때 값들을 물고 이동하는 것이다. 그래서 SearchCriteria의 값을 넣어서 댓글을 저장한 뒤
				원래 페이지로 redirect하여 이동하게 된다.
 *
 * 댓글 수정/삭제 GET, 수정/삭제 POST
	수정/삭제 GET : 댓글 수정/삭제 페이지에 접근하기 위한 컨트롤러
	수정/삭제 POST : 수정/삭제한 값을 전송할 수 있는 컨트롤러
 *
 */

@Controller
@RequestMapping("/")
public class BBS1Controller {

	private static final Logger logger = LoggerFactory.getLogger(BBS1Controller.class);

	@Inject
	BBS1Service service;

	@Inject
	BBS1ReplyService replyService;

	// 홈페이지 (home.jsp)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		String formattedDate = dateFormat.format(date);
		model.addAttribute("serverTime", formattedDate );
		return "home";
	}

	// 게시판 작성뷰
	@RequestMapping(value = "/BBS1/sBBS1WriteView", method = RequestMethod.GET)
	public void sBBS1WriteView() throws Exception{
		logger.info("sBBS1WriteView");
	}

	// 게시판 작성
	@RequestMapping(value = "/BBS1/sBBS1Write", method = RequestMethod.POST)
	public String sBBS1Write(BBS1VO BBS1VO) throws Exception{
		logger.info("sBBS1Write");
		service.sBBS1Write(BBS1VO);
		return "redirect:/BBS1/sBBS1List";
	}

	// 게시판 목록 조회
	@RequestMapping(value = "/BBS1/sBBS1List", method = RequestMethod.GET)
	public String sBBS1List(Model model, @ModelAttribute("scri") BBS1SearchCriteria scri) throws Exception{
		logger.info("sBBS1List");
		model.addAttribute("sBBS1List", service.sBBS1List(scri));
		BBS1PageMaker sBBS1PageMaker = new BBS1PageMaker();
		sBBS1PageMaker.setCri(scri);
		sBBS1PageMaker.setTotalCount(service.sBBS1ListCount(scri));
		model.addAttribute("sBBS1PageMaker", sBBS1PageMaker);
		return "BBS1/sBBS1List";
	}

	// 게시판 수정뷰
	@RequestMapping(value = "/BBS1/sBBS1UpdateView", method = RequestMethod.GET)
	public String sBBS1UpdateView(BBS1VO BBS1VO, @ModelAttribute("scri") BBS1SearchCriteria scri, Model model) throws Exception{
		logger.info("sBBS1UpdateView");
		model.addAttribute("update", service.sBBS1Read(BBS1VO.getBno()));
		model.addAttribute("scri", scri);
		return "BBS1/sBBS1UpdateView";
	}

	// 게시판 수정뷰 조회, 게시판 조회
	@RequestMapping(value = "/BBS1/sBBS1ReadView", method = RequestMethod.GET)
	public String sBBS1Read(BBS1VO BBS1VO, @ModelAttribute("scri") BBS1SearchCriteria scri, Model model) throws Exception{
		logger.info("sBBS1Read");
		model.addAttribute("sBBS1Read", service.sBBS1Read(BBS1VO.getBno()));
		model.addAttribute("scri", scri);
		List<BBS1ReplyVO> replyList = replyService.sBBS1ReadReply(BBS1VO.getBno());
		model.addAttribute("replyList", replyList);
		return "BBS1/sBBS1ReadView";
	}

	// 게시판 수정
	@RequestMapping(value = "/BBS1/sBBS1Update", method = RequestMethod.POST)
	public String sBBS1Update(BBS1VO BBS1VO, @ModelAttribute("scri") BBS1SearchCriteria scri, RedirectAttributes rttr) throws Exception{
		logger.info("update");
		service.sBBS1Update(BBS1VO);
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/BBS1/sBBS1List";
	}

	// 게시판 삭제
	@RequestMapping(value = "/BBS1/sBBS1Delete", method = RequestMethod.POST)
	public String sBBS1Delete(BBS1VO BBS1VO, @ModelAttribute("scri") BBS1SearchCriteria scri, RedirectAttributes rttr) throws Exception{
		logger.info("sBBS1Delete");
		service.sBBS1Delete(BBS1VO.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/BBS1/sBBS1List";
	}

	// 게시판 댓글 작성
	@RequestMapping(value="/BBS1/sBBS1ReplyWrite", method = RequestMethod.POST)
	public String sBBS1ReplyWrite(BBS1ReplyVO vo, BBS1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBBS1ReplyWrite");
		replyService.sBBS1WriteReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/BBS1/sBBS1ReadView";
	}

	// 게시판 댓글 수정 GET
	@RequestMapping(value="/BBS1/sBBS1ReplyUpdateView", method = RequestMethod.GET)
	public String sBBS1ReplyUpdateView(BBS1ReplyVO vo, BBS1SearchCriteria scri, Model model) throws Exception {
		logger.info("sBBS1ReplyUpdateView");
		model.addAttribute("sBBS1ReplyUpdate", replyService.sBBS1SelectReply(vo.getRno()));
		model.addAttribute("scri", scri);
		return "BBS1/sBBS1ReplyUpdateView";
	}

	// 게시판 댓글 수정 POST
	@RequestMapping(value="/BBS1/sBBS1ReplyUpdate", method = RequestMethod.POST)
	public String sBBS1ReplyUpdate(BBS1ReplyVO vo, BBS1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBBS1ReplyUpdate");
		replyService.sBBS1UpdateReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/BBS1/sBBS1ReadView";
	}

	// 게시판 댓글 삭제 GET
	@RequestMapping(value="/BBS1/sBBS1ReplyDeleteView", method = RequestMethod.GET)
	public String sBBS1ReplyDeleteView(BBS1ReplyVO vo, BBS1SearchCriteria scri, Model model) throws Exception {
		logger.info("sBBS1ReplyWrite");
		model.addAttribute("sBBS1ReplyDelete", replyService.sBBS1SelectReply(vo.getRno()));
		model.addAttribute("scri", scri);
		return "BBS1/sBBS1ReplyDeleteView";
	}

	// 게시판 댓글 삭제 POST
	@RequestMapping(value="/BBS1/sBBS1ReplyDelete", method = RequestMethod.POST)
	public String sBBS1ReplyDelete(BBS1ReplyVO vo, BBS1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBBS1ReplyDelete");
		replyService.sBBS1DeleteReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/BBS1/sBBS1ReadView";
	}



}

