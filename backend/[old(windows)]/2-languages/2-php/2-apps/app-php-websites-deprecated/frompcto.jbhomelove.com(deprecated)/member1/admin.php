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

  <!-- DB 호출 (위치 변경 안됨) -->
  <?php
  $sql = "SELECT * FROM `azuma_f_user1` WHERE id = '$id'";
  $result = mysqli_query($conn, $sql);
  // 게시물 데이터 호출 : 댓글 comment.php 호출 앞까지 묶기
  foreach($result as $v){
  ?>

  <!-- 큰 제목 -->
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h2 style="">회원정보수정</h2>
    </div>
  </div>

  <!-- 수정 OK 항목 -->
  <div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-login">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12">
							<a href="login.php">회원정보수정</a>
						</div>
					</div>
					<hr>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-lg-12">
							<form action="_admin.php" method="post" style="display: block;">

								<div class="form-group">
									<input type="text" name="id" class="form-control" value="<?=$v['id']?>" readonly>
								</div>
                <div class="form-group">
									<input type="password" name="oldpasswordchk" class="form-control" placeholder="(필수) 기존 Password를 입력해주세요." minlength="1" maxlength="20">
								</div>
								<div class="form-group">
									<input type="password" name="password" class="form-control" placeholder="(선택) 변경할 Password를 입력해주세요." minlength="4" maxlength="20">
								</div>
								<div class="form-group">
									<input type="password" name="passwordchk" class="form-control" placeholder="(선택) 변경할 Password를 다시 한번 입력해주세요." minlength="4" maxlength="20">
								</div>
                <div class="form-group">
                  <input type="text" name="realname" class="form-control" value="<?=$v['realname']?>" placeholder="성함을 입력해주세요." maxlength="10">
                </div>
								<div class="form-group">
									<input type="text" name="nickname" class="form-control" value="<?=$v['nickname']?>" placeholder="닉네임을 입력해주세요." maxlength="15">
								</div>
                <div class="form-group">
                <?php if($v['gender'] == 'male'){ // 남자인 경우 ?>
                  성별 :
                  <input type="radio" name="gender" value="male" checked/> 남자&nbsp;
                  <input type="radio" name="gender" value="female" /> 여자<br>
                <?php } else { // 여자인 경우 ?>
                  <input type="radio" name="gender" value="male"/> 남자&nbsp;
                  <input type="radio" name="gender" value="female" checked/> 여자<br>
                <?php } ?>
                </div>
								<div class="form-group">
									<input type="int" name="birth" class="form-control" value="<?=$v['birth']?>" placeholder="생년월일을 입력해주세요. (예:19990919)" maxlength="8" max="99999999">
								</div>
								<div class="form-group">
									<input type="email" name="email" class="form-control" value="<?=$v['email']?>" placeholder="이메일 주소를 입력해주세요." maxlength="30">
								</div>
								<div class="form-group">
									<input type="int" name="tel" class="form-control" value="<?=$v['tel']?>" placeholder="자택전화번호를 입력해주세요. (숫자로만)" maxlength="11" max="99999999999">
								</div>
								<div class="form-group">
									<input type="int" name="phone" class="form-control" value="<?=$v['phone']?>" placeholder="휴대전화 번호를 입력해주세요. (숫자로만)" maxlength="11" max="9999999999">
								</div>
								<div class="form-group">
									<textarea name="address" class="form-control" placeholder="주소를 입력해주세요." maxlength="100"><?=$v['address']?></textarea>
								</div>

                <?php
                // 해당페이지의 id가 로그인세션 id와 동일 계정일 경우 수정/삭제가 뜨도록 함
                if(isset($_SESSION['id'])){
                  if($v['id'] == $_SESSION['id']){ ?>

                    <div class="form-group">
                      <div class="col-sm-6 col-sm-offset-3">
                        <button type="submit" class="form-control btn btn-login">수정</button>
                      </div>
                    </div>

                <?php
                  } else { echo "<br>"; }
                  } else { echo "<br>"; }
                ?>
							</form>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 회원정보 컬럼 출력 End -->



<!-- $v를 모두 호출 했으므로 foreach문 닫기 -->
<?php } ?>

<!-- Bottom -->
<?php require('../lib/bottom.php'); ?>

<?php } // "로그인 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>
