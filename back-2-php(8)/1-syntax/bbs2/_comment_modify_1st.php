<?php // [2] 댓글 수정 준비 : 세션 부여
// 해당 댓글넘버(cno)값을 세션에 넣어 수정 세션 켜기
$_SESSION['comment_mod_switch'] = $_GET['cno'];
echo "<script>history.go(-1);</script>";
?>
