<!-- 구 BBS로부터 새 BBS 작성시 수정할 파일 : 폴더명만 바꾸고, _bbspage.php의 bbsid 2개와 write의 bbsid 히든폼 1개 (댓글있을시) comment에서 2개 -->

<!-- Top -->
<?php require('../lib/top_in_folder.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_bbspage.php'); ?>

<!-- 게시판 리스트 -->
<h2>게시판</h2>
<table border="1">
  <!-- // 게시판 컬럼별 길이 조정
   <colgroup>
    <col width="50">
    <col width="50">
    <col width="200">
    <col width="50">
    <col width="50">
  </colgroup> -->
  <thead>
    <tr style="text-align:center;">
    <th>번호</th>
    <th>닉네임</th>
    <th>제목</th>
    <th>날짜</th>
    <th>조회수</th>
    </tr>
  </thead>
  <tbody>
    <?php // $result_bbs에서 페이지네이션 결과값 빼오기
    foreach($result_bbs as $v){
      echo "<tr style='text-align:center;'>";
      echo "<td>{$v['no']}</td>";
      echo "<td>{$v['nickname']}</td>";

      // 제목을 $limited_title 로 바꾸기 : title이 30을 넘어서면 "..."로 출력
      $limited_title = $v["title"];
      if(strlen($limited_title)>30){
        $limited_title=str_replace($v["title"], mb_substr($v["title"],0,30,"utf-8")."...", $v["title"]);
      } else {}
      echo "<td><a href='bbs_view.php?no={$v['no']}' style='color:black;'>{$limited_title}</a></td>";

      // 수정시간, 등록시간 입력 : 수정시간 있을 땐 수정시간, 없을 땐 등록시간이 뜨도록 함
      // 시간포맷 참조 : https://m.blog.naver.com/PostView.nhn?blogId=fromyongsik&logNo=40122607490&proxyReferer=https%3A%2F%2Fwww.google.com%2F
      if(isset($v['moddate'])){
        echo "<td>".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['moddate']}")->format("y/m/d")."</td>";
      } else { echo "<td>".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("y/m/d")."</td>"; }

      echo "<td>{$v['view']}</td>";
      echo "</tr>";}
    ?>
  </tbody>
</table>

<!-- 페이지네이션 -->
<ul>
    <?php
    if($current_bbs_page==1){
        // prev가 눌리지 않게 a태그 제거, 혹은 아래를 아예 지워버리면 표시자체를 안하게 할 수 있음.
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
<br>

<!-- 글 등록 버튼 -->
<?php
// 로그인 한 경우
if(isset($_SESSION['id'])){
  echo "<a href='bbs_write.php'>등록</a> ";}
// 로그인 안 한 경우
else {}
?>

<!-- Bottom -->
<?php require('../lib/bottom_in_folder.php'); ?>
