<?php
// DB 호출
$no = $_GET['no'];
$pw = $_POST['pw'];
require ('_conn.php');
// <!-- 잘못 입력된 경우 걸러내기 -->
$sql_pwc = "SELECT * FROM `azuma_jb_blog3` WHERE no = $no and pw = $pw";
$pwc = mysqli_query($conn, $sql_pwc)->num_rows;

  // <!-- 잘못된 경우 걸러내기 -->
  if ($pwc < 1) {
      echo "<script>alert('등록시의 비밀번호를 올바르게 입력하세요.');history.back();</script>";
    } else {

        // 삭제 실행
        $sql = "UPDATE `azuma_jb_blog3` SET `delflag` = 1 WHERE `azuma_jb_blog3`.`no` = $no";
        mysqli_query($conn, $sql);

        // ★ 삭제 성공 후 뒤로 두번 돌아가기
        echo "<script>alert('게시물이 삭제되었습니다.');</script>";
        $_SESSION['delback'] = '1';
        echo "<script>history.go(-1);</script>";

  // 잘못된 경우 걸러내기 닫기
  }

?>
