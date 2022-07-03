<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<html>
<!--
c~forEach items="${sBBS1List}" var = "sBBS1List" 설명
	1. c~forEach : 받은 ${sBBS1List}값 만큼 반복해주는건데 자바에서의 for문과 비슷하다. var는 ${sBBS1List}를 list라는 이름으로 선언해준 것이다.
	1. $sBBS1List : BBS1Controller에서 이름을 sBBS1List로 정한 service.sBBS1List()를 가져온 것이다.
	1. c~out value=~$list.bno : 불러온 데이터를 뿌려주는 것이다. list에 있는 bno를 가져와라 라고 생각하면 된다.

// 검색
#search_Btn 버튼 기능 추가 : 검색버튼을 눌렀을때 page, perPageNum, searchType, keyword의 값들이 들어가게 스크립트를 추가했음.
-->

	<head>
		<!-- 부트스트랩 3 : CSS Framework -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- 부트스트랩 3 테마 -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<!-- Jquery : Javascript 라이브러리 -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	 	<title>게시판</title>
	</head>

	<script>
		// 검색
		$(function(){
			$('#search_Btn').click(function() {
				self.location = "sBBS1List" + '${sBBS1PageMaker.makeQuery(1)}' + "&searchType=" + $("select option:selected").val() + "&keyword=" + encodeURIComponent($('#keywordInput').val());
			});
		});
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
				<form role="form" method="get">
					<table class="table table-hover">
						<thead>
							<tr><th>번호</th><th>제목</th><th>작성자</th><th>등록일</th></tr>
						</thead>

						<c:forEach items="${sBBS1List}" var = "list">
							<tr>
								<td><c:out value="${list.bno}" /></td>
								<td>
									<a href="/azuma2/BBS1/sBBS1ReadView?bno=${list.bno}&page=${scri.page}&perPageNum=${scri.perPageNum}&searchType=${scri.searchType}&keyword=${scri.keyword}"><c:out value="${list.title}" /></a>
								</td>
								<td><c:out value="${list.writer}" /></td>
								<td><fmt:formatDate value="${list.regdate}" pattern="yyyy-MM-dd"/></td>
							</tr>
						</c:forEach>
					</table>

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

					<div class="col-md-offset-3">
						<ul class="pagination">
							<c:if test="${sBBS1PageMaker.prev}">
								<li><a href="sBBS1List${sBBS1PageMaker.makeSearch(sBBS1PageMaker.startPage - 1)}">이전</a></li>
							</c:if>

							<c:forEach begin="${sBBS1PageMaker.startPage}" end="${sBBS1PageMaker.endPage}" var="idx">
								<li <c:out value="${sBBS1PageMaker.cri.page == idx ? 'class=info' : ''}" />>
								<a href="sBBS1List${sBBS1PageMaker.makeSearch(idx)}">${idx}</a></li>
							</c:forEach>

							<c:if test="${sBBS1PageMaker.next && sBBS1PageMaker.endPage > 0}">
								<li><a href="sBBS1List${sBBS1PageMaker.makeSearch(sBBS1PageMaker.endPage + 1)}">다음</a></li>
							</c:if>
						</ul>
					</div>
				</form>
			</section>
		</div>
	</body>
</html>





