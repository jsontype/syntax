<?php

  session_unset();

  session_destroy();

  session_start();

  echo "<script>alert('로그아웃 되었습니다.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=../intro1/intro.php'>";
?>
