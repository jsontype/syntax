<?php
  // 수강신청시
  $id = $_SESSION['id'];

  require('_conn.php');

  $sql = "UPDATE `azuma_f_user1` SET `bill3` = '1' WHERE `azuma_f_user1`.`id`='$id'";

  mysqli_query($conn, $sql);
  echo "<script>alert('수강신청이 완료되었습니다.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=bbs.php'>";

  // 현 세션 수정
  $_SESSION['bill3'] = '1';

?>
