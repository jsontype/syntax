<?php
// DB 호출
$no = $_GET['no'];
require ('_conn.php');
$sql = "UPDATE `azuma_jb_bbs1` SET `delflag` = 1 WHERE `azuma_jb_bbs1`.`no` = $no";
mysqli_query($conn, $sql);
// ★ 삭제 성공 후 뒤로 돌아가기 : 블로그는 게시판과 다르게 한번만 뒤로 돌아가면 됨
echo "<script>alert('편지가 삭제되었습니다.');</script>";
echo "<script>history.go(-1);</script>";
?>
