<?php
// <!-- [Toggle] 줄바꿈은 항상 적용, HTML 태그는 적용 ON/OFF 선택 Start -->
// $title = nl2br($_POST['title']); $content = nl2br($_POST['content']); $title = str_replace("'", "''", $title); $content = str_replace("'", "''", $content);
$title = nl2br(htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8')); $content = nl2br(htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8'));
// [참조] 게시글 자료 불러오기 문법 설명
//        1. nl2br : php 내 게시글에 자동 줄바꿈을 적용.
//        2. str_replace : 치환으로서, ''일때 '하나 정상뜨고, ' 한개일 때 에러 뜨는 문제 해결2. (태그를 켤 경우에는 htmlspecialchars를 안 쓰므로, 4번의 ENT_QUOTES 적용 대신이다.)
//        3. htmlspecialchars : php 내 게시글에 태그 적용 끄기. ('&'(앰퍼샌드)는 '&amp;'가 됩니다, '<'(미만)은 '&lt;'가 됩니다. '>'(이상)은 '&gt;'가 됩니다.)
//        4. ENT_QUOTES : ' " 모두 앞에 \ 붙임 (기본옵션).  ('"'(겹따옴표)는 ENT_NOQUOTES를 설정하지 않았을 때 '&quot;'가 됩니다. '''(홑따옴표)는 ENT_QUOTES가 설정되었을 때만 '&#039;'가 됩니다.)
$nickname = $_POST['nickname'];
$img1 = $_FILES['img1'];
$img_size1 = $_FILES['img1']['size'];
$blackbox1 = $_POST['blackbox1'];
$tag1 = htmlspecialchars($_POST['tag1'], ENT_QUOTES, 'UTF-8');

// 잘못 입력된 경우 걸러내기
if(!$title||!$content){   // 필수항목 미입력 걸러내기
  echo "<script>alert('필수항목을 모두 작성해주세요.');history.back();</script>";
} else { // 여기서부터 페이지 끝까지 담아버리기

// <!-- 잘 입력 됐을 시 -->
// 파일 등록의 성공여부 공지 및 성공시에만 파일을 DB에 넣도록 하는 장치
if(isset($img1)) {
    // 항상 img1은 있음
    // 디렉토리
    $dir = "bbs_images/";
    // 파일명, 임시파일명
    $file_name1 = basename($img1['name']);
    $tmp_name1 = $img1['tmp_name'];
    // 파일중복방지 위해 파일명변경
    $addName = strtotime(date("Y-m-d H:i:s")); // 현재날짜 시간초 구하는 변수
    $milliseconds = round(microtime(true) * 1000); // 현재날짜를 밀리초로 바꾸는 변수 (더 확실히 중복방지할때 추가1)
    $addName .= $milliseconds; // 파일이름에 밀리초 추가하는 변수 (더 확실히 중복방지할때 추가2)
    $file_name1 = $addName . "_" . $file_name1; // 변수들을 이용하여 실제 파일명변경 실행

    // 파일등록처리
    if(move_uploaded_file($tmp_name1, $dir.$file_name1)){
        // DB에 중복방지 처리된 파일등록
        require ('_conn.php');
        $sql = "INSERT INTO `azuma_f_bbs2` (`no`, `title`, `content`, `nickname`, `reg_date`, `mod_date`, `blackbox1`, `tag1`, `view`, `del_flg`, `img_file1`, `img_size1`)
        VALUES (NULL, '$title', '$content', '$nickname', current_timestamp(), NULL, '$blackbox1', '$tag1', '0', '0', '$file_name1', '$img_size1')";
        mysqli_query($conn, $sql);
        echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.
        } else {
        // 파일입력 실패시
        require ('_conn.php');
        $sql = "INSERT INTO `azuma_f_bbs2` (`no`, `title`, `content`, `nickname`, `reg_date`, `mod_date`, `blackbox1`, `tag1`, `view`, `del_flg`, `img_file1`, `img_size1`)
        VALUES (NULL, '$title', '$content', '$nickname', current_timestamp(), NULL, '$blackbox1', '$tag1', '0', '0', NULL, NULL)";
        mysqli_query($conn, $sql);
        echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.
        }

  // 파일입력 안했을 시
  } else {
    require ('_conn.php');
    $sql = "INSERT INTO `azuma_f_bbs2` (`no`, `title`, `content`, `nickname`, `reg_date`, `mod_date`, `blackbox1`, `tag1`, `view`, `del_flg`, `img_file1`, `img_size1`) VALUES (NULL, '$title', '$content', '$nickname', current_timestamp(), NULL, '$blackbox1', '$tag1', '0', '0', NULL, NULL)";
    mysqli_query($conn, $sql);
    echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.
  }

  // "필수항목 미입력 걸러내기" 닫기
  }
?>
