<?php
// DB 호출
$no = $_GET['no'];
require ('_conn.php');

  // <!-- 잘못된 경우 걸러내기 -->
  // 세션 아이디 존재 여부 검사
  if(isset($_SESSION['id'])){

    // 세션 아이디가 해당 글의 아이디와 동일한 경우 = 성공
        // 삭제 실행
        $sql = "UPDATE `azuma_jb_blog1` SET `delflag` = 1 WHERE `azuma_jb_blog1`.`no` = $no";
        mysqli_query($conn, $sql);

        // ★ 삭제 성공 후 뒤로 두번 돌아가기
        echo "<script>alert('게시물이 삭제되었습니다.');</script>";
        $_SESSION['delback'] = '1';
        echo "<script>history.go(-1);</script>";

      // 세션일치 성공한 경우 닫기
    } else {
      // 세션 자체가 없는 경우 = 세션 제거 당한 사람
      echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
      echo "<meta http-equiv='refresh' content='0.1; url=admin.php'>";
    }

?>
