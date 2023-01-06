<?php // [2] 댓글 삭제
// DB 호출
$cno = $_GET['cno'];
require('_conn.php');

// ID(=$del['id'])를 꺼내기 위해 SQL문 소환
$id_get = "SELECT * FROM `azuma_php_comment1` WHERE `cno` = $cno";
$result = mysqli_query($conn, $id_get);
// ★ 호출 결과값 한줄씩 빼기
$del = mysqli_fetch_assoc($result);

// <!-- 잘못된 경우 걸러내기 -->
// 세션 아이디 존재 여부 검사
if(isset($_SESSION['id'])){

  // 세션 아이디가 해당 글의 아이디와 동일한지 여부 검사
  if($_SESSION['id'] == $del['id']){

      // 세션 아이디가 해당 글의 아이디와 동일한 경우 = 성공
      // 삭제 실행
      $sql = "UPDATE `azuma_php_comment1` SET `delflag` = '1' WHERE `azuma_php_comment1`.`cno` = $cno";
      mysqli_query($conn, $sql);
      // 새로고침 + 뒤로이동
      echo "<script>alert('댓글 삭제되었습니다.');</script>";
      echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";

  // 세션일치 성공한 경우 닫기
  }

  // 세션 아이디와 해당글 작성자 아이디가 다른 경우 = 해킹
  else {
    echo "<script>alert('권한이 없습니다.');</script>";
    echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";
  }

  // 세션 자체가 없는 경우 = 세션 제거 당한 사람
} else {
  echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
  echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";
}


















?>
