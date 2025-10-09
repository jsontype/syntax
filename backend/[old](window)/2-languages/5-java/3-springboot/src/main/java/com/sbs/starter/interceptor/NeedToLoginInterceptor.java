package com.sbs.starter.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

// 인터셉터 이름
@Component("needToLoginInterceptor")
public class NeedToLoginInterceptor implements HandlerInterceptor {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// 이 인터셉터 실행 전에 beforeActionInterceptor 가 실행되고 거기서 isLogined 라는 속성 생성
		// 그래서 여기서 단순히 request.getAttribute("isLogined"); 이것만으로 로그인 여부 알 수 있음
		boolean isLogined = (boolean) request.getAttribute("isLogined");

		if (isLogined == false) {
			response.setContentType("text/html; charset=UTF-8");
			response.getWriter().append("<script>");
			response.getWriter().append("alert('로그인 후 이용해주세요.');");
			response.getWriter().append("location.replace('/member/login');");
			response.getWriter().append("</script>");
			// 리턴 false;를 이후에 실행될 인터셉터와 액션이 실행되지 않음
			return false;
		}

		return HandlerInterceptor.super.preHandle(request, response, handler);
	}
}