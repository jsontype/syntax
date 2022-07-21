package to.pc.azuma2.controller;


import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import to.pc.azuma2.service.Member1Service;
import to.pc.azuma2.vo.Member1VO;

/*
 * 회원가입 GET/POST
 * GET : 회원가입 폼으로 이동할때에는 GET메소드를 탄다.
 * POST : 회원가입 버튼을 눌렀을 때에는 POST메소드를 탄다.
 */

@Controller
@RequestMapping("/")
public class Member1Controller {

	/* final 멤버변수는 늘 static과 함께 쓰인다.
	 	static : 동적데이터와 달리, static 데이터는 프로그램 실행 직후부터 끝날 때까지 메모리 수명이 유지된다.
	 	final : final은 해당 entity가 오로지 한 번 할당될 수 있음을 의미한다.
	 			즉, 타 클래스에 상속(override) 될 수 없다.
				문자 그대로 상속 계층 구조에서 ‘마지막’ 클래스이다.
		Logger는 기록계라는 뜻으로, 형식화된 로그 메시지이다.
	*/
	private static final Logger logger = LoggerFactory.getLogger(Member1Controller.class);

	@Inject
	Member1Service service;

	// 회원가입 get
	@RequestMapping(value = "/Member1/sMember1Register", method = RequestMethod.GET)
	public void sMember1GetRegister() throws Exception {
		logger.info("sMember1GetRegister");
	}

	// 회원가입 post
	@RequestMapping(value = "/Member1/sMember1Register", method = RequestMethod.POST)
	public String sMember1PostRegister(Member1VO vo) throws Exception {
		logger.info("sMember1PostRegister");
		int result = service.sMember1IdChk(vo);
		try {
			if(result == 1) {
				return "/Member1/sMember1Register";
			}else if(result == 0) {
				service.sMember1Register(vo);
			}
			// 여기에 입력된 아이디가 존재한다면 -> 다시 회원가입 페이지로 돌아가기
			// 존재하지 않는다면 -> register
		} catch (Exception e) {
			throw new RuntimeException();
		}
		return "redirect:/";
	}

	// 회원가입 - 아이디 중복 체크
	@ResponseBody
	@RequestMapping(value="/Member1/sMember1IdChk", method = RequestMethod.POST)
	public int sMember1IdChk(Member1VO vo) throws Exception {
		int result = service.sMember1IdChk(vo);
		return result;
	}

	// 회원로그인
	@RequestMapping(value = "/Member1/sMember1Login", method = RequestMethod.POST)
	public String sMember1Login(Member1VO vo, HttpServletRequest req, RedirectAttributes rttr) throws Exception{
		logger.info("sMember1Login");
		HttpSession session = req.getSession();
		Member1VO login = service.sMember1Login(vo);
		if(login == null) {
			session.setAttribute("member", null);
			rttr.addFlashAttribute("msg", false);
		}else {
			session.setAttribute("member", login);
		}
		return "redirect:/";
	}

	// 회원로그아웃
	@RequestMapping(value = "/Member1/sMember1Logout", method = RequestMethod.GET)
	public String sMember1Logout(HttpSession session) throws Exception{
		session.invalidate();
		return "redirect:/";
	}

	// 회원정보수정뷰
	@RequestMapping(value="/Member1/sMember1MemberUpdateView", method = RequestMethod.GET)
	public String sMember1RegisterUpdateView() throws Exception{
		return "Member1/sMember1MemberUpdateView";
	}

	// 회원정보수정
	@RequestMapping(value="/Member1/sMember1MemberUpdate", method = RequestMethod.POST)
	public String sMember1RegisterUpdate(Member1VO vo, HttpSession session) throws Exception{
		service.sMember1MemberUpdate(vo);
		session.invalidate();
		return "redirect:/";
	}

	// 회원 탈퇴 get
	@RequestMapping(value="/Member1/sMember1MemberDeleteView", method = RequestMethod.GET)
	public String sMember1MemberDeleteView() throws Exception{
		return "Member1/sMember1MemberDeleteView";
	}

	// 회원 탈퇴 post
	@RequestMapping(value="/Member1/sMember1MemberDelete", method = RequestMethod.POST)
	public String sMember1MemberDelete(Member1VO vo, HttpSession session, RedirectAttributes rttr) throws Exception{
		// 세션에 있는 member를 가져와 member변수에 넣어준다.
		Member1VO sMember1 = (Member1VO) session.getAttribute("member");
		// 세션에있는 비밀번호
		String sessionPass = sMember1.getUserPass();
		// vo로 들어오는 비밀번호
		String voPass = vo.getUserPass();

		if(!(sessionPass.equals(voPass))) {
			rttr.addFlashAttribute("msg", false);
			return "redirect:/Member1/sMember1MemberDeleteView";
		}
		service.sMember1MemberDelete(vo);
		session.invalidate();
		return "redirect:/";
	}

	// 회원탈퇴 - 패스워드 체크
	@ResponseBody
	@RequestMapping(value="/Member1/sMember1PassChk", method = RequestMethod.POST)
	public int sMember1PassChk(Member1VO vo) throws Exception {
		int result = service.sMember1PassChk(vo);
		return result;
	}




}

