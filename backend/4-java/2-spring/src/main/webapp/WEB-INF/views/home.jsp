<!-- JSTL : c:forEach, c:out의 코드를 사용하겠다. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- JSTL : fmt날짜 포맷의 코드를 사용하겠다. -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

<!--
// 부트스트랩 기본적인 사용법
div class와 section id에 붙는 "contatiner" : 기본적으로 부트스트랩의 그리드 시스템 사용을 위해서는 콘테이너 요소가 필요하다.
input class : 기본적으로 부트스트랩의 폼 시스템 사용을 위해서는 인풋을 감싸고 있는 div는 class를 "form-group", input은 "form-control" 로 지정해준다.
button class : "btn btn-default" 부터, primary, secondary, warning, danger, dark, light... 등이 있다.
table class : "table table-hover"(게시판테이블) 등이 있다.
div class : "search row"(검색줄) 등이 있다.
공통 class "col-**-숫자" : col은 가로 너비로, 숫자 도합 12가 한페이지다. 가운데 부분은 xs(폰), sm(패드), md(노트북), lg(데톱)일 때의 비율을 각각 의미한다.
-->

<html>
	<head>
		<title>Home</title>
		<!-- 부트스트랩 3 : CSS Framework -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- 부트스트랩 3 테마 -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<!-- Jquery : Javascript 라이브러리 -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</head>

	<script type="text/javascript">
		$(document).ready(function(){ // = $(function(){  }); HTML이 화면에 뿌려지고 나서 동작준비하는 것. JS의 onload와 같음

			//로그아웃
			$("#logout_Btn").on("click", function(){
				location.href="Member1/sMember1Logout";
			})

			//회원가입
			$("#register_Btn").on("click", function(){
				location.href="Member1/sMember1Register";
			})

			//회원정보 수정
			$("#memberUpdate_Btn").on("click", function(){
				location.href="Member1/sMember1MemberUpdateView";
			})

		})
	</script>

	<body>
		<a href="/azuma2/BBS1/sBBS1List">게시판</a> <a href="/azuma2/Blog1/sBlog1List">블로그</a><br />

		<form name='homeForm' method="post" action="/azuma2/Member1/sMember1Login">
			<c:if test="${member == null}">
				<div>
					<label for="userId"></label>
					<input type="text" id="userId" name="userId">
				</div>
				<div>
					<label for="userPass"></label>
					<input type="password" id="userPass" name="userPass">
				</div>
				<div>
					<button type="submit">로그인</button>
					<button id="register_Btn" type="button">회원가입</button>
				</div>
			</c:if>
			<c:if test="${member != null }">
				<div>
					<p>${member.userId}님 환영 합니다.</p>
					<button id="memberUpdate_Btn" type="button">회원정보수정</button>
					<button id="logout_Btn" type="button">로그아웃</button>
				</div>
			</c:if>
			<c:if test="${msg == false}">
				<p style="color: red;">로그인 실패! 아이디와 비밀번호 확인해주세요.</p>
			</c:if>
		</form>
	</body>
</html>

