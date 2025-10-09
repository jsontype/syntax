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
	 	<title>블로그</title>
	</head>

	<script type="text/javascript">
		$(document).ready(function(){
			var formObj = $("form[name='updateForm']");

			// 취소
			$(".cancel_btn").on("click", function(){
				event.preventDefault();
				location.href = "/azuma2/Blog1/sBlog1List?bno=${sBlog1Update.bno}"
					   + "&page=${scri.page}"
					   + "&perPageNum=${scri.perPageNum}"
					   + "&searchType=${scri.searchType}"
					   + "&keyword=${scri.keyword}";
			})

			// 수정
			$(".update_btn").on("click", function(){
				if(fn_valiChk()){
					return false;
				}
				formObj.attr("action", "/azuma2/Blog1/sBlog1Update");
				formObj.attr("method", "post");
				formObj.submit();
			})

			// 수정밸리데이션 체크
			function fn_valiChk(){
				var value = $("form[name='updateForm'] .chk").length;
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
				<h1> 블로그</h1>
			</header>
			<hr />

			<div>
				<%@include file="sBlog1Nav.jsp" %>
			</div>

			<section id="container">
				<form name="updateForm" role="form" method="post" action="/azuma2/Blog1/sBlog1Update" class="form-horizontal">
					<!-- BlogSearchCriteria 유지 -->
					<input type="hidden" name="bno" value="${sBlog1Update.bno}" readonly="readonly"/>
					<input type="hidden" id="page" name="page" value="${scri.page}">
					<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
					<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
					<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">

					<div class="form-group">
						<label for="title" class="col-sm-1 control-label">제목</label>
						<div class="col-sm-8">
							<input type="text" id="title" name="title" value="${sBlog1Update.title}" value="${sBlog1Update.title}" class="chk form-control" title="제목을 입력하세요" />
						</div>
					</div>
					<div class="form-group">
						<label for="content" class="col-sm-1 control-label">내용</label>
						<div class="col-sm-8">
							<textarea id="content" name="content" class="chk form-control" title="내용을 입력하세요"><c:out value="${sBlog1Update.content}" /></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="writer" class="col-sm-1 control-label">작성자</label>
						<div class="col-sm-8">
							<input type="text" id="writer" name="writer" value="${sBlog1Update.writer}" readonly="readonly" class="form-control" />
						</div>
					</div>
					<div class="form-group">
						<label for="regdate" class="col-sm-1 control-label">작성날짜</label>
						<fmt:formatDate value="${sBlog1Update.regdate}" pattern="yyyy-MM-dd"/>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<c:if test="${member.userId == sBlog1Update.writer}">
								<button type="submit" class="update_btn btn btn-success">저장</button>
							</c:if>
							<button type="submit" class="cancel_btn btn btn-primary">취소</button>
						</div>
					</div>
				</form>
			</section>
			<hr />
		</div>
	</body>
</html>


