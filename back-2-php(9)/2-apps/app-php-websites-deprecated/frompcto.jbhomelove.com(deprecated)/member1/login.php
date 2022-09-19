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
								<a href="login.php" class="active">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="register.php">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form action="_login.php" method="post" style="display: block;">
									<div class="form-group">
										<input type="text" name="id" class="form-control" placeholder="ID를 입력해주세요." maxlength="15">
									</div>
									<div class="form-group">
										<input type="password" name="password" class="form-control" placeholder="비밀번호를 입력해주세요." maxlength="15">
									</div>
									<div class="form-group text-center">
										<input type="checkbox" class="" name="remember">
										<label for="remember"> Remember Me</label>
									</div>
									<div class="form-group">
										<div class="col-sm-6 col-sm-offset-3">
											<button type="submit" class="form-control btn btn-login">Log in</button>
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
