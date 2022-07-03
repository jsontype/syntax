<?php
// 로그인 안 했을 경우
if(!isset($_SESSION['id'])){
  echo "<script>alert('로그인 후 접근해주시기 바랍니다.');</script>";
  echo "<script>history.go(-1);</script>";
} else { // 로그인 했을 경우에 해당하는 페이지 전체 묶어버리기
?>
<?php
$id = $_SESSION['id'];
require('_conn.php');
?>

<!-- Top -->
<?php require('../lib/top.php'); ?>

<!-- 로그인 폼 스타일 -->
<style type="text/css">
body {
}
.panel-login {
  border-color: #ccc;
}
.panel-login>.panel-heading {
  color: #00415d;
  background-color: #fff;
  border-color: #fff;
  text-align:center;
}
.panel-login>.panel-heading a{
  text-decoration: none;
  color: #666;
  font-weight: bold;
  font-size: 15px;
}
.panel-login>.panel-heading a.active{
  color: #029f5b;
  font-size: 18px;
}
.panel-login>.panel-heading hr{
  margin-top: 10px;
  margin-bottom: 0px;
  clear: both;
  border: 0;
  height: 1px;
}
.panel-login input:hover,
.panel-login input:focus {
  outline:none;
  border-color: #ccc;
}
.btn-login {
  background-color: #59B2E0;
  outline: none;
  color: #fff;
  font-size: 14px;
  height: auto;
  font-weight: normal;
  padding: 14px 0;
  text-transform: uppercase;
  border-color: #59B2E6;
}
.btn-login:hover,
.btn-login:focus {
  color: #fff;
  background-color: #53A3CD;
  border-color: #53A3CD;
}
.forgot-password {
  text-decoration: underline;
  color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
  text-decoration: underline;
  color: #666;
}

.btn-register {
  background-color: #1CB94E;
  outline: none;
  color: #fff;
  font-size: 14px;
  height: auto;
  font-weight: normal;
  padding: 14px 0;
  text-transform: uppercase;
  border-color: #1CB94A;
}
.btn-register:hover,
.btn-register:focus {
  color: #fff;
  background-color: #1CA347;
  border-color: #1CA347;
}
</style>

<!-- 회원정보 컬럼 출력 Start -->
<div class="container">

  <!-- 큰 제목 -->
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h2>수강신청현황</h2>
    </div>
  </div>

  <!-- 수정 불가 항목 -->
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <ul class="list-group">
        <?php if($_SESSION['bill1'] == '1'){ ?> <a href='../lecture1/bbs.php' class='list-group-item'> 3시간 왕초보 영문법</a> <?php } else {} ?>
        <?php if($_SESSION['bill2'] == '1'){ ?> <a href='../lecture2/bbs.php' class='list-group-item'> PHP/MySQL 홈페이지</a> <?php } else {} ?>
        <?php if($_SESSION['bill3'] == '1'){ ?> <a href='../lecture3/bbs.php' class='list-group-item'> Java/Oracle 홈페이지</a> <?php } else {} ?>
        <?php if($_SESSION['bill4'] == '1'){ ?> <a href='../lecture4/bbs.php' class='list-group-item'> 4번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill5'] == '1'){ ?> <a href='../lecture5/bbs.php' class='list-group-item'> 5번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill6'] == '1'){ ?> <a href='../lecture6/bbs.php' class='list-group-item'> 6번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill7'] == '1'){ ?> <a href='../lecture7/bbs.php' class='list-group-item'> 7번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill8'] == '1'){ ?> <a href='../lecture8/bbs.php' class='list-group-item'> 8번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill9'] == '1'){ ?> <a href='../lecture9/bbs.php' class='list-group-item'> 9번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill10'] == '1'){ ?> <a href='../lecture10/bbs.php' class='list-group-item'> 10번째 강의. 업데이트 예정</a> <?php } else {} ?>
        <?php if($_SESSION['bill1'] == '0' and $_SESSION['bill2'] == '0' and $_SESSION['bill3'] == '0' and $_SESSION['bill4'] == '0' and $_SESSION['bill5'] == '0' and $_SESSION['bill6'] == '0' and $_SESSION['bill7'] == '0' and $_SESSION['bill8'] == '0' and $_SESSION['bill9'] == '0' and $_SESSION['bill10'] == '0'){ ?>
          <a href='#' class='list-group-item'> 아직 신청한 강의가 없습니다.</a>
        <?php } else {} ?>
        <br><br><br><br><br><br><br><br><br>
      </ul>
    </div>
  </div>

</div>
<!-- 회원정보 컬럼 출력 End -->

<!-- Bottom -->
<?php require('../lib/bottom.php'); ?>

<?php } // "로그인 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>
