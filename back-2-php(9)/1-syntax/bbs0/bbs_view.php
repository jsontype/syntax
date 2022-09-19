<?php
// _bbs_delete가 끝나서 돌아온 거라면 뒤로 한번 더 가기 : bbs 해당 리스트 상태로
if(isset($_SESSION['delback'])){
  unset($_SESSION['delback']);
  echo "<script>history.go(-1);</script>";
} else { // _bbs_delete 안했을 경우에 해당하는 페이지 전체 묶어버리기
?>
<?php // 윗줄하고 벌어지면 안됨(_view_cookie에 setcookie헤더있음 : 헤더는 echo html 출력 처리를 싫어한다. 심지어 줄바꿈같은 공백 html 출력처리도 중간에 끼는 것을 싫어한다.)
// <!-- 쿠키로 조회수 증가처리 : 아래의 순서로 세 줄을 입력하면 쿠키로 조회수 처리가 된다. -->
$no = $_GET['no'];
require('_conn.php');
require('_view_cookie.php');
?>

<!-- Top -->
<?php require('../lib/top_in_folder.php'); ?>

<!-- 게시물 보기 -->
<h2>게시물 보기</h2>

<?php
// no값에 해당하는 게시물 호출
$sql = "SELECT * FROM `azuma_php_bbs1` WHERE no = $no";
$result = mysqli_query($conn, $sql);

// 게시물 데이터 호출
foreach($result as $v){
  // 데이터 호출
  echo "<p>";
  echo "No. : {$v['no']}<br>";
  echo "게시판ID : {$v['bbsid']}<br>";
  echo "게시자ID : ".htmlspecialchars($v['id'], ENT_QUOTES, 'UTF-8')."<br>";
  echo "게시자닉네임 : ".htmlspecialchars($v['nickname'], ENT_QUOTES, 'UTF-8')."<br>";
  // 수정시간, 등록시간 입력 : 수정시간 있을 땐 수정시간, 없을 땐 등록시간이 뜨도록 함
  // 시간포맷 참조 : https://m.blog.naver.com/PostView.nhn?blogId=fromyongsik&logNo=40122607490&proxyReferer=https%3A%2F%2Fwww.google.com%2F
  if(isset($v['moddate'])){
    echo "수정시간 : ".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['moddate']}")->format("y/m/d")."에 수정됨<br>";
  } else { echo "등록시간 : ".DateTime::createFromFormat("Y-m-d H:i:s", "{$v['regdate']}")->format("y/m/d")."에 등록됨<br>"; }
  // 카테고리 입력
  // if(isset($var))와 if($var)의 차이점 참조 : https://winplz.tistory.com/entry/isset-empty-isnull-unset-%ED%95%A8%EC%88%98 (설명 : isset은 'null'이 아닌이상 내용이 없어도 뜨지만(즉 수정버튼 한번이라도 클릭했으면 data가 ""이 들어가도 수정시간이 뜰 것이다.), if($var)는 '내용'이 없으면 안뜬다.(즉 카테고리가 없으면 안 뜰 것이다.))
  if($v['category']){ // 카테고리가 있을 경우
    echo "카테고리 : {$v['category']}<br>";
  } else {} // 카테고리가 없을 경우
  // 링크 입력
  if($v['link']){ // 링크가 있을 경우
    if(!strpos($v['link'],'://')){ // 링크 안에 "(http)://" 가 없을 경우
      echo "관련링크 : <a href=\"http://{$v['link']}\" target='_blank'>http://{$v['link']}</a><br>";
      } else { // 링크 안에 "(http)://" 가 있을 경우
      echo "관련링크 : <a href=\"{$v['link']}\" target='_blank'>{$v['link']}</a><br>";
        }
      } else {} // 링크가 없을 경우
  // 조회수 입력
  echo "조회수 : {$v['view']}<br>";
  echo "</p>";

  // 게시물 호출
  echo "<table border='1'><tr><th>";
  echo "[{$v['title']}]</th></tr>";
  echo "<tr><td>{$v['content']}</td></tr></table>";
  echo "<br>";

  // id가 같을 경우 수정/삭제가 뜨도록 함
  if(isset($_SESSION['id'])){
    if($_SESSION['id'] == $v['id']){
    echo "<a href='bbs_modify.php?no={$v['no']}'>수정</a> ";
    echo "<a href='_bbs_delete.php?no={$v['no']}' OnClick=\"return confirm('정말 삭제하시겠습니까?');\">삭제</a> ";
    // 버튼형태 : <button onclick="if(confirm('정말로 삭제하시겠습니까?')) location.href='jsp_blog_del_process.jsp?blogID=<%=blogID%>';">삭제</button>&nbsp;
    echo "<br>";}
    else { echo "<br><br>"; }
  } else { echo "<br><br>"; }

}
?>

<!-- 목록 버튼 -->
<button type="button" onclick="location.href='bbs.php'">목록</button>

<!-- Bottom -->
<?php require('../lib/bottom_in_folder.php'); ?>

<?php } // "_bbs_delete 안했을 경우에 해당하는 페이지 전체(bottom까지) 묶어버리기" 닫기 ?>
