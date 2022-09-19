<?php require('lib/top.php'); ?>




<section class="ftco-section">
  <div class="container">
    <div class="row justify-content-center mb-5 pb-2">
      <div class="col-md-8 text-center heading-section ftco-animate">
        <h2 class="mb-4"><span>관리자</span> 로그인<br><br></h2>
        <form action="_login.php" class="p-5 bg-light" method="post">
          <div class="form-group">
            <input type="text" class="form-control" name="id" placeholder="Enter ID">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="pw" placeholder="Password">
          </div>
          <div class="form-group">
            <input type="submit" value="로그인" class="btn py-3 px-4 btn-primary">
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


<?php require('lib/bottom.php'); ?>
