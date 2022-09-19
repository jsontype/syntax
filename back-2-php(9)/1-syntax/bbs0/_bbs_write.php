<?php
// <!-- 변수설정 -->
// title, content는 태그적용/미적용을 선택할 수 있게 한다. 줄바꿈은 항상 적용한다.
// <!-- [Toggle] 줄바꿈은 항상 적용, HTML 태그는 적용 ON/OFF 선택 Start -->
// $title = nl2br($_POST['title']); $content = nl2br($_POST['content']); $title = str_replace("'", "''", $title); $content = str_replace("'", "''", $content);
$title = nl2br(htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8')); $content = nl2br(htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8'));
// [참조] 게시글 자료 불러오기 문법 설명
//        1. nl2br : php 내 게시글에 자동 줄바꿈을 적용.
//        2. str_replace : 치환으로서, ''일때 '하나 정상뜨고, ' 한개일 때 에러 뜨는 문제 해결2. (태그를 켤 경우에는 htmlspecialchars를 안 쓰므로, 4번의 ENT_QUOTES 적용 대신이다.)
//        3. htmlspecialchars : php 내 게시글에 태그 적용 끄기. ('&'(앰퍼샌드)는 '&amp;'가 됩니다, '<'(미만)은 '&lt;'가 됩니다. '>'(이상)은 '&gt;'가 됩니다.)
//        4. ENT_QUOTES : ' " 모두 앞에 \ 붙임 (기본옵션).  ('"'(겹따옴표)는 ENT_NOQUOTES를 설정하지 않았을 때 '&quot;'가 됩니다. '''(홑따옴표)는 ENT_QUOTES가 설정되었을 때만 '&#039;'가 됩니다.)
// blogid는 수동 지정했으므로 태그적용에 대한 걱정은 없다.
$bbsid = $_POST['bbsid'];
// id는 세션에서 받기전 JS로 태그를 통제했으므로 태그적용에 대한 걱정은 없다.
$id = $_POST['id'];
// 회원정보 중 태그가 가능한 text타입인 nickname(현 세션에서 씀), username(현 세션에서 쓰지 않음), addr(아예 세션이 없음) 변수는 여기서 태그를 삭제하는 게 아니라, bbs_view에서 출력할 때 태그를 삭제해야 한다.
$nickname = $_POST['nickname'];
// $username = $_POST['username'];
// $addr = $_POST['addr'];
// 글쓰기 선택사항의 변수처리 : 있을 경우는 태그를 삭제해야 한다. 없을 경우에도 ''; 라고 지정을 해둬야 NULL 에러가 안 뜬다.
if(isset($_POST['category'])){
  $category = htmlspecialchars($_POST['category'], ENT_QUOTES, 'UTF-8');
} else $category = '';
if(isset($_POST['link'])){
  $link = htmlspecialchars($_POST['link'], ENT_QUOTES, 'UTF-8');
} else $link = '';
// 이미지는 파일의 형태이므로 태그적용에 대한 걱정은 없다.
$img1 = $_FILES['img1'];
$imgsize1 = $_FILES['img1']['size'];

// <!-- 잘못 입력된 경우 걸러내기 -->
if(!$title||!$content){   // 필수항목 미입력 걸러내기
  echo "<script>alert('필수항목을 모두 작성해주세요.');history.back();</script>";
} else { // 여기서부터 페이지 끝까지 담아버리기

// <!-- 잘 입력 됐을 시 -->
// 등록처리
require ('_conn.php');
$sql = "INSERT INTO `azuma_php_bbs1` (`no`, `bbsid`, `id`, `nickname`, `pw`, `title`, `regdate`, `moddate`, `ip`, `category`, `content`, `link`, `view`, `delflag`, `imgfile1`, `imgsize1`) VALUES (NULL, '$bbsid', '$id', '$nickname', NULL, '$title', current_timestamp(), NULL, NULL, '$category', '$content', '$link', 0, 0, NULL, NULL)";
mysqli_query($conn, $sql);
echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.
// "필수항목 미입력 걸러내기" 닫기
}
?>
