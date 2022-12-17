<?php require('lib/top.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_blog1page.php'); ?>





    <div class="ftco-blocks-cover-1">
       <!-- data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')" -->
      <div class="site-section-cover overlay" data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col-md-5 mt-5 pt-5">
              <span class="text-cursive h5 text-red">Notice</span>
              <h1 class="mb-3 font-weight-bold text-teal">공지사항</h1>
              <p><a href="index.php" class="text-white">Home</a> <span class="mx-3">/</span> <strong>Notice</strong></p>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <span class="text-cursive h5 text-red d-block">Notice &amp; Introduce</span>
            <h2 class="text-black">프로그램 소개</h2>
          </div>
        </div>
        <div class="row">

          <!-- Single-Post Start -->
          <?php foreach($result_blog as $v){ ?>
          <div class="col-md-3 mb-4">
            <?php
            if(isset($v['imgfile1'])){  ?>
              <a href="blog1_view.php?no=<?=$v['no']?>"><img src="blog_images/<?=$v['imgfile1']?>" alt="Image" class="img-fluid"></a>
            <?php } else { ?>
              <a href="blog1_view.php?no=<?=$v['no']?>"><img src="images\img_3.jpg" alt="Image" class="img-fluid"></a>
            <?php } ?>
          </div>
        <?php } ?>
          <!-- Single-Post End -->

        </div>
      </div>
    </div>






      <div class="site-section py-5 bg-warning">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 d-flex">


            <!-- Pagination -->
            <?php if($current_blog_page==1){ ?>
              <li class="page-item"><a href="#" class="page-link">←</a></li>
              <li class="page-item"><a href="#" class="page-link">앞</a></li>
            <?php } else { ?>
              <li class="page-item"><a href="blog1.php?current_blog_page=1" class="page-link">←</a></li>
              <li class="page-item"><a href="blog1.php?current_blog_page=<?=$prev_blog_page?>" class="page-link">앞</a></li>
            <?php } ?>

            <?php if($current_blog_page==$end_blog_page){ ?>
              <li class="page-item"><a href="#" class="page-link">뒤</a></li>
              <li class="page-item"><a href="#" class="page-link">→</a></li>
            <?php } else { ?>
              <li class="page-item"><a href="blog1.php?current_blog_page=<?=$next_blog_page?>" class="page-link">뒤</a></li>
              <li class="page-item"><a href="blog1.php?current_blog_page=<?=$end_blog_page?>" class="page-link">→</a></li>
            <?php } ?>


            <h4 class="text-white m-0"><strong> &nbsp; &nbsp; &nbsp; <?php echo "현 페이지 ".$current_blog_page;echo " / 총페이지 ".$end_blog_page;?></strong></h4>


            <!-- Register Button -->
            <?php
            if(!isset($_SESSION['id'])){ // 세션 없는 경우 ?>
            <?php } else { // 세션 있는 경우 ?>
             &nbsp; &nbsp; &nbsp; <a href="blog1_write.php" class="btn btn-primary btn-custom-1 py-3 px-5 ml-auto"><strong>등록</strong></a>
            <?php } ?>
            </div>
          </div>
        </div>
      </div>



<?php require('lib/bottom.php'); ?>
