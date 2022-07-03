<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!--
// 작성 - 밸리데이션 체크
작성버튼을 눌렀을때 벨리데이션을 체크하기 위한 함수이다.
chk라는 클래스의 i번째가 공백이거나 null이면 alert으로 i번째의 타이틀(내용/제목/...)을 출력해주는 함수이다.
-->

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
			var formObj = $("form[name='writeForm']");

			// 취소
			$(".cancel_btn").on("click", function(){
				event.preventDefault();
				location.href = "/azuma2/BBS1/sBBS1List";
			})

			// 작성
			$(".write_btn").on("click", function(){
				if(fn_valiChk()){
					return false;
				}
				formObj.attr("action", "/azuma2/BBS1/sBBS1Write");
				formObj.attr("method", "post");
				formObj.submit();
			})

			// 작성 - 밸리데이션 체크
			function fn_valiChk(){
				var value = $("form[name='writeForm'] .chk").length;
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
				<form name="writeForm" method="post" action="/azuma2/BBS1/sBBS1Write" class="form-horizontal">
					<c:if test="${member.userId != null}">
						<div class="form-group">
							<label for="title" class="col-sm-1 control-label">제목</label>
							<div class="col-sm-8">
								<input type="text" id="title" name="title" class="chk" title="제목을 입력하세요" />
							</div>
						</div>
						<div class="form-group">
							<label for="content" class="col-sm-1 control-label">내용</label>
							<div class="col-sm-8">
								<textarea id="content" name="content" class="chk" title="내용을 입력하세요"></textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="writer" class="col-sm-1 control-label">작성자</label>
							<div class="col-sm-8">
								<input type="text" id="writer" name="writer" value="${member.userId}" readonly/>
							</div>
						</div>
						<div class="form-group" >
							<div class="col-sm-offset-2 col-sm-10">
								<button type="submit" class="write_btn btn btn-success">작성</button>
								<button type="submit" class="cancel_btn btn btn-primary">취소</button>
							</div>
						</div>
					</c:if>

					<c:if test="${member.userId == null}">
						<p>로그인 후에 작성하실 수 있습니다.</p>
					</c:if>

				</form>
			</section>
			<hr />
		</div>
	</body>
</html>
