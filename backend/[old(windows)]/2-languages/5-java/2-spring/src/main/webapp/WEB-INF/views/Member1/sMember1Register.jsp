<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!--
ajax로 아이디 중복체크 요청 버튼 만들기
	url에 요청하는 url을 설정해주고  data는 userId 이름으로  id가 userId인 값을 가져오고 data : {}를 member/idChk로 보내주게 된다.
	보낸것이 성공하면,
	Controller에서 요청받은 url(/Member1/idChk)의 반환값(return)의 값을 function()에 넣어주게 된다.
	data가 1이면 "중복된 아이디가 있습니다." 알러트를 띄우고, 없으면 "사용가능한 아이디입니다." 라는 알러트를 띄어준다.
	아이디 옆에 중복확인 버튼을 만들어준다.
	onclick이벤트에 fn_idChk();를 타게 해준다. 그럼 중복확인 버튼을 눌렀을때 fn_idChk()가 실행된다.

-->

<html>
	<head>
		<!-- 부트스트랩 3 : CSS Framework -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- 부트스트랩 3 테마 -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<!-- Jquery : Javascript 라이브러리 -->
	 	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<title>회원가입</title>
	</head>

	<script type="text/javascript">
		$(document).ready(function(){

			// 취소
			$(".cancel_btn").on("click", function(){
				location.href = "/azuma2";
			})

			$("#submit").on("click", function(){
				if($("#userId").val()==""){
					alert("아이디를 입력해주세요.");
					$("#userId").focus();
					return false;
				}
				if($("#userPass").val()==""){
					alert("비밀번호를 입력해주세요.");
					$("#userPass").focus();
					return false;
				}
				if($("#userName").val()==""){
					alert("성명을 입력해주세요.");
					$("#userName").focus();
					return false;
				}
				var idChkVal = $("#idChk").val();
				if(idChkVal == "N"){
					alert("중복확인 버튼을 눌러주세요.");
				}else if(idChkVal == "Y"){
					$("#regForm").submit();
				}
			});
		})

		// 아이디 중복 체크
		function fn_idChk(){
			$.ajax({
				url : "/azuma2/Member1/sMember1IdChk",
				type : "post",
				dataType : "json",
				data : {"userId" : $("#userId").val()},
				success : function(data){
					if(data == 1){
						alert("중복된 아이디입니다.");
					}else if(data == 0){
						$("#idChk").attr("value", "Y");
						alert("사용가능한 아이디입니다.");
					}
				}
			})
		}
	</script>

	<body>
		<section id="container">
			<form action="/azuma2/Member1/sMember1Register" method="post" id="regForm">
				<div class="form-group has-feedback">
					<label class="control-label" for="userId">아이디</label>
					<input class="form-control" type="text" id="userId" name="userId" />
					<button class="idChk" type="button" id="idChk" onclick="fn_idChk();" value="N">중복확인</button>
				</div>
				<div class="form-group has-feedback">
					<label class="control-label" for="userPass">패스워드</label>
					<input class="form-control" type="password" id="userPass" name="userPass" />
				</div>
				<div class="form-group has-feedback">
					<label class="control-label" for="userName">성명</label>
					<input class="form-control" type="text" id="userName" name="userName" />
				</div>
			</form>
				<div class="form-group has-feedback">
					<button class="btn btn-success" type="button" id="submit">회원가입</button>
					<button class="cancel_btn btn btn-danger" type="button">취소</button>
				</div>
		</section>
	</body>
</html>

