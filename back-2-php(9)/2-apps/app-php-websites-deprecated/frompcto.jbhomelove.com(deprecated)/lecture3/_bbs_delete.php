<?php
$no = $_GET['no'];
require ('_conn.php');

if(isset($_SESSION['id'])){
  if($_SESSION['id'] == 'admin'){
      $sql = "UPDATE `azuma_f_bbs3` SET `del_flg` = 1 WHERE `azuma_f_bbs3`.`no` = $no";
      mysqli_query($conn, $sql);
      echo "<script>alert('게시물이 삭제되었습니다.');</script>";
      // 삭제 성공 후 뒤로 두번 돌아가기 세션
      $_SESSION['delback'] = '1';
      echo "<script>history.go(-1);</script>";
  // 세션일치 성공한 경우 닫기
  }

  // 관리자 세션이 아닌 경우
  else {
    echo "<script>alert('권한이 없습니다.');</script>";
    echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>";
  }

// 세션 아이디 존재하는 경우 닫기
}

// 세션 자체가 없는 경우
else {
  echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
  echo "<meta http-equiv='refresh' content='0.1; url=../login1/login.php'>";
}

?>
