<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="pageName" value="게시물 상세페이지" />
<%@ include file="../part/head.jspf"%>

	<section class="con">
		번호 : ${article.id}<br>
		제목 : ${article.title}<br>
		내용 : ${article.body}
		조회수 : ${article.hit}
	</section>

	<div class="btns con">
		<a href="./list">게시물 리스트</a>
		<a href="./add">게시물 추가</a>
		<a href="./modify?id=${article.id}">게시물 수정</a>
		<a onclick="if ( confirm('삭제하시겠습니까?') == false ) return false;" href="./doDelete?id=${article.id}">게시물 삭제</a>
	</div>

<%@ include file="../part/foot.jspf"%>