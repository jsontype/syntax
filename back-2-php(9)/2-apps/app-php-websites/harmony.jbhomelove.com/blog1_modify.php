<?php require('lib/top.php'); ?>


<?php
// _bbs_modify가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 뷰 상태로
if(isset($_SESSION['modback'])){
  unset($_SESSION['modback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_modify 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기
?>



<?php
// 수정을 위한 DB 호출
require('_conn.php');
$no = $_GET['no'];
$sql = "SELECT * FROM `azuma_h_blog1` WHERE no = $no";
$result = mysqli_query($conn, $sql);
// ★ 호출 결과값 한줄씩 빼기
$mod = mysqli_fetch_assoc($result);
?>




    <div class="ftco-blocks-cover-1">
      <div class="site-section-cover overlay" data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col-md-5 mt-5 pt-5">
              <span class="text-cursive h5 text-red">Modify Notice</span>
              <h1 class="mb-3 font-weight-bold text-teal">공지사항 수정</h1>
              <p><a href="index.html" class="text-white">Home</a> <span class="mx-3">/</span> <strong>Notice</strong></p>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2><?=$no?>번 공지사항 수정</h2>
          <p>하모니 가족상담센터에서 제공하는 프로그램이나<br>
          다양한 상담자료, 공지사항등을 올리는 공간입니다.</p>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-5" >
            <form action="_blog1_modify.php?no=<?=$mod['no']?>" method="post" enctype="multipart/form-data">

              <div class="form-group row">
                <div class="col-md-12">
                  <input type="text" name="title" class="form-control" placeholder="제목을 입력해주세요" value="<?=$mod['title']?>" minlength="1" maxlength="100">
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <textarea name="content" id="" class="form-control" placeholder="내용을 입력해주세요" cols="30" rows="10"><?php $bcontent = $mod['content']; $bcontent = str_replace("<br />", "", $bcontent); echo $bcontent?></textarea>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  ※ 이미지 수정 필요시 등록하세요. : <input type="file" name="img1"><br><br>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5" value="등록">
                </div>
                <div class="col-md-6 mr-auto">
                  <input type="button" class="btn btn-block btn-primary text-white py-3 px-5" onclick="location.href='blog1.php'" value="뒤로가기">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>




<?php require('lib/bottom.php'); ?>

<?php } ?>
