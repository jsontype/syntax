<!-- Top -->
<?php require('lib/top.php'); ?>
<?php // require('http://yangdonghwa.000webhostapp.com/php_tech/loginbbs/lib/top.php'); ?>

<h2>메인화면</h2>

<?php
if(isset($_SESSION['id'])){ // 세션 유무는 isset으로 !
  // 로그인 한 경우
  echo "이 곳은 메인 인덱스 화면입니다.<br><br>";
  echo "※ 회원정보<br>";
  // ※ XSS 해킹에 주의해야 할, 회원정보 중 태그가 가능한 text타입들 :
  // 회원정보 중 태그가 가능한 text타입의 처리1 : 세션으로 출력할 때
  // 회원정보를 담을 때 htmlspecialchars로 입력됐다면, 세션으로 출력될 때는 htmlspecialchars 태그 변경이 필요없다.
    // 그러나, bbs_view같은 곳에서 세션이 아닌 변수(get이나 post로 받은 것)로 출력될 때는 <가 1회적으로 &lt;가 아닌 원래 문자로 돌아가기 때문에 출력시에도 다시 한번 htmlspecialchars 태그 변경으로 묶어줘야한다.
    // 현 페이지에서 세션은 _login을 통해서 ID, 이름, 닉네임만 들어왔다.
  echo "ID : ".$_SESSION['id']."<br>";
  echo "이름 : ".$_SESSION['username']."<br>";
  echo "닉네임 : ".$_SESSION['nickname']."<br>";
  // 회원정보 중 태그가 가능한 text타입의 처리2 : post나 get에 세션을 입력하여, submit할 때 변수에 담아 출력할 때
  // 회원정보 중 태그가 가능한 text타입인 nickname(아래 name변수에 해당), username(현 세션에서 쓰지 않음), addr(아예 세션이 없음) 변수는 여기서 태그를 삭제하는 게 아니라, bbs_view에서 출력할 때 태그를 삭제해야 한다.
  // $name = $_POST['name'];
  // $username = $_POST['name'];
  // $addr = $_POST['addr'];

} else {
  // 로그인 안한 경우
  echo "이 곳은 메인 인덱스 화면입니다.<br><br>";
  echo "※ 회원정보<br>";
  echo " 세션이 존재하지 않습니다.<br>";
  echo " 로그인을 하여주시기 바랍니다.<br>";
}
?>

<br>※ 제작현황<br>
<table border="1">
  <tr>
    <th>메뉴</th>
    <th>설명</th>
    <th>DB 테이블</th>
  </tr>
  <tr>
    <td>BBS1</td>
    <td>회원제 쿠키 조회수 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr>
  <tr>
    <td>BBS2</td>
    <td>회원제 쿠키 댓글 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr>
  <!-- <tr>
    <td>BBS1-2</td>
    <td>회원제 ip 조회수 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS2-2</td>
    <td>회원제 ip 댓글 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS3</td>
    <td>회원제 카테고리 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS4</td>
    <td>회원제 비밀/공지글 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS5</td>
    <td>회원제 익명 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS6</td>
    <td>비회원제 비밀번호 게시글/댓글 게시판</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS7</td>
    <td>회원제 기본 다른 DB 등급제 게시판</td>
    <td>azuma_php_bbs12</td>
  </tr> -->
  <tr>
    <td>BLOG1</td>
    <td>회원제 기본 블로그</td>
    <td>azuma_php_blog1</td>
  </tr>
  <tr>
    <td>BLOG2</td>
    <td>회원제 댓글 블로그</td>
    <td>azuma_php_blog1</td>
  </tr>
  <!-- <tr>
    <td>BLOG3</td>
    <td>회원제 카테고리 블로그</td>
    <td>azuma_php_blog1</td>
  </tr> -->
  <!-- <tr>
    <td>BLOG4</td>
    <td>회원제 인스타그램형 블로그</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BLOG5</td>
    <td>회원제 익명 블로그</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BLOG6</td>
    <td>비회원제 비밀번호 게시글/댓글 블로그</td>
    <td>azuma_php_bbs1</td>
  </tr> -->
  <!-- <tr>
    <td>BBS7</td>
    <td>회원제 기본 다른 DB 등급제 블로그</td>
    <td>azuma_php_bbs12</td>
  </tr> -->
  <tr>
    <td>Login1</td>
    <td>무등급제 기본 유저인포</td>
    <td>azuma_php_user1</td>
  </tr>
  <!-- <tr>
    <td>Login2</td>
    <td>등급제 기본 유저인포</td>
    <td>azuma_php_user1</td>
  </tr> -->
  <!-- <tr>
    <td>User1</td>
    <td>등급제 기본 유저인포 보기/수정 페이지</td>
    <td>azuma_php_user1</td>
  </tr> -->

  <tr>
    <td colspan="3" style="text-align:center;"><b>웹호스팅 PHP 아카이브</b></td>
  </tr>
  <tr>
    <td colspan="3">
    1. SQL문 (MySQL)<br>
    <a href="with_index/azuma_php_user1.sql">azuma_php_user1</a><br>
    <a href="with_index/azuma_php_bbs1.sql">azuma_php_bbs1</a><br>
    <a href="with_index/azuma_php_blog1.sql">azuma_php_blog1</a><br>
    <a href="with_index/azuma_php_comment1.sql">azuma_php_comment1</a><br>
    2. 코드 (PHP)<br>
    <a href="http://yangdonghwa.000webhostapp.com/php_tech/loginbbs/loginbbs.zip">다운로드</a><br>
    </td>
  </tr>

</table><br>

<!-- Bottom -->
<?php require('lib/bottom.php'); ?>
