<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 모바일 버전 뷰포트 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewpoint" content="width=device-width", initial-scale="1">
    <title>프롬PC투</title>
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/frompcto.css">
  </head>
  <body>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="../intro1/intro.php">프롬PC투</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="../intro1/intro.php">소개<span class="sr-only"></span></a></li>
            <li><a href="../intro1/teacher.php">강사진<span class="sr-only"></span></a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
              aria-haspopup="true" aria-expanded="false">강의<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="../lecture1/bbs.php">[무료] 3시간 왕초보 영문법</a></li>
                <li><a href="../lecture2/bbs.php">[무료] PHP/MySQL 홈페이지</a></li>
                <li><a href="../lecture3/bbs.php">[무료] Spring/Oracle 홈페이지</a></li>
              </ul>
            </li>
            <li><a href="../intro1/contact.php">문의<span class="sr-only"></span></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <?php
              if(isset($_SESSION['nickname'])){
              ?>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
              aria-haspopup="true" aria-expanded="false">
              <?=$_SESSION['nickname']?>님
              <span class="caret"></span></a>
              <?php
              } else {
              ?>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
              aria-haspopup="true" aria-expanded="false">로그인<span class="caret"></span></a>
              <?php
              }
              ?>

              <ul class="dropdown-menu">
                <?php
                if(isset($_SESSION['nickname'])){
                ?>
                <li><a href="../member1/apply.php?id=<?=$_SESSION['id']?>">수강현황</a></li>
                <li><a href="../member1/admin.php?id=<?=$_SESSION['id']?>">회원정보</a></li>
                <li><a href="../member1/_logout.php">로그아웃</a></li>
                <?php
                } else {
                ?>
                <li><a href="../member1/login.php">로그인</a></li>
                <li><a href="../member1/register.php">회원가입</a></li>
                <?php
                }
                ?>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
