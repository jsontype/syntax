<?php
// 댓글 수정 실행
require ('_conn.php');

// <!-- 변수설정 -->
$cno = $_POST['cno'];
$nickname = $_POST['nickname'];
// comment는 태그적용/미적용을 선택할 수 있게 한다. 줄바꿈은 항상 미적용한다.
// <!-- [Toggle] 줄바꿈은 항상 미적용, HTML 태그는 적용 ON/OFF 선택 Start -->
// $comment = $_POST['content']; $comment = str_replace("'", "''", $comment);
$comment = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');
// [참조] 게시글 자료 불러오기 문법 설명
//        1. nl2br : php 내 게시글에 자동 줄바꿈을 적용.
//        2. str_replace : 치환으로서, ''일때 '하나 정상뜨고, ' 한개일 때 에러 뜨는 문제 해결2. (태그를 켤 경우에는 htmlspecialchars를 안 쓰므로, 4번의 ENT_QUOTES 적용 대신이다.)
//        3. htmlspecialchars : php 내 게시글에 태그 적용 끄기. ('&'(앰퍼샌드)는 '&amp;'가 됩니다, '<'(미만)은 '&lt;'가 됩니다. '>'(이상)은 '&gt;'가 됩니다.)
//        4. ENT_QUOTES : ' " 모두 앞에 \ 붙임 (기본옵션).  ('"'(겹따옴표)는 ENT_NOQUOTES를 설정하지 않았을 때 '&quot;'가 됩니다. '''(홑따옴표)는 ENT_QUOTES가 설정되었을 때만 '&#039;'가 됩니다.)

// 전 페이지에서 가져온 것들로 변수를 설정
// ID(=$mod['id'])를 꺼내기 위해 SQL문 소환
$id_get = "SELECT * FROM `azuma_f_comment1` WHERE `cno` = $cno";
$result = mysqli_query($conn, $id_get);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);

// <!-- 잘못된 경우 걸러내기 -->
// 세션 아이디 존재 여부 검사
if(isset($_SESSION['id'])){

  // 세션 아이디가 해당 글의 아이디와 동일한지 여부 검사
  if($_SESSION['id'] == $mod['id']){ // 세션 아이디가 해당 글의 아이디와 동일한 경우 = 성공

      // 수정 실행
      $sql = "UPDATE `azuma_f_comment1` SET `nickname`='$nickname', `comment`='$comment', `mod_date`=CURRENT_TIMESTAMP() WHERE `cno`='$cno'";
      mysqli_query($conn, $sql);

      // 새로고침 + 뒤로이동
      echo "<script>alert('수정완료했습니다. 확인을 클릭해주세요.');</script>";

      // 수정 세션 끄고 뒤로 보내기
      unset($_SESSION['comment_mod_switch']);
      echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";

  // 세션일치 성공한 경우 닫기
  }

  // 세션 아이디와 해당글 작성자 아이디가 다른 경우 = 해킹
  else {
    echo "<script>alert('권한이 없습니다.');</script>";
    unset($_SESSION['comment_mod_switch']);
    echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";
  }

// 세션 있는 경우 닫기
}

  // 세션 자체가 없는 경우 = 세션 제거 당한 사람
  else {
  echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
  unset($_SESSION['comment_mod_switch']);
  echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";
}

?>
