<?php require('lib/top.php'); ?>

<!-- 인덱스 페이지도 함께 참조 -->

    <!-- start banner Area -->
    <section class="banner-area relative about-banner" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="about-content col-lg-12">
            <h1 class="text-white">
              글쓰기
            </h1>
            <p class="text-white link-nav"><a href="index.php">홈 </a>  <span class="lnr lnr-arrow-right"></span>  <a href="blog2.php"> 커뮤니티</a></p>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- Start contact-page Area -->
    <section class="contact-page-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-6 appointment-right pt-60 pb-60">
            <form class="form-wrap" action="_blog2_write.php" method="post" enctype="multipart/form-data">
              <input type="hidden" name="id" value="<?=$_SESSION['id']?>">
              <input type="hidden" name="nickname" value="<?=$_SESSION['nickname']?>">

              <h3 class="pb-20 text-center mb-30">글쓰기</h3>
              <input type="text" class="form-control" name="title" placeholder="제목을 입력해주세요."><br>
              <textarea name="content" cols="30" rows="10" class="form-control" placeholder="내용을 입력해주세요."></textarea><br>
              ※ 이미지 등록(jpg, bmp, png 등) : <input type="file" name="img1"><br><br>
              <button type="submit" class="primary-btn text-uppercase">보내기</button>
              <button type="button" class="primary-btn text-uppercase" onclick="location.href='blog2.php'">뒤로가기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End contact-page Area -->






<!-- 더 좋은 양식 이거
    <div class="comment-form">
      <h4>Leave a Comment</h4>
      <form>
        <div class="form-group form-inline">
          <div class="form-group col-lg-6 col-md-12 name">
            <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'">
          </div>
          <div class="form-group col-lg-6 col-md-12 email">
            <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'">
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'">
        </div>
        <div class="form-group">
          <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
        </div>
        <a href="#" class="primary-btn text-uppercase">Post Comment</a>
      </form>
    </div>
  </div>
 -->







<?php require('lib/bottom.php'); ?>
