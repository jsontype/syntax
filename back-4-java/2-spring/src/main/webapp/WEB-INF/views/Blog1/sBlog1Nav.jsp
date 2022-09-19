<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<style type="text/css">
	li {list-style: none; display:inline; padding: 6px;}
</style>

<ul>
	<li><a href="/azuma2/BBS1/sBBS1List">게시판</a></li>
	<li><a href="/azuma2/Blog1/sBlog1List">블로그</a></li>
	<c:if test="${member != null}"><li><a href="/azuma2/Blog1/sBlog1WriteView">등록</a></li></c:if>
	<li>
		<c:if test="${member != null}"><a href="/azuma2/Member1/sMember1Logout">로그아웃</a></c:if>
		<c:if test="${member == null}"><a href="/azuma2">로그인</a></c:if>
	</li>
	<li>
		<c:if test="${member != null}">
			${member.userId}님 안녕하세요.
		</c:if>
	</li>
</ul>
<hr />

