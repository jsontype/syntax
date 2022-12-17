<?php // [2] 댓글 수정 취소 : 세션 취소하고 새로고침
unset($_SESSION['comment_mod_switch']);
echo "<script>history.go(-1);</script>";
?>
