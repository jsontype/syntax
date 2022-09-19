<?php require('lib/top.php'); ?>


    <div class="ftco-blocks-cover-1">
      <div class="site-section-cover overlay" data-stellar-background-ratio="0.5" style="background-image: url('images/hero_1.jpg')">
        <div class="container">
          <div class="row align-items-center ">

            <div class="col-md-5 mt-5 pt-5">
              <span class="text-cursive h5 text-red">Application</span>
              <h1 class="mb-3 font-weight-bold text-teal">상담신청</h1>
              <p><a href="index.php" class="text-white">Home</a> <span class="mx-3">/</span> <strong>Application</strong></p>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2>상담 신청란</h2>
          <p><strong>원하시는 상담 내용에 대해서 자세하게 적어주시기 바랍니다. <br>상담 내용은 비공개 원칙을 준수합니다.</strong></p>
        </div>
      </div>
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <form action="_letter.php" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <input type="text" name="familyname" class="form-control" placeholder="성" maxlength="15">
                </div>
                <div class="col-md-6">
                  <input type="text" name="lastname" class="form-control" placeholder="이름" maxlength="15">
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <input type="text" name="email" class="form-control" placeholder="연락처를 적어주세요" maxlength="30">
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <input type="hidden" name="content" value="하모니 가족상담센터 홈페이지를 통해 연락드립니다.">
                  <textarea name="message" id="" class="form-control" placeholder="메세지를 적어주세요" cols="30" rows="10" maxlength="3000"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5" value="보내기">
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-black mb-4">연락망</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3"><strong>
                  <span class="d-block text-black">주소</span>
                  <span>전북 익산시 인북로 206-3 3층</span></strong></li>
                <li class="d-block mb-3"><strong><span class="d-block text-black">전화</span><span>Tel. (063) 858 2736</span> <br><span>Fax. (063) 837 7412</span></strong></li>
                <li class="d-block mb-3"><strong><span class="d-block text-black">이메일</span><span>tosim36@hanmail.net</span></strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



<?php require('lib/bottom.php'); ?>
