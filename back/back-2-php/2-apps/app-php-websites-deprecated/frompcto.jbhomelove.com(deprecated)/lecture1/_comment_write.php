<?php
// 댓글 등록
$no = $_POST['no'];
require ('_conn.php');

// <!-- [Toggle] 줄바꿈은 항상 미적용, HTML 태그는 적용 ON/OFF 선택 Start -->
// $comment = $_POST['content']; $comment = str_replace("'", "''", $comment);
$comment = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');
// [참조] 게시글 자료 불러오기 문법 설명
//        1. nl2br : php 내 게시글에 자동 줄바꿈을 적용.
//        2. str_replace : 치환으로서, ''일때 '하나 정상뜨고, ' 한개일 때 에러 뜨는 문제 해결2. (태그를 켤 경우에는 htmlspecialchars를 안 쓰므로, 4번의 ENT_QUOTES 적용 대신이다.)
//        3. htmlspecialchars : php 내 게시글에 태그 적용 끄기. ('&'(앰퍼샌드)는 '&amp;'가 됩니다, '<'(미만)은 '&lt;'가 됩니다. '>'(이상)은 '&gt;'가 됩니다.)
//        4. ENT_QUOTES : ' " 모두 앞에 \ 붙임 (기본옵션).  ('"'(겹따옴표)는 ENT_NOQUOTES를 설정하지 않았을 때 '&quot;'가 됩니다. '''(홑따옴표)는 ENT_QUOTES가 설정되었을 때만 '&#039;'가 됩니다.)

// 전 페이지에서 가져온 것들로 변수를 설정
$id = $_POST['id'];
$nickname = $_POST['nickname'];

// 잘못 입력된 경우 걸러내기
if(!isset($_SESSION['id'])){  // ID가 없는 경우 걸러내기
  echo "<script>alert('로그인을 해주시기 바랍니다.');history.back();</script>";
} else {
    if(!$comment){   // 내용 미입력 걸러내기
      echo "<script>alert('내용을 작성해주세요.');history.back();</script>";
    } else { // 여기서부터 페이지 끝까지 담아버리기
      // DB 업로드
      $sql = "INSERT INTO `azuma_f_comment1` (`cno`, `no`, `cid`, `id`, `nickname`, `reg_date`, `mod_date`, `comment`, `del_flg`)
      VALUES (NULL, '$no', 'bbs1', '$id', '$nickname', current_timestamp(), NULL, '$comment', '0')";
      mysqli_query($conn, $sql);
      // 새로고침하면서 이전 페이지로 이동
      echo "<script>window.location.replace(\"{$_SERVER['HTTP_REFERER']}\");</script>";
    } // "필수항목 미입력 걸러내기" 닫기
} // "ID가 없는 경우 걸러내기" 닫기
?>
