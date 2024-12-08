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

	<div class="container">
    <div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="login.php">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="register.php" class="active">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form action="_register.php" method="post" style="display: block;">

									<div class="form-group">
										<input type="text" name="id" class="form-control" placeholder="새 ID를 입력해주세요." minlength="2" maxlength="15" style="ime-mode:disabled;">
									</div>
									<div class="form-group">
										<input type="password" name="password" class="form-control" placeholder="Password를 입력해주세요." minlength="4" maxlength="20">
									</div>
									<div class="form-group">
										<input type="password" name="passwordchk" class="form-control" placeholder="Password를 다시 한번 입력해주세요." minlength="4" maxlength="20">
									</div>
									<div class="form-group">
										<input type="text" name="realname" class="form-control" placeholder="성함을 입력해주세요." maxlength="15">
									</div>
									<div class="form-group">
										<input type="text" name="nickname" class="form-control" placeholder="닉네임을 입력해주세요." maxlength="15">
									</div>
									<div class="form-group">
										성별 :
										<input type="radio" name="gender" value="male" checked/> 남자&nbsp;
									  <input type="radio" name="gender" value="female" /> 여자<br>
									</div>
									<div class="form-group">
										<input type="int" name="birth" class="form-control" placeholder="생년월일을 입력해주세요. (예:19990919)" maxlength="8" max="99999999">
									</div>
									<div class="form-group">
										<input type="email" name="email" class="form-control" placeholder="이메일 주소를 입력해주세요." maxlength="30">
									</div>
									<div class="form-group">
										<input type="int" name="tel" class="form-control" placeholder="자택전화번호를 입력해주세요. (숫자로만)" maxlength="11" max="99999999999">
									</div>
									<div class="form-group">
										<input type="int" name="phone" class="form-control" placeholder="휴대전화 번호를 입력해주세요. (숫자로만)" maxlength="11" max="9999999999">
									</div>
									<div class="form-group">
										<textarea name="address" class="form-control" placeholder="주소를 입력해주세요." maxlength="100"></textarea>
									</div>

									<div class="form-group">
										<div class="col-sm-6 col-sm-offset-3">
											<button type="submit" class="form-control btn btn-login">Join</button>
										</div>
									</div>
								</form>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<?php require('../lib/bottom.php'); ?>
