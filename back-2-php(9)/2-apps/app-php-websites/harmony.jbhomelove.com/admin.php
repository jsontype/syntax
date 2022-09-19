<?php require('lib/top.php'); ?>


    <div class="ftco-blocks-cover-1">
      <div class="site-section-cover overlay" data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col-md-5 mt-5 pt-5">
              <span class="text-cursive h5 text-red">Admin Login</span>
              <h1 class="mb-3 font-weight-bold text-teal">관리자 로그인</h1>
              <p><a href="index.php" class="text-white">Home</a> <span class="mx-3">/</span> <strong>Admin Login</strong></p>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2>관리자 로그인</h2>
        </div>
      </div>
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <form action="_admin.php" method="post">
              <div class="form-group row">
                <div class="col-md-12 mb-4 mb-lg-0">
                  <input type="text" name="id" class="form-control" placeholder="ID">
                </div>
                <div class="col-md-12">
                  <input type="password" name="pw" class="form-control" placeholder="Password">
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5" value="로그인">
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h4 class="text-black mb-4">관리자 모드</h4>
            </div>
          </div>
        </div>
      </div>
    </div>


<?php require('lib/bottom.php'); ?>
