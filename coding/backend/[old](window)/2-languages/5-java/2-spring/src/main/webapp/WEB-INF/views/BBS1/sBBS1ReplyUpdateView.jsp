<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
			var formObj = $("form[name='replyUpdateForm']");

			// 댓글 수정 취소
			$(".cancel_btn").on("click", function(){
				location.href = "/azuma2/BBS1/sBBS1ReadView?bno=${sBBS1ReplyUpdate.bno}"
					   + "&page=${scri.page}"
					   + "&perPageNum=${scri.perPageNum}"
					   + "&searchType=${scri.searchType}"
					   + "&keyword=${scri.keyword}";
			})

			// 댓글 수정
			$(".replyUpdate_btn").on("click", function(){
				if(fn_valiChk()){
					return false;
				}
				var formObj = $("form[name='replyUpdateForm']");
				formObj.attr("action", "/azuma2/BBS1/sBBS1ReplyUpdate");
				formObj.submit();
			});

			// 댓글 수정 - 밸리데이션 체크
			function fn_valiChk(){
				var value = $("form[name='replyUpdateForm'] .chk").length;
				for(var i = 0; i<value; i++){
					if($(".chk").eq(i).val() == "" || $(".chk").eq(i).val() == null){
						alert($(".chk").eq(i).attr("title"));
						return true;
					}
				}
			}
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
				<form name="replyUpdateForm" role="form" method="post" action="/azuma2/BBS1/sBBS1ReplyUpdate" class="form-horizontal">
					<!-- SearchCriteria 유지 -->
					<input type="hidden" name="bno" value="${sBBS1ReplyUpdate.bno}" readonly="readonly"/>
					<input type="hidden" id="rno" name="rno" value="${sBBS1ReplyUpdate.rno}" />
					<input type="hidden" id="page" name="page" value="${scri.page}">
					<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
					<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
					<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">

					<div class="form-group">
						<label for="content" class="col-sm-1 control-label">댓글 내용</label>
						<div class="col-sm-10">
							<input type="text" id="content" name="content" value="${sBBS1ReplyUpdate.content}" class="chk" title="내용을 입력하세요.">
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<c:if test="${member.userId == sBBS1ReplyUpdate.writer}">
								<button type="button" class="replyUpdate_btn btn btn-warning">저장</button>
							</c:if>
							<button type="button" class="cancel_btn btn btn-primary">취소</button>
						</div>
					</div>
				</form>
			</section>
			<hr />
		</div>
	</body>
</html>

