<?php require('lib/top.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_blog2page.php'); ?>












    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">교육자료</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="#">전북 <i class="ion-ios-arrow-forward"></i></a></span> <span>가족복지문화원 <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>

		<section class="ftco-section bg-light">
			<div class="container">
				<div class="row">

        <?php foreach($result_blog as $v){ ?>
          <div class="col-md-6 col-lg-4 ftco-animate">
            <div class="blog-entry">
              <?php
              if(isset($v['imgfile1'])){  // 그냥 echo로는 값이 없을 시 엑박이 뜨므로 보기 안좋다. 그래서, 값이 있을 때만 나오도록 하는게 isset이다.
                echo "<a href=\"blog2_view.php?no={$v['no']}\" class='block-20 d-flex align-items-end' style=\"background-image: url('blog_images/{$v['imgfile1']}');\" alt='게시물이미지'></a>";
              } else {
                echo "<a href=\"blog2_view.php?no={$v['no']}\" class='block-20 d-flex align-items-end' style=\"background-image: url('blog_images/none.jpg');\" alt='게시물이미지 없음'></a>";
              }
              ?>
								<div class="meta-date text-center p-2">
                  <span class="day"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("j");?></span>
                  <span class="mos"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("F");?></span>
                  <span class="yr"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("Y");?></span>
                </div>
              </a>
              <div class="text bg-white p-4">
                <h3 class="heading"><a href="blog2_view.php?no=<?=$v['no']?>"><?=$v['title']?></a></h3>
                <div class="d-flex align-items-center mt-4">
	                <p class="mb-0"><a href="blog2_view.php?no=<?=$v['no']?>" class="btn btn-secondary">더 보기 <span class="ion-ios-arrow-round-forward"></span></a></p>
	                <p class="ml-auto mb-0">
	                	<a href="#" class="mr-2"><?=$v['nickname']?></a>
	                	<a href="#" class="meta-chat"><span class="icon-chat"></span> </a>
	                </p>
                </div>
              </div>
            </div>
          </div>
        <?php } ?>

        </div>

        <div class="row no-gutters my-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
              <?php if($current_blog_page==1){ ?>
                <li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
                <li><a href="#">앞</a></li>
              <?php } else { ?>
                <li><a href="blog2.php?current_blog_page=1"><i class="ion-ios-arrow-back"></i></a></li>
                <li><a href="blog2.php?current_blog_page=<?=$prev_blog_page?>">앞</a></li>
              <?php } ?>
              <?php if($current_blog_page==$end_blog_page){ ?>
                <li><a href="#">뒤</a></li>
                <li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
              <?php } else { ?>
                <li><a href="blog2.php?current_blog_page=<?=$next_blog_page?>">뒤</a></li>
                <li><a href="blog2.php?current_blog_page=<?=$end_blog_page?>"><i class="ion-ios-arrow-forward"></i></a></li>
              <?php } ?>
                <br>
                <li><?php echo "현 페이지".$current_blog_page;echo " / 총 페이지".$end_blog_page;?></li>
              </ul>
            </div>
          </div>
        </div>
			</div>
		</section>




<?php require('lib/bottom.php'); ?>
