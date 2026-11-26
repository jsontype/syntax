<?php
// 댓글 수정 준비 : 해당 댓글넘버(cno)값을 세션에 부여하기
$_SESSION['comment_mod_switch'] = $_GET['cno'];
echo "<script>history.go(-1);</script>";
?>
