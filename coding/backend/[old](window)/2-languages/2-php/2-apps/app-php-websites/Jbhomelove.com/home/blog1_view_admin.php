<?php require('lib/top_admin.php'); ?>
<?php
// _bbs_delete가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 해당 리스트 상태로
if(isset($_SESSION['delback'])){
  unset($_SESSION['delback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_delete 안했을 경우에 해당하는 페이지 전체 묶어버리기
?>
<?php
$no = $_GET['no'];
require('_conn.php');
?>





    <section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_2.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
            <h1 class="mb-2 bread">활동사진 보기</h1>
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
        $sql = "SELECT * FROM `azuma_jb_blog1` WHERE no = $no";
        $result = mysqli_query($conn, $sql);
        foreach($result as $v){ ?>
            <p>
              <img src="blog_images/<?=$v['imgfile1']?>" alt="활동이미지" class="img-fluid">
            </p>
            <h2 class="mb-3">#<?=$v['no']?>. <?=$v['title']?></h2>
            <p><b><?=$v['content']?></b></p>

            <div class="tag-widget post-tag-container mb-5 mt-5">
              <div class="tagcloud">
                <?php
                // id가 같을 경우 수정/삭제가 뜨도록 함
                if(isset($_SESSION['id'])){
                  if($_SESSION['id'] == $v['id']){ ?>
                    <a href="blog1_admin_modify.php?no=<?=$v['no']?>" class="tag-cloud-link">수정</a>
                    <a href="_blog1_admin_delete.php?no=<?=$v['no']?>" class="tag-cloud-link" OnClick="return confirm('정말 삭제하시겠습니까?');">삭제</a>
                    <a href='blog1_admin.php' class='tag-cloud-link' class='tag-cloud-link'>목록</a>
                  <?php
                } else { echo "<a href='blog1_admin.php' class='tag-cloud-link' class='tag-cloud-link'>목록</a>"; }
                } else { echo "<a href='blog1_admin.php' class='tag-cloud-link' class='tag-cloud-link'>목록</a>"; }
                ?>
              </div>
            </div>

          <?php } ?>

          </div> <!-- .col-md-8 -->

          <?php require('lib/side.php'); ?>

        </div>
			</div>
		</section>




<?php } ?>





<?php require('lib/bottom_admin.php'); ?>
