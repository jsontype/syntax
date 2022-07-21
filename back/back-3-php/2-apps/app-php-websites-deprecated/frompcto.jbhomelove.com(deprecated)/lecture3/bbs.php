<?php require('../lib/top.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_bbspage.php'); ?>

<div class="container">

  <!-- 글쓰기 버튼 : 관리자 id 일때만 등장 -->
  <?php
  if(isset($_SESSION['id'])){
  if($_SESSION['id'] == 'admin'){ ?>
    <div class="row">
      <button onclick="location.href='bbs_write.php'">등록</button><br><br>
    </div>
  <?php }} ?>

  <!-- 수강신청 버튼 : 수강신청 안했을 때만 등장 -->
  <?php
  // 로그인했을 때
  if(isset($_SESSION['bill3'])){

    // 수강신청 안 했을 때
    if($_SESSION['bill3'] == '0'){ ?>
      <div class="row">
        <button onclick="location.href='_apply_class.php'">수강신청</button><br><br>
      </div>

  <?php } else {} } else { ?>
    <script>alert('로그인을 먼저 해주세요.')</script>
    <meta http-equiv='refresh' content='0;url=../member1/login.php'>
  <?php } ?>

  <!-- 강의 목록 출력 -->
  <div class="row">
    <ul class="list-group">

      <!-- ★ 강의 주제 -->
      <a href='#' class='list-group-item active'>강의 리스트</a>

    <!-- 강의 목록 -->
    <?php
    foreach($result_bbs as $v){
      // 제목에 댓글수를 표시하기 위한 사전준비작업
      $no = $v['no'];
      $sql_count = "SELECT * FROM `azuma_f_comment1` WHERE del_flg = '0' AND cid = 'bbs3' AND no = '$no'";
      $bbs_c_count = mysqli_query($conn, $sql_count)->num_rows; // num_rows : 전체값을 센 수를 담아 정수형태로 출력

      // $limited_title : title이 50을 넘어서면 "..."로 출력
      $limited_title = $v["title"];
      if(strlen($limited_title)>50){
        $limited_title=str_replace($v["title"], mb_substr($v["title"],0,50,"utf-8")."...",$v["title"]);
      } else {}

      // $limited_title 출력 고정 + 댓글 수에 따른 출력 분기
      if($bbs_c_count > 0){ // 댓글 1개 이상인 경우
        echo "<a href='bbs_view.php?no={$v['no']}' class='list-group-item'>{$limited_title} [댓글 {$bbs_c_count}개]</a>"; // [2] 변수 c_count에 담긴 댓글수를 타이틀 옆에 출력.
        } else { // 댓글 0개인 경우
          echo "<a href='bbs_view.php?no={$v['no']}' class='list-group-item'>{$limited_title}</a>"; // [2] 변수 c_count에 담긴 댓글수 [0]을 출력할 바에는 아예 출력하지 않는 게 깔끔하므로 뺐음.
        }
      } ?>
    </ul>
  </div>

  <!-- 페이지네이션 -->
  <div class="row">
    <ul>
        <?php
        if($current_bbs_page==1){
            echo "<a href='#'>&laquo;</a> ";
            echo "<a href='#'>앞</a> ";
        } else {
            echo "<a href='bbs.php?current_bbs_page=1'>&laquo;</a> ";
            echo "<a href='bbs.php?current_bbs_page={$prev_bbs_page}'>앞</a> ";
        }
        if($current_bbs_page==$end_bbs_page){
            echo "<a href='#'>끝</a> ";
            echo "<a href='#'>&raquo;</a> ";
        } else {
            echo "<a href='bbs.php?current_bbs_page={$next_bbs_page}'>뒤</a> ";
            echo "<a href='bbs.php?current_bbs_page={$end_bbs_page}'>&raquo;</a> ";
        }
        echo "현 페이지".$current_bbs_page;
        echo " / 총 페이지".$end_bbs_page;
        ?>
    </ul>
    <br><br><br>
  </div>
</div>

<?php require('../lib/bottom.php'); ?>
