<?php// session_start();
     // * login1/_login.php 참조 ?>

<!DOCTYPE html>
<html lang="kr">
  <head>
    <!-- 헤드 -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Azuma PHP</title>
  <head>

  <body>
    <!-- 네비게이션 바 -->
    <?php
    if(isset($_SESSION['nickname'])){
      // 로그인 한 경우
      echo $_SESSION['nickname']."님 환영합니다. ";
      echo "<a href='../login1/_logout.php'>Logout1</a><br>";
      // 로그인 안한 경우
      } else {
      echo "<a href='../login1/login.php'>Login1</a><br>";
      }
      // 공통부분
      echo "<a href='../index.php'>Home</a> ";
      echo "<a href='../bbs0/bbs.php'>BBS0</a> ";
      echo "<a href='../bbs1/bbs.php'>BBS1</a> ";
      echo "<a href='../bbs2/bbs.php'>BBS2</a> ";
      echo "<a href='../blog1/blog.php'>BLOG1</a> ";
      echo "<a href='../blog2/blog.php'>BLOG2</a> ";
    ?>
    <hr>
