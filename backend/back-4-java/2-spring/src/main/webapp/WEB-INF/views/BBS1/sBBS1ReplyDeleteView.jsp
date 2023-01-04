<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<html>
	<head>
		<!-- 부트스트랩 3 : CSS Framework -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- 부트스트랩 3 테마 -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<!-- Jquery : Javascript 라이브러리 -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	 	<title>게시판</title>
	</head>

	<script type="text/javascript">
		$(document).ready(function(){
			var formObj = $("form[name='updateForm']");

			// 댓글 삭제 취소
			$(".cancel_btn").on("click", function(){
				location.href = "/azuma2/BBS1/sBBS1ReadView?bno=${sBBS1ReplyDelete.bno}"
					   + "&page=${scri.page}"
					   + "&perPageNum=${scri.perPageNum}"
					   + "&searchType=${scri.searchType}"
					   + "&keyword=${scri.keyword}";
			})
		})
	</script>

	<body>
		<div class="container">
			<header>
				<h1> 게시판</h1>
			</header>
			<hr />

			<div>
				<%@include file="sBBS1Nav.jsp" %>
			</div>

			<section id="container">
				<form name="updateForm" role="form" method="post" action="/azuma2/BBS1/sBBS1ReplyDelete" class="form-horizontal">
					<!-- SearchCriteria 유지 -->
					<input type="hidden" name="bno" value="${sBBS1ReplyDelete.bno}" readonly="readonly"/>
					<input type="hidden" id="rno" name="rno" value="${sBBS1ReplyDelete.rno}" />
					<input type="hidden" id="page" name="page" value="${scri.page}">
					<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
					<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
					<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">

					<div>
						<p>삭제 하시겠습니까?</p>
						<c:if test="${member.userId == sBBS1ReplyDelete.writer}">
							<button type="submit" class="delete_btn btn btn-danger">예 삭제합니다.</button>
						</c:if>
						<button type="button" class="cancel_btn btn btn-primary">아니오. 삭제하지 않습니다.</button>
					</div>
				</form>
			</section>
			<hr />
		</div>
	</body>
</html>