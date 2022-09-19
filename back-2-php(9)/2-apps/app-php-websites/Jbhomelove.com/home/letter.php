<?php require('lib/top_admin.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_letterpage.php'); ?>




    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">편지함</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="#">관리자모드 <i class="ion-ios-arrow-forward"></i></a></span> <span>편지함 <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>

		<section class="ftco-section bg-light">
			<div class="container">
				<div class="row">

        <?php foreach($result_bbs as $v){ ?>
          <div class="col-md-6 col-lg-4 ftco-animate">
            <div class="blog-entry">
								<div class="meta-date text-center p-2">
                  <span class="day"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("j");?></span>
                  <span class="mos"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("F");?></span>
                  <span class="yr"><?=DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("Y");?></span>
                </div>
              </a>
              <div class="text bg-white p-4">
                <h3 class="heading"><b><?php if($v['familyname']){echo $v['familyname'];}if($v['lastname']){echo $v['lastname'];}?> &nbsp;<?php if($v['email']){echo $v['email'];}?></b></h3>
                <p><b><?php if($v['content']){echo $v['content'];}?> &nbsp;<?php if($v['message']){echo $v['message'];}?></b></p>
                <?php if(isset($_SESSION['id'])){
                      echo "<a href='_letter_delete.php?no={$v['no']}' OnClick=\"return confirm('정말 삭제하시겠습니까?');\"><b>삭제</b></a>";
                      echo "<br>";}
                      else { echo "<br>"; }
                ?>
              </div>
            </div>
          </div>
    <?php } ?>

  </div>







            <div class="row no-gutters my-5">
              <div class="col text-center">
                <div class="block-27">
                  <ul>
                  <?php if($current_bbs_page==1){ ?>
                    <li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
                    <li><a href="#">앞</a></li>
                  <?php } else { ?>
                    <li><a href="letter.php?current_bbs_page=1"><i class="ion-ios-arrow-back"></i></a></li>
                    <li><a href="letter.php?current_bbs_page=<?=$prev_bbs_page?>">앞</a></li>
                  <?php } ?>
                  <?php if($current_bbs_page==$end_bbs_page){ ?>
                    <li><a href="#">뒤</a></li>
                    <li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
                  <?php } else { ?>
                    <li><a href="letter.php?current_bbs_page=<?=$next_bbs_page?>">뒤</a></li>
                    <li><a href="letter.php?current_bbs_page=<?=$end_bbs_page?>"><i class="ion-ios-arrow-forward"></i></a></li>
                  <?php } ?>
                    <br>
                    <li><?php echo "현 페이지".$current_bbs_page;echo " / 총 페이지".$end_bbs_page;?></li>
                  </ul>
                </div>
              </div>
            </div>
    			</div>
    		</section>




<?php require('lib/bottom_admin.php'); ?>
