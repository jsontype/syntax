package to.pc.azuma2.controller;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import to.pc.azuma2.service.Blog1ReplyService;
import to.pc.azuma2.service.Blog1Service;
import to.pc.azuma2.vo.Blog1PageMaker;
import to.pc.azuma2.vo.Blog1ReplyVO;
import to.pc.azuma2.vo.Blog1SearchCriteria;
import to.pc.azuma2.vo.Blog1VO;

@Controller
@RequestMapping("/")
public class Blog1Controller {

	private static final Logger logger = LoggerFactory.getLogger(Blog1Controller.class);

	@Inject
	Blog1Service service;

	@Inject
	Blog1ReplyService replyService;

	// 홈페이지 (Home.jsp) : ☞ 이미 BoardController에 home메소드가 있어서 생략했음. 같은 이름의 메소드가 있으면 안됨.

	// 블로그 작성뷰
	@RequestMapping(value = "/Blog1/sBlog1WriteView", method = RequestMethod.GET)
	public void sBlog1WriteView() throws Exception{
		logger.info("sBlog1WriteView");
	}

	// 블로그 작성
	@RequestMapping(value = "/Blog1/sBlog1Write", method = RequestMethod.POST)
	public String sBlog1Write(Blog1VO Blog1VO) throws Exception{
		logger.info("sBlog1Write");
		service.sBlog1Write(Blog1VO);
		return "redirect:/Blog1/sBlog1List";
	}

	// 블로그 목록 조회
	@RequestMapping(value = "/Blog1/sBlog1List", method = RequestMethod.GET)
	public String sBlog1List(Blog1VO Blog1VO, Model model, @ModelAttribute("scri") Blog1SearchCriteria scri) throws Exception{
		logger.info("sBlog1List");
		model.addAttribute("sBlog1List", service.sBlog1List(scri));
		Blog1PageMaker sBlog1PageMaker = new Blog1PageMaker();
		sBlog1PageMaker.setCri(scri);
		sBlog1PageMaker.setTotalCount(service.sBlog1ListCount(scri));
		model.addAttribute("sBlog1PageMaker", sBlog1PageMaker);
		// 블로그 댓글 조회
		List<Blog1ReplyVO> sBlog1ReplyList = replyService.sBlog1ReadReply(Blog1VO.getBno());
		model.addAttribute("sBlog1ReplyList", sBlog1ReplyList);
		return "Blog1/sBlog1List";
	}

	// 블로그 수정뷰
	@RequestMapping(value = "/Blog1/sBlog1UpdateView", method = RequestMethod.GET)
	public String sBlog1UpdateView(Blog1VO Blog1VO, @ModelAttribute("scri") Blog1SearchCriteria scri, Model model) throws Exception{
		logger.info("sBlog1UpdateView");
		model.addAttribute("sBlog1Update", service.sBlog1Read(Blog1VO.getBno()));
		model.addAttribute("scri", scri);
		return "Blog1/sBlog1UpdateView";
	}

	// 블로그 수정
	@RequestMapping(value = "/Blog1/sBlog1Update", method = RequestMethod.POST)
	public String sBlog1Update(Blog1VO Blog1VO, @ModelAttribute("scri") Blog1SearchCriteria scri, RedirectAttributes rttr) throws Exception{
		logger.info("sBlog1Update");
		service.sBlog1Update(Blog1VO);
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/Blog1/sBlog1List";
	}

	// 블로그 삭제
	@RequestMapping(value = "/Blog1/sBlog1Delete", method = RequestMethod.POST)
	public String sBlog1Delete(Blog1VO Blog1VO, @ModelAttribute("scri") Blog1SearchCriteria scri, RedirectAttributes rttr) throws Exception{
		logger.info("sBlog1Delete");
		service.sBlog1Delete(Blog1VO.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/Blog1/sBlog1List";
	}

	// 블로그 댓글 작성
	@RequestMapping(value="/Blog1/sBlog1ReplyWrite", method = RequestMethod.POST)
	public String sBlog1ReplyWrite(Blog1ReplyVO vo, Blog1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBlog1ReplyWrite");
		replyService.sBlog1WriteReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/Blog1/sBlog1List";
	}

	// 블로그 댓글 수정 GET
	@RequestMapping(value="/Blog1/sBlog1ReplyUpdateView", method = RequestMethod.GET)
	public String sBlog1ReplyUpdateView(Blog1ReplyVO vo, Blog1SearchCriteria scri, Model model) throws Exception {
		logger.info("sBlog1ReplyUpdateView");
		model.addAttribute("sBlog1ReplyUpdate", replyService.sBlog1SelectReply(vo.getRno()));
		model.addAttribute("scri", scri);
		return "Blog1/sBlog1ReplyUpdateView";
	}

	// 블로그 댓글 수정 POST
	@RequestMapping(value="/Blog1/sBlog1ReplyUpdate", method = RequestMethod.POST)
	public String sBlog1ReplyUpdate(Blog1ReplyVO vo, Blog1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBlog1ReplyUpdate");
		replyService.sBlog1UpdateReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/Blog1/sBlog1List";
	}

	// 블로그 댓글 삭제 GET
	@RequestMapping(value="/Blog1/sBlog1ReplyDeleteView", method = RequestMethod.GET)
	public String sBlog1ReplyDeleteView(Blog1ReplyVO vo, Blog1SearchCriteria scri, Model model) throws Exception {
		logger.info("sBlog1ReplyDeleteView");
		model.addAttribute("sBlog1ReplyDelete", replyService.sBlog1SelectReply(vo.getRno()));
		model.addAttribute("scri", scri);
		return "Blog1/sBlog1ReplyDeleteView";
	}

	// 블로그 댓글 삭제 POST
	@RequestMapping(value="/Blog1/sBlog1ReplyDelete", method = RequestMethod.POST)
	public String sBlog1ReplyDelete(Blog1ReplyVO vo, Blog1SearchCriteria scri, RedirectAttributes rttr) throws Exception {
		logger.info("sBlog1ReplyDelete");
		replyService.sBlog1DeleteReply(vo);
		rttr.addAttribute("bno", vo.getBno());
		rttr.addAttribute("page", scri.getPage());
		rttr.addAttribute("perPageNum", scri.getPerPageNum());
		rttr.addAttribute("searchType", scri.getSearchType());
		rttr.addAttribute("keyword", scri.getKeyword());
		return "redirect:/Blog1/sBlog1List";
	}




}
