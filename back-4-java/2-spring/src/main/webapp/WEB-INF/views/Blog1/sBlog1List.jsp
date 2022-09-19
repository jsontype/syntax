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

	<body>
		<div class="container">
			<header>
				<h1> 블로그</h1>
			</header>
			<hr />

			<div>
				<%@include file="sBlog1Nav.jsp" %>
			</div>

			<br>
			<section id="container">

				<!-- 블로그 -->
				<c:forEach items="${sBlog1List}" var = "sBlog1List">

					<script type="text/javascript">
						$(document).ready(function(){
							var formObj = $("form[name='listForm']");

							// 수정
							$(".update_btn").on("click", function(){
								location.href = "/azuma2/Blog1/sBlog1UpdateView?bno=${sBlog1List.bno}"
									+"&page=${scri.page}"
								     +"&perPageNum=${scri.perPageNum}"
								      +"&searchType=${scri.searchType}&keyword=${scri.keyword}";
							})

							// 삭제
							$(".delete_btn").on("click", function(){
								var deleteYN = confirm("삭제하시겠습니까?");
								if(deleteYN == true){
								formObj.attr("action", "/azuma2/Blog1/sBlog1Delete?bno=${sBlog1List.bno}"
										+"&page=${scri.page}"
										+"&perPageNum=${scri.perPageNum}"
										+"&searchType=${scri.searchType}"
										+"&keyword=${scri.keyword}");
								formObj.attr("method", "post");
								formObj.submit();
								}
							})

							// 댓글 작성
							$(".replyWrite_Btn").on("click", function(){
								if(fn_valiChk()){
									return false;
								}
								var formObj = $("form[name='replyForm']");
								formObj.attr("action", "/azuma2/Blog1/sBlog1ReplyWrite");
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
								location.href = "/azuma2/Blog1/sBlog1ReplyUpdateView?bno=${sBlog1List.bno}"
												+ "&page=${scri.page}"
												+ "&perPageNum=${scri.perPageNum}"
												+ "&searchType=${scri.searchType}"
												+ "&keyword=${scri.keyword}"
												+ "&rno="+$(this).attr("data-rno");
							});

							// 댓글 삭제 View
							$(".replyDelete_Btn").on("click", function(){
								location.href = "/azuma2/Blog1/sBlog1ReplyDeleteView?bno=${sBlog1List.bno}"
									+ "&page=${scri.page}"
									+ "&perPageNum=${scri.perPageNum}"
									+ "&searchType=${scri.searchType}"
									+ "&keyword=${scri.keyword}"
									+ "&rno="+$(this).attr("data-rno");
							});

							// 검색
							$(function(){
								$('#search_Btn').click(function() {
									self.location = "sBlog1List" + '${sBlog1PageMaker.makeQuery(1)}' + "&searchType=" + $("select option:selected").val() + "&keyword=" + encodeURIComponent($('#keywordInput').val());
								});
							});

						})
					</script>

					<!-- 댓글 보이게 하기 -->
					<form name="hiddenform" action="#">
						<!-- BlogSearchCriteria 유지 -->
						<input type="hidden" name="bno" value="${sBlog1List.bno}">
						<input type="hidden" id="page" name="page" value="${scri.page}">
						<input type="hidden" id="perPageNum" name="perPageNum" value="${scri.perPageNum}">
						<input type="hidden" id="searchType" name="searchType" value="${scri.searchType}">
						<input type="hidden" id="keyword" name="keyword" value="${scri.keyword}">
					</form>
					<script type="text/javascript">
							function viewReply(){
								for(var i=0; i<2; i++) { // 한번 실행(i<1), 두번 실행 (i<2)
									document.hiddenform.submit(); // bno에 현 게시판 번호 집어넣기
								}
							}
							viewReply();
					</script>

					<!-- 블로그 Article -->
					<form name="listForm">
					<div class="form-group">
						<label for="title" class="col-sm-2 control-label">#${sBlog1List.bno} 제목</label>
						<input type="text" id="title" name="title" class="form-control" value="${sBlog1List.title}" readonly="readonly"/>
					</div>
					<div class="form-group">
						<label for="content" class="col-sm-2 control-label">컨텐츠</label>
						<textarea id="content" name="content" class="form-control chk" readonly="readonly"><c:out value="${sBlog1List.content}" /></textarea>
					</div>
					<div class="form-group">
						<label for="writer" class="col-sm-2 control-label">작성자</label>
						<input type="text" id="writer" name="writer" class="form-control" value="${sBlog1List.writer}"  readonly="readonly"/>
					</div>
					<div class="form-group">
						<label for="regdate" class="col-sm-2 control-label">작성날짜</label>
						<fmt:formatDate value="${sBlog1List.regdate}" pattern="yyyy-MM-dd" />
					</div>

					<div>
						<c:if test="${member.userId == sBlog1List.writer}">
							<button type="button" class="update_btn btn btn-warning">수정</button>
							<button type="button" class="delete_btn btn btn-danger">삭제</button>
							<hr />
						</c:if>
					</div>
					</form>

					<!-- 댓글 리스트  -->
					<br>
					<div id="sBlog1Reply">
						<ol class="sBlog1ReplyList">
							<c:forEach items="${sBlog1ReplyList}" var="sBlog1ReplyList">
								<li>
									<p>
									작성자 : ${sBlog1ReplyList.writer}<br />
									작성 날짜 :  <fmt:formatDate value="${sBlog1ReplyList.regdate}" pattern="yyyy-MM-dd" />
									</p>
									<p>${sBlog1ReplyList.content}</p>
									<c:if test="${member.userId == sBlog1ReplyList.writer}">
										<div>
											<button type="button" class="replyUpdate_Btn btn btn-warning" data-rno="${sBlog1ReplyList.rno}">수정</button>
											<button type="button" class="replyDelete_Btn btn btn-danger" data-rno="${sBlog1ReplyList.rno}">삭제</button>
										</div>
									</c:if>
								</li>
							</c:forEach>
						</ol>
					</div>

					<!-- 댓글 작성 -->
					<c:if test="${member != null}">
						<form name="replyForm" method="post" class="form-horizontal">
							<!-- BlogSearchCriteria 유지 -->
							<input type="hidden" id="bno" name="bno" value="${sBlog1List.bno}" />
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
									<input type="text" id="content" name="content" class="form-control chk" title="내용을 입력해주세요."/>
								</div>
							</div>

							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="replyWrite_Btn btn btn-success">작성</button>
								</div>
							</div>
						</form>
						<hr /><br><br><br>
					</c:if>
				</c:forEach>

				<!-- 검색창 -->
				<div class="search row">
					<div class="col-xs-2 col-sm-2">
						<select name="searchType" class="form-control">
							<option value="n"<c:out value="${scri.searchType == null ? 'selected' : ''}"/>>-----</option>
							<option value="t"<c:out value="${scri.searchType eq 't' ? 'selected' : ''}"/>>제목</option>
							<option value="c"<c:out value="${scri.searchType eq 'c' ? 'selected' : ''}"/>>내용</option>
							<option value="w"<c:out value="${scri.searchType eq 'w' ? 'selected' : ''}"/>>작성자</option>
							<option value="tc"<c:out value="${scri.searchType eq 'tc' ? 'selected' : ''}"/>>제목+내용</option>
						</select>
					</div>

					<div class="col-xs-10 col-sm-10">
						<div class="input-group">
							<input type="text" name="keyword" id="keywordInput" value="${scri.keyword}" class="form-control"/>
							<span class="input-group-btn">
								<button id="search_Btn" type="button" class="btn btn-default">검색</button>
							</span>
						</div>
					</div>

				</div>

				<!-- 페이지 -->
				<div class="col-md-offset-3">
					<ul class="pagination">
						<c:if test="${sBlog1PageMaker.prev}">
							<li><a href="sBlog1List${sBlog1PageMaker.makeSearch(sBlog1PageMaker.startPage - 1)}">이전</a></li>
						</c:if>

						<c:forEach begin="${sBlog1PageMaker.startPage}" end="${sBlog1PageMaker.endPage}" var="idx">
							<li <c:out value="${sBlog1PageMaker.cri.page == idx ? 'class=info' : ''}" />>
							<a href="sBlog1List${sBlog1PageMaker.makeSearch(idx)}">${idx}</a></li>
						</c:forEach>

						<c:if test="${sBlog1PageMaker.next && sBlog1PageMaker.endPage > 0}">
							<li><a href="sBlog1List${sBlog1PageMaker.makeSearch(sBlog1PageMaker.endPage + 1)}">다음</a></li>
						</c:if>
					</ul>
				</div>
			</section>
		</div>
	</body>
</html>