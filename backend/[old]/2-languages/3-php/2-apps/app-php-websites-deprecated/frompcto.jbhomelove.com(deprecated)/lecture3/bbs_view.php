<?php
// _bbs_delete가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 해당 리스트 상태로
if(isset($_SESSION['delback'])){
  unset($_SESSION['delback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_delete 안했을 경우에 해당하는 페이지 전체 묶어버리기
?>
<?php // 윗줄하고 벌어지면 안됨(_view_cookie에 setcookie헤더있음)
// <!-- 쿠키로 조회수 증가처리 : 아래 순서 바뀌면 안됨 -->
$no = $_GET['no'];
require('_conn.php');
require('_view_cookie.php');
?>

<?php
  // bill 세션 있을 경우 (로그인 했을 경우)
  if(isset($_SESSION['bill3'])){

    // bill 세션이 1인 경우 (수강신청 했을 경우)
    if($_SESSION['bill3'] == '1'){

?>


<!-- Top -->
<?php require('../lib/top.php'); ?>

<!-- All Content Start -->
<div class="container">

  <!-- 큰 제목 -->
  <div class="row">
    <h2>강의 듣기</h2>
  </div>

  <!-- DB 호출 (위치 변경 안됨) -->
  <?php
  $sql = "SELECT * FROM `azuma_f_bbs3` WHERE no = $no";
  $result = mysqli_query($conn, $sql);
  // 게시물 데이터 호출 : 댓글 comment.php 호출 앞까지 묶기
  foreach($result as $v){
  ?>

  <!-- 이전/다음 강의 타이틀 출력 -->
  <div class="row">
    <ul class="list-group">
      <!-- 이전 강의 타이틀 -->
      <?php
      $sqlminus = "SELECT * FROM `azuma_f_bbs3` WHERE no = $no-1 and del_flg = '0'";
      $resultminus = mysqli_query($conn, $sqlminus);
      foreach($resultminus as $m){
        if($m['no']){
        echo "<a href='bbs_view.php?no={$m['no']}' class='list-group-item'>↑ 이전글 : {$m['title']}</a>";
        } else {}
      }
      ?>
      <!-- 현재 강의 타이틀 -->
      <a href='#' class='list-group-item active'><?=$v['title'];?></a>
      <!-- 다음 강의 타이틀 -->
      <?php
      $sqlplus = "SELECT * FROM `azuma_f_bbs3` WHERE no = $no+1 and del_flg = '0'";
      $resultplus = mysqli_query($conn, $sqlplus);
      foreach($resultplus as $p){
        if($p['no']){
        echo "<a href='bbs_view.php?no={$p['no']}' class='list-group-item'>↓ 다음글 : {$p['title']}</a>";
        } else {}
      }
      ?>
    </ul>
  </div>

  <!-- 강의 출력용 iframe 태그 -->
  <?php if($v['blackbox1']){ ?>
    <div class="row">
      <div class="embed-responsive embed-responsive-16by9">
        <!-- 유투브 비디오 반응형 -->
        <?=$v['blackbox1'];?>
      </div>
    </div>
  <?php } ?>

  <!-- 업로드 이미지 출력 -->
  <div class="row">
    <?php
      if(isset($v['img_file1'])){  // 그냥 echo로는 값이 없을 시 엑박이 뜨므로 보기 안좋다. 그래서, 값이 있을 때만 나오도록 하는게 isset이다.
        echo "<a href='#'><img src='bbs_images/{$v['img_file1']}' alt='게시물이미지' style='max-width:100%; height:auto;' /></a><br>"; // style = 반응형 이미지
      } else {}
    ?>
  </div>

  <!-- 본문 내용 -->
  <div class="row">
    <br>
    <p>
      <?=$v['content'];?>
    </p>
    <!-- 본문 내용 中 소스코드 -->
    <?php if($v['tag1']){?>
    <pre class="pre-scrollable">
<?=$v['tag1'];?>
    </pre>
    <?php } ?>

  </div>

</div>
<!-- All Content End -->






<!-- All Comment Content Start -->
<div class="container">
  <p>
  <?php
  // 수정시간, 등록시간 입력 : 수정시간 있을 땐 수정시간, 없을 땐 등록시간이 뜨도록 함
  if(isset($v['mod_date'])){
    echo "수정시간 : ".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['mod_date']}")->format("y/m/d")."에 수정됨<br>";
  } else { echo "등록시간 : ".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['reg_date']}")->format("y/m/d")."에 등록됨<br>"; }
  ?>
  조회수 <?=$v['view'];?><br>
  </p>

  <?php
  // id가 admin 계정일 경우 수정/삭제가 뜨도록 함
  if(isset($_SESSION['id'])){
    if($_SESSION['id'] == 'admin'){
    echo "<button onclick=\"location.href='bbs_modify.php?no={$v['no']}'\">수정</button>";
    echo "<button onclick=\"if(confirm('정말로 삭제하시겠습니까?')) location.href='_bbs_delete.php?no={$v['no']}'\">삭제</button>";
  }
    else { echo "<br>"; }
  } else { echo "<br>"; }
?>

<!-- 목록 버튼 -->
<button type="button" onclick="location.href='bbs.php'">목록</button>

</div>

<?php
// 댓글 수 표시하기
$sql_count = "SELECT * FROM `azuma_f_comment1` WHERE del_flg = '0' AND cid = 'bbs3' AND no = '$no'";
$bbs_c_count = mysqli_query($conn, $sql_count)->num_rows; // num_rows : 전체값을 센 수를 담아 정수형태로 출력
// 댓글까지 $v를 모두 호출 했으므로 foreach문 닫기
}
?>

<!-- 댓글 -->
<?php require ('comment.php'); ?>
<!-- All Comment Content End -->







<!-- Bottom -->
<?php require('../lib/bottom.php'); ?>

<?php // "bill 세션이 1인 경우 (수강신청 했을 경우)" 닫기
      }
      else { ?>
        <!-- 튕겨 보내기 -->
        <script>alert('수강신청이 필요한 페이지입니다.')</script>
        <meta http-equiv='refresh' content='0;url=bbs.php'>
<?php } ?>
<?php
  } // "bill 세션 있을 경우 (로그인 했을 경우)" 닫기
  else { ?>
    <!-- 튕겨 보내기 -->
    <script>alert('로그인이 필요한 페이지입니다.')</script>
    <meta http-equiv='refresh' content='0;url=../member1/login.php'>
<?php
  }
} // "_bbs_delete 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기
?>
