<?php require('lib/top.php'); ?>

    <!-- start banner Area -->
    <section class="banner-area relative about-banner" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">
              관리자 로그인
            </h1>
            <p class="text-white link-nav"><a href="index.php">홈 </a>  <span class="lnr lnr-arrow-right"></span>  <a href="blog1.php"> 로그인</a></p>          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- Start contact-page Area -->
    <section class="contact-page-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <form class="form-area contact-form text-right" action="_admin.php" method="post">
              <div class="row">
                <div class="col-lg-12 form-group">
                  <input name="id" placeholder="아이디" onfocus="this.placeholder = ''" onblur="this.placeholder = '아이디'" class="common-input mb-20 form-control" required="" type="id">
                  <input name="pw" placeholder="패스워드" onfocus="this.placeholder = ''" onblur="this.placeholder = '패스워드'" class="common-input mb-20 form-control" required="" type="password">
                <div class="col-lg-12">
                  <div class="alert-msg" style="text-align: left;"></div>
                  <button class="genric-btn primary" style="float: right;">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End contact-page Area -->

<?php require('lib/bottom.php'); ?>
