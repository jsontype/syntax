<?php // [2] 댓글 호출
// <!-- DB 호출 : 삽입되는 페이지에 이미 호출이 있을 경우 주석화로 서버 과부하 방지 -->
// require ('_conn.php');

// <!-- 게시물에 해당하는 코멘트 불러오기 -->
$sql_comment = "SELECT * FROM `azuma_php_comment1` WHERE delflag='0' AND cid='bbs2' AND no={$v['no']}"; // ★ 게시판 ID : cid는 bbsid와 동일하게 설정한다. cid가 없으면 타게시판/블로그와 no 동일할 경우에 다른 곳의 댓글이 여기서도 댓글이 보이게 된다.

// sql문을 실행하면서 그 값을 변수 $c에 집어넣는다.
foreach($conn->query($sql_comment) as $c){

      // 수정 버튼 눌러 세션을 켠 경우
      if(isset($_SESSION['comment_mod_switch'])){

        // 그 세션이 cno에 해당하는 세션을 갖고 있는 경우 : 수정하는 댓글에 해당하는 경우
        if($_SESSION['comment_mod_switch'] == $c['cno']){
            // <!-- 댓글 수정모드 호출 Start -->
            echo "<form action='_comment_modify_2st.php' method='post'>";
            echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
            ?>
              <input type='text' name='comment' value="<?=$c['comment']?>" minlength='1' maxlength='100'>
              <input type='hidden' name='cno' value="<?=$c['cno']?>">
              <input type='hidden' name='nickname' value="<?=$_SESSION['nickname']?>">
              <button type='submit'>수정</button>
              <button type='button' onclick="location.href='_comment_cancel.php'">취소</button>
            </form>
            <!-- 댓글 수정모드 호출 End -->

        <?php
        // "그 세션이 cno에 해당하는 세션을 갖고 있는 경우 : 수정하는 댓글에 해당하는 경우" 닫기
        }

        // 그 세션이 cno에 해당하는 세션을 갖고 있지 않은 경우 : 수정하는 댓글 외의 다른 댓글인 경우
        else {

                    // <!-- 댓글 정상 호출 Start -->
                    echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
                    echo $c['comment']." ";
                    // 수정일이 있으면 수정일 호출, 없으면 등록일 호출
                    if($c['moddate']){
                      echo "{$c['moddate']} 수정됨 ";
                    } else {
                      echo "{$c['regdate']} ";
                    }
                    // 세션이 같을 경우 수정/삭제 버튼
                    if(isset($_SESSION['id'])){ // 로그인 세션 있는 경우
                      if($c['id'] == $_SESSION['id']){ // 로그인 세션 일치하는 경우
                          echo "<button onclick=\"location.href='_comment_modify_1st.php?cno={$c['cno']}'\">수정</button>"; // 여기 만들어야함!!
                          echo "<button onclick=\"location.href='_comment_delete.php?cno={$c['cno']}'\">삭제</button>";
                      } else {} // 로그인 세션 일치하지 않는 경우
                    } else {} // 로그인 세션 없는 경우
                    // <!-- 댓글 정상 호출 End -->
                    echo "<br>";
            } // "그 세션이 cno에 해당하는 세션을 갖고 있지 않은 경우 : 수정하는 댓글 외의 다른 댓글인 경우" 닫기

    // "수정 버튼 눌러 세션을 켠 경우" 닫기
    }

    // 수정 버튼 안 누른 경우 : 모두 원래대로 나와야하는 경우
    else {

          // <!-- 댓글 정상 호출 Start -->
          echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
          echo $c['comment']." ";
          // 수정일이 있으면 수정일 호출, 없으면 등록일 호출
          if($c['moddate']){
            echo "{$c['moddate']} 수정됨 ";
          } else {
            echo "{$c['regdate']} ";
          }
          // 세션이 같을 경우 수정/삭제 버튼
          if(isset($_SESSION['id'])){ // 로그인 세션 있는 경우
            if($c['id'] == $_SESSION['id']){ // 로그인 세션 일치하는 경우
                echo "<button onclick=\"location.href='_comment_modify_1st.php?cno={$c['cno']}'\">수정</button>";
                echo "<button onclick=\"location.href='_comment_delete.php?cno={$c['cno']}'\">삭제</button>";
            } else {} // 로그인 세션 일치하지 않는 경우
          } else {} // 로그인 세션 없는 경우
          // <!-- 댓글 정상 호출 End -->
          echo "<br>";

    // "수정 버튼 안 누른 경우 : 모두 원래대로 나와야하는 경우" 닫기
    }

} // foreach문 닫기
?>

<!-- 새 댓글 달기 버튼 -->
<?php
if(isset($_SESSION['comment_mod_switch'])){
unset($_SESSION['comment_mod_switch']);
} else {
?>
<form action="_comment_write.php" method="post">
  <input type='text' name='comment' placeholder='댓글을 달아주세요.' minlength='1' maxlength='100'>
  <input type='hidden' name='no' value='<?=$v['no']?>'>
  <input type='hidden' name='cid' value='bbs2'> <!-- ★ 게시판 ID : cid는 bbsid와 동일하게 설정한다. cid가 없으면 타게시판/블로그와 no 동일할 경우에 다른 곳의 댓글이 여기서도 댓글이 보이게 된다. -->
  <input type='hidden' name='id' value='<?=$_SESSION['id']?>'>
  <input type='hidden' name='nickname' value='<?=$_SESSION['nickname']?>'>
  <button type='submit'>댓글</button>
</form>

<?php } ?>
