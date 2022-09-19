<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:set var="pageName" value="게시물 수정" />
<%@ include file="../part/head.jspf"%>

<script>
	function submitModifyForm(form) {
		form.title.value = form.title.value.trim();
		if (form.title.value.length == 0) {
			alert('제목을 입력해주세요.');
			form.title.focus();
			return false;
		}
		form.body.value = form.body.value.trim();
		if (form.body.value.length == 0) {
			alert('내용을 입력해주세요.');
			form.body.focus();
			return false;
		}
		form.submit();
	}
</script>

<form class="con common-form" action="./doModify" method="POST"
	onsubmit="submitModifyForm(this); return false;">
	<input type="hidden" name="id" value="${article.id}">
	<div>
		<span> 제목 </span>
		<div>
			<input name="title" type="text" placeholder="제목"
				autofocus="autofocus" value="${article.title}">
		</div>
	</div>

	<div>
		<span> 내용 </span>
		<div>
			<textarea name="body" placeholder="내용">${article.body}</textarea>
		</div>
	</div>

	<div>
		<span> 수정 </span>
		<div>
			<input type="submit" value="수정"> <input type="reset"
				value="취소" onclick="history.back();">
		</div>
	</div>
</form>

<div class="btns con">
	<a href="./list">게시물 리스트</a> <a href="./add">게시물 추가</a> <a
		onclick="if ( confirm('삭제하시겠습니까?') == false ) return false;"
		href="./doDelete?id=${article.id}">게시물 삭제</a>
</div>

<%@ include file="../part/foot.jspf"%>