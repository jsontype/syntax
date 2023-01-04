<!-- 구 Blog로부터 새 Blog 작성시 수정할 파일 : 폴더명만 바꾸고, _blogpage.php의 blogid 2개와 write의 blogid 히든폼 1개 -->
<!-- BBS에서 Blog로의 전환시 해야할 일들 :
1. bbs, bbs_view의 구조와 blog의 구조만 다름 : bbs_view를 그대로 넣기, 단, 글 등록 버튼은 위쪽으로 이동, 조회수와 목록버튼 없애기, 페이지네이션만 bbs에서 그대로 가져오기
2. 그 외의 파일들은 구조가 똑같음 : bbs로 된 폴더/파일명을 모두 blog로 바꾸기, 그 안의 내용중 bbs단어 검색해 모두 blog로 바꾸기
3. _delete 했을 경우 파생되는 두번 뒤로가기를 블로그에선 하지 않음 : _blog_delete에서 두번 뒤로가기를 한번으로 바꾸고(세션 부여 없애고), blog에서도 두번 뒤로가기 묶음을 없앨 것.
4. bbs 목록에서 $limited_title로 타이틀 표시에 길이 제한 적용한 것 빼기
5. 댓글 있는 경우, bbs는 목록과 뷰에서 댓글이 표시되지만, blog는 블로그 페이지에서 댓글창 바로 위에 한 곳에서만 총 댓글수를 분기에 따라 출력한다. -->

<!-- Top -->
<?php require('../lib/top_in_folder.php'); ?>

<!-- DB연결 -->
<?php require('_conn.php'); ?>

<!-- 페이지연결 -->
<?php require('_blogpage.php'); ?>

<!-- 블로그 뷰 -->
<h2>블로그</h2>

<?php
// <!-- 게시물 호출 -->
// 글 등록 버튼
if(isset($_SESSION['id'])){
  // 로그인 한 경우 : 등록버튼 뜸
  echo "<a href='blog_write.php'>등록</a> <br>"; }
  // 로그인 안 한 경우 : 등록버튼 안 뜸
else { echo "<br>"; }

foreach($result_blog as $v){
  // 사진파일 있을 경우 사진호출
  if(isset($v['imgfile1'])){  // 그냥 echo로는 값이 없을 시 엑박이 뜨므로 보기 안좋다. 그래서, 값이 있을 때만 나오도록 하는게 isset이다.
    echo "<a href='#'><img src='blog_images/{$v['imgfile1']}' alt='게시물이미지' style='max-width:100%; height:auto;' /></a><br>"; // style = 반응형 이미지
  } else {}

  // 데이터 호출
  echo "<p>";
  echo "No. : {$v['no']}<br>";
  echo "블로그ID : {$v['blogid']}<br>";
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
  // 조회수는 블로그에서 입력하지 않는다.
  // echo "조회수 : {$v['view']}<br>";
  echo "</p>";

  // 게시물 호출
  echo "<table border='1'><tr><th>";
  echo "[{$v['title']}]</th></tr>";
  echo "<tr><td>{$v['content']}</td></tr></table>";
  echo "<br>";

  // id가 같을 경우 수정/삭제가 뜨도록 함
  if(isset($_SESSION['id'])){
    if($_SESSION['id'] == $v['id']){
    echo "<a href='blog_modify.php?no={$v['no']}'>수정</a> ";
    echo "<a href='_blog_delete.php?no={$v['no']}' OnClick=\"return confirm('정말 삭제하시겠습니까?');\">삭제</a> ";
    // 버튼형태 : <button onclick="if(confirm('정말로 삭제하시겠습니까?')) location.href='jsp_blog_del_process.jsp?blogID=<%=blogID%>';">삭제</button>&nbsp;
    echo "<br>";}
    else { echo "<br>"; }
  } else { echo "<br>"; }

  // 블로그 한 개 끝날 때마다 한줄 긋기
  echo "<hr>";
}
?>

<!-- 페이지네이션 -->
<ul>
    <?php
    if($current_blog_page==1){
        // prev가 눌리지 않게 a태그 제거, 혹은 아래를 아예 지워버리면 표시자체를 안하게 할 수 있음.
        echo "<a href='#'>&laquo;</a> ";
        echo "<a href='#'>앞</a> ";
    } else {
        echo "<a href='blog.php?current_blog_page=1'>&laquo;</a> ";
        echo "<a href='blog.php?current_blog_page={$prev_blog_page}'>앞</a> ";
    }
    if($current_blog_page==$end_blog_page){
        echo "<a href='#'>끝</a> ";
        echo "<a href='#'>&raquo;</a> ";
    } else {
        echo "<a href='blog.php?current_blog_page={$next_blog_page}'>뒤</a> ";
        echo "<a href='blog.php?current_blog_page={$end_blog_page}'>&raquo;</a> ";
    }
    echo "현 페이지".$current_blog_page;
    echo " / 총 페이지".$end_blog_page;
    ?>
</ul>
<br>

<!-- Bottom -->
<?php require('../lib/bottom_in_folder.php'); ?>
