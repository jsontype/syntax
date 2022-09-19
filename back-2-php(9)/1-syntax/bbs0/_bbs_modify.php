<?php
// DB 호출
$no = $_POST['no'];
require ('_conn.php');

// ID(=$mod['id'])를 꺼내기 위해 SQL문 소환
$id_get = "SELECT * FROM `azuma_php_bbs1` WHERE `no` = $no";
$result = mysqli_query($conn, $id_get);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);

  // 세션 아이디 존재 여부 검사
  if(isset($_SESSION['id'])){

    // 세션 아이디가 해당 글의 아이디와 동일한지 여부 검사
    if($_SESSION['id'] == $mod['id']){

    // 세션 아이디가 해당 글의 아이디와 동일한 경우 = 성공
          // 수정 실행
          // 수정 실행을 위한 변수 설정
          // <!-- [Toggle] 줄바꿈은 항상 적용, HTML 태그는 적용 ON/OFF 선택 Start -->
          // $title = nl2br($_POST['title']); $content = nl2br($_POST['content']); $title = str_replace("'", "''", $title); $content = str_replace("'", "''", $content);
          $title = nl2br(htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8')); $content = nl2br(htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8'));
          // [참조] 게시글 자료 불러오기 문법 설명
          //        1. nl2br : php 내 게시글에 자동 줄바꿈을 적용. 2. str_replace : 치환으로서, ''일때 '하나 정상뜨고, ' 한개일 때 에러 뜨는 문제 해결2.
          //        3. htmlspecialchars : php 내 게시글에 태그 적용 끄기. 4. ENT_QUOTES : ' " 모두 앞에 \ 붙임 (기본옵션).
          // 수정이니까 (등록할 때랑 정보가 바뀌지 않으니까) 필요없는 것 : 게시물 id, 작성자 id, 작성자 nickname, 등록날짜
          // 수정이니까 (등록할 때랑 정보가 바뀌니까) 꼭 필요한 것 : 수정날짜
          // 글쓰기 선택사항의 변수처리 : 있을 경우는 태그를 삭제해야 한다. 없을 경우에도 ''; 라고 지정을 해둬야 NULL 에러가 안 뜬다.
          if(isset($_POST['category'])){
            $category = htmlspecialchars($_POST['category'], ENT_QUOTES, 'UTF-8');
          } else $category = '';
          if(isset($_POST['link'])){
            $link = htmlspecialchars($_POST['link'], ENT_QUOTES, 'UTF-8');
          } else $category = '';
          // 이미지는 파일의 형태이므로 태그적용에 대한 걱정은 없다. (<> 등 입력 안됨)
          $img1 = $_FILES['img1'];
          $imgsize1 = $_FILES['img1']['size'];

          // <!-- 잘못 입력된 경우 걸러내기 -->
          if(!$title||!$content){   // 필수항목 미입력 걸러내기
            echo "<script>alert('필수항목을 모두 작성해주세요.');history.back();</script>";
          } else { // 여기서부터 등록 끝까지 담아버리기

            // 등록처리
            require ('_conn.php');
            $sql = "INSERT INTO `azuma_php_bbs1` (`no`, `bbsid`, `id`, `nickname`, `pw`, `title`, `regdate`, `moddate`, `ip`, `category`, `content`, `link`, `view`, `delflag`, `imgfile1`, `imgsize1`) VALUES (NULL, '$bbsid', '$id', '$nickname', NULL, '$title', current_timestamp(), NULL, NULL, '$category', '$content', '$link', 0, 0, NULL, NULL)";
            mysqli_query($conn, $sql);
            echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>"; // 일반적인 내림차순의 경우 최신글이 제일 위에 올라오므로 그냥 bbs.php로 바로 가면 된다.

          // ★ 수정 성공 후 뒤로 두번 돌아가기
          echo "<script>alert('수정완료했습니다. 확인을 클릭해주세요.');</script>";
          $_SESSION['modback'] = '1';
          echo "<script>history.go(-1);</script>";

          // "필수항목 미입력 걸러내기" 닫기
          }

      // 세션일치 성공한 경우 닫기
      }

      // 세션 아이디와 해당글 작성자 아이디가 다른 경우 = XSS 해킹이나 주소창 접근 등 비정상 경로
      else {
        echo "<script>alert('권한이 없습니다.');</script>";
        echo "<meta http-equiv='refresh' content='0.1; url=bbs.php'>";
      }

  // 세션 자체가 없는 경우 = 세션 제거 당한 사람이거나 위와 동일하게 비정상 경로
  } else {
  echo "<script>alert('다시 로그인을 해주시기 바랍니다.');</script>";
  echo "<meta http-equiv='refresh' content='0.1; url=../login1/login.php'>";
  }
?>
