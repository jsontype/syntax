<?php require('lib/top.php'); ?>



<?php
$no = $_GET['no'];
require('_conn.php');
?>





    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">교육자료 보기</h1>
             <p class="breadcrumbs"><span class="mr-2"><a href="#">전북 <i class="ion-ios-arrow-forward"></i></a></span> <span>가족복지문화원 <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>











		<section class="ftco-section">
			<div class="container">
				<div class="row">
          <div class="col-lg-8 ftco-animate">

        <?php
        $sql = "SELECT * FROM `azuma_jb_blog2` WHERE no = $no";
        $result = mysqli_query($conn, $sql);
        foreach($result as $v){ ?>
            <?php
            if(isset($v['imgfile1'])) {  // 그냥 echo로는 값이 없을 시 엑박이 뜨므로 보기 안좋다. 그래서, 값이 있을 때만 나오도록 하는게 isset이다.
            ?>
            <p>
              <img src="blog_images/<?=$v['imgfile1']?>" alt="활동이미지" class="img-fluid">
            </p>
            <?php } ?>
            <h2 class="mb-3">#<?=$v['no']?>. <?=$v['title']?></h2>
            <p><b><?=$v['content']?></b></p>

            <div class="tag-widget post-tag-container mb-5 mt-5">
              <div class="tagcloud">
                <a href='blog2.php' class='tag-cloud-link' class='tag-cloud-link'>목록</a>
              </div>
            </div>

          <?php } ?>

          </div> <!-- .col-md-8 -->

          <?php require('lib/side.php'); ?>

        </div>
			</div>
		</section>










<?php require('lib/bottom.php'); ?>
