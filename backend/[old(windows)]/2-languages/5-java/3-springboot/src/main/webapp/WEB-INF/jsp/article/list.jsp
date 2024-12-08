<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="pageName" value="게시물 리스트" />
<%@ include file="../part/head.jspf"%>

<h2 class="con">전체 게시물 개수 : ${totalCount}</h2>

<div class="con">
	<c:forEach items="${list}" var="article">
		<section>
			<a href="./detail?id=${article.id}">번호 : ${article.id}, 제목 :
				${article.title}, 조회수 : ${article.hit}</a>
		</section>
		<hr>
	</c:forEach>
</div>

<div class="btns con">
	<a href="./add">게시물 추가</a>
</div>

<%@ include file="../part/foot.jspf"%>