<?php// session_start();
     // * login1/_login.php 참조 ?>

<!-- 프론트엔드 용어 : 네비바, 점보트론, 컨텐츠, 푸터 -->
<!-- html : 기본구조 생성, head와 body로 구분, 메타태그, 필요한 플러그인(부트스트랩, CSS, J쿼리 등) 인클루딩 등 설정 부분이 head, 네비바~푸터 사이 눈에 보이는 부분이 body -->
<!-- <meta>태그는 HTML 문서가 어떤 내용을 담고 있고, 문서의 키워드는 무엇이며, 누가 만들었는지 등의 문서 자체의 특성을 담고 있습니다. -->

<!DOCTYPE html>
<html lang="kr">
  <head>
    <!-- 헤드 -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Azuma PHP</title>
  </head>

  <body>
    <!-- 네비게이션 바 -->
    <!-- PHP변수 : $_SESSION['세션명'] 로그인정보 (휘발성, 자동로그아웃), $_COOKIE 조회수 (로컬파일), $var 일반변수 / 수만명의 사용자 닉네임을 PG가 직접 글을 찾아 바꾸나?
        PG의 덕목 : 극단적 사고방식(변수, 리콰이어 모두 같은 선상. 중복제거=객체지향=극단적사고방식으로부터!)
        변수명 설정시 유의사항 : 타인이 보고 알 수 있게끔 친절한 변수설정이 중요. (나쁜 예 : $aaa / 좋은 예 : $ID) -->
    <?php
    // 조건문 if , else if , else
    // if(true){참의 경우 행동} else {거짓의 경우 행동}
    // if(false){거짓의 경우 행동} else {참의 경우 행동}
    // if($A){$A가 있을 경우 행동} else if($B){$B가 있을 경우 행동} else {그 외의 경우 행동}
    if(isset($_SESSION['nickname'])){
      // 로그인 한 경우
      // PHP코드는 ""없이 연결은 .으로, string는 ""으로 담음, int는 정수, string은 문자열
      echo $_SESSION['nickname']."님 환영합니다. ";
      echo "<a href='login1/_logout.php'>Logout1</a><br>";
      } else
      // 로그인 안한 경우
      {
      echo "<a href='login1/login.php'>Login1</a><br>";
      }
      // 공통부분
      echo "<a href='index.php'>Home</a> ";
      echo "<a href='bbs0/bbs.php'>BBS0</a> ";
      echo "<a href='bbs1/bbs.php'>BBS1</a> ";
      echo "<a href='bbs2/bbs.php'>BBS2</a> ";
      echo "<a href='blog1/blog.php'>BLOG1</a> ";
      echo "<a href='blog2/blog.php'>BLOG2</a> ";
    ?>
    <hr>
