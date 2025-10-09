<?php require('lib/top.php'); ?>









    <div class="row justify-content-center mb-5 pb-2">
      <div class="col-md-8 text-center heading-section ftco-animate">
        <form action="_blog3_write.php" class="p-5 bg-light" method="post" enctype="multipart/form-data">

          <div class="form-group">
            <h2 class="mb-4"><span>새로운</span> 자유게시판</h2>
            <input type="hidden" name="id" value="guest">
            <input type="text" name="nickname" placeholder="성함 또는 닉네임 입력">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="title" placeholder="제목을 입력해주세요.">
          </div>
          <div class="form-group">
            <textarea name="content" cols="30" rows="10" class="form-control" placeholder="내용을 입력해주세요."></textarea>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="pw" placeholder="비밀번호를 입력해주세요.(* 필수)">
          </div>
          <div class="form-group" >※ 이미지 등록(jpg, bmp, png 등) : <input type="file" name="img1"></div>
          <br>
          <br>
          <div class="form-group">
            <input type="submit" value="등록" class="btn py-3 px-4 btn-primary">
            <input type="button" value="뒤로가기" onclick="location.href='blog3.php'" class="btn py-3 px-4 btn-primary">
          </div>
        </form>
      </div>
    </div>


















<?php require('lib/bottom.php'); ?>
