<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!--
// JSTL core 명령어("c")를 사용해
	로그인 여부에 따라, 멤버정보 일치여부에 따라,
	수정/삭제 버튼 뜨도록 구현했음 : ☞ 2_context.txt 참조

// 댓글 작성 버튼
var formObj = $("form[name='replyForm']"); : formObj를 이미 쓰고있기때문에 함수 안에 다시 만들어주고 form의 name을 replyForm으로 바꾸어준 것임

// 댓글 수정/삭제 View 버튼
수정 버튼을 클릭했을 때 이동하는 url주소안에 게시판 bno, page, perPageNum, searchType, keyword 그리고 댓글번호인 rno을 넣는다.
여기서 $(this).attr("data-rno")는 클릭 이벤트가 발생한 수정 버튼의 data-rno값을 가져오겠다는 말이다.

조건결과를 저장할 변수 입력하기
	<c set var="name" value="홍길동" />
예시 : 위의 코드는 변수 name을 홍길동으로 설정한다.
	<c if test="" />
		<c out value="${str}" />
	</c if>
예시 : 위의 코드는 변수 name의 값이 "홍길동" 이면 출력한다.
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
			var formObj = $("form[name='readForm']");

			// 수정
			$(".update_btn").on("click", function(){
				formObj.attr("action", "/azuma2/BBS1/sBBS1UpdateView");
				formObj.attr("method", "get");
				formObj.submit();
			})

			// 삭제
			$(".delete_btn").on("click", function(){
				var deleteYN = confirm("삭제하시겠습니까?");
				if(deleteYN == true){
				formObj.attr("action", "/azuma2/BBS1/sBBS1Delete");
				formObj.attr("method", "post");
				formObj.submit();
				}
			})

			// 목록
			$(".list_btn").on("click", function(){
				location.href = "/azuma2/BBS1/sBBS1List?page=${scri.page}"
						      +"&perPageNum=${scri.perPageNum}"
						      +"&searchType=${scri.searchType}&keyword=${scri.keyword}";
			})

			// 댓글 작성
			$(".replyWrite_Btn").on("click", function(){
				if(fn_valiChk()){
					return false;
				}
				var formObj = $("form[name='replyForm']");
				formObj.attr("action", "/azuma2/BBS1/sBBS1ReplyWrite");
				formObj.submit();
			});

			// 댓글 작성 - 밸리데이션 체크
			function fn_valiChk(){
				var value = $("form[name='replyForm'] .chk").length;
				for(var i = 0; i<value; i++){
					if($(".chk").eq(i).val() == "" || $(".chk").eq(i).val() == null){
						alert($(".chk").eq(i).attr("title"));
						return true;
					}
				}
			}

			// 댓글 수정 View
			$(".replyUpdate_Btn").on("click", function(){
				location.href = "/azuma2/BBS1/sBBS1ReplyUpdateView?bno=${sBBS1Read.bno}"
								+ "&page=${scri.page}"
								+ "&perPageNum=${scri.perPageNum}"
								+ "&searchType=${scri.searchType}"
								+ "&keyword=${scri.keyword}"
								+ "&rno="+$(this).attr("data-rno");
			});

			// 댓글 삭제 View
			$(".replyDelete_Btn").on("click", function(){
				location.href = "/azuma2/BBS1/sBBS1ReplyDeleteView?bno=${sBBS1Read.bno}"
					+ "&page=${scri.page}"
					+ "&perPageNum=${scri.perPageNum}"
					+ "&searchType=${scri.searchType}"
					+ "&keyword=${scri.keyword}"
					+ "&rno="+$(this).attr("data-rno");
			});
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
				<form name="readForm" role="form" method="post">
					<!-- SearchCriteria 유지 -->
					<input type="hidden" id="bno" name="bno" value="${sBBS1Read.bno}" />
					<input type="hidden" id="page" name="page" value="${scri.page}">
					<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
					<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
					<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">
				</form>

				<div class="form-group">
					<label for="title" class="col-sm-2 control-label">제목</label>
					<input type="text" id="title" name="title" class="form-control" value="${sBBS1Read.title}" readonly="readonly" />
				</div>
				<div class="form-group">
					<label for="content" class="col-sm-2 control-label">내용</label>
					<textarea id="content" name="content" class="form-control" readonly="readonly"><c:out value="${sBBS1Read.content}" /></textarea>
				</div>
				<div class="form-group">
					<label for="writer" class="col-sm-2 control-label">작성자</label>
					<input type="text" id="writer" name="writer" class="form-control" value="${sBBS1Read.writer}"  readonly="readonly"/>
				</div>
				<div class="form-group">
					<label for="regdate" class="col-sm-2 control-label">작성날짜</label>
					<fmt:formatDate value="${sBBS1Read.regdate}" pattern="yyyy-MM-dd" />
				</div>

				<div>
					<button type="button" class="list_btn btn btn-primary">목록</button>
					<c:if test="${member.userId == sBBS1Read.writer}">
						<button type="button" class="update_btn btn btn-warning">수정</button>
						<button type="button" class="delete_btn btn btn-danger">삭제</button>
						<hr />
					</c:if>
				</div>

				<!-- 댓글 -->
				<div id="reply">
					<ol class="replyList">
						<c:forEach items="${replyList}" var="replyList">
							<li>
								<p>
								작성자 : ${replyList.writer}<br />
								작성 날짜 :  <fmt:formatDate value="${replyList.regdate}" pattern="yyyy-MM-dd" />
								</p>

								<p>${replyList.content}</p>
								<c:if test="${member.userId == replyList.writer}">
									<div>
										<button type="button" class="replyUpdate_Btn btn btn-warning" data-rno="${replyList.rno}">수정</button>
										<button type="button" class="replyDelete_Btn btn btn-danger" data-rno="${replyList.rno}">삭제</button>
									</div>
								</c:if>
							</li>
						</c:forEach>
					</ol>
				</div>

				<!-- 댓글 작성 -->
				<c:if test="${member != null}">
					<form name="replyForm" method="post" class="form-horizontal">
						<!-- SearchCriteria 유지 -->
						<input type="hidden" id="bno" name="bno" value="${sBBS1Read.bno}" />
						<input type="hidden" id="page" name="page" value="${scri.page}">
						<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
						<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
						<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">

						<div class="form-group">
							<label for="writer" class="col-sm-2 control-label">댓글 작성자</label>
							<div class="col-sm-10">
								<input type="text" id="writer" name="writer" class="form-control" value="${member.userId}" readonly/>
							</div>
						</div>

						<div class="form-group">
							<label for="content" class="col-sm-2 control-label">댓글 내용</label>
							<div class="col-sm-10">
								<input type="text" id="content" name="content" class="chk form-control" title="내용을 입력하세요." />
							</div>
						</div>

						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="button" class="replyWrite_Btn btn btn-success">작성</button>
							</div>
						</div>
					</form>
					<hr />
				</c:if>
			</section>
		</div>
	</body>
</html>
