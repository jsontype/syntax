<!DOCTYPE html>
<html lang="ko" class="no-js">
<head>
  <!-- Mobile Specific Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Favicon-->
  <link rel="shortcut icon" href="img/logo_only.png">
  <!-- Author Meta -->
  <meta name="author" content="colorlib">
  <!-- Meta Description -->
  <meta name="description" content="">
  <!-- Meta Keyword -->
  <meta name="keywords" content="">
  <!-- meta character set -->
  <meta charset="UTF-8">
  <!-- Site Title -->
  <title>대한치매예방협회-익산</title>

  <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
    <!--
    CSS
    ============================================= -->
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/nice-select.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <header id="header">
      <div class="header-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6 col-4 header-top-left">
              <a href="tel:+821064362733"><span class="lnr lnr-phone-handset"></span> <span class="text"><span class="text">063 858 2736</span></span></a>
              <a href="mailto:tosim36@hanmail.net"><span class="lnr lnr-envelope"></span> <span class="text"><span class="text">tosim36@hanmail.net</span></span></a>
            </div>
            <div class="col-lg-6 col-sm-6 col-8 header-top-right">
            <a href="index.php#booking" class="primary-btn text-uppercase">교육신청</a>
            </div>
          </div>
        </div>
    </div>
      <div class="container main-menu">
        <div class="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="index.php"><img src="img/logo.png" alt="" title="" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li><a href="index.php">교육신청</a></li>
              <li><a href="about.php">협회소개</a></li>
              <li><a href="blog1.php">공지사항</a></li>
              <li><a href="blog2.php">커뮤니티</a></li>
              <?php
if(!isset($_SESSION['id'])){ // 세션 없는 경우 ?>
  <li><a href="admin.php">로그인</a></li>
<?php } else { // 세션 있는 경우 ?>
  <li><a href="_logout.php">로그아웃</a></li>
<?php } ?>
            </ul>
          </nav><!-- #nav-menu-container -->
        </div>
      </div>
    </header><!-- #header -->
