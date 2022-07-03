<div class="container">
  <hr>
  <?php
  if($bbs_c_count > 0){ // 댓글 1개 이상인 경우
  echo "전체 {$bbs_c_count}개의 댓글이 있습니다.";
  } else { // 댓글 0개인 경우
    echo "현재 댓글이 없습니다. 첫 댓글을 남겨주세요.";
  }
  echo "<br>";

  // 게시물에 해당 코멘트 불러오기 : cid 게시판 종류, no 게시판 넘버 (* cno 댓글 넘버)
  $sql_comment = "SELECT * FROM `azuma_f_comment1` WHERE del_flg='0' AND cid='bbs1' AND no={$v['no']}";




  // <!-- 기존 댓글 출력 공간 -->

  // sql문을 실행하면서 그 값을 변수 $c에 집어넣는다.
  foreach($conn->query($sql_comment) as $c){

      // 수정 버튼 눌러 수정 세션을 켠 경우
      if(isset($_SESSION['comment_mod_switch'])){

        // 켜진 수정 세션이 cno에 해당하는 수정 세션인 경우 : 수정하는 댓글에 해당하는 경우
        if($_SESSION['comment_mod_switch'] == $c['cno']){

            // <!-- 댓글 수정모드 -->
            echo "<form action='_comment_modify_2nd.php' method='post'>";
            echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
            ?>
              <input type='text' name='comment' value="<?=$c['comment']?>" minlength='1' maxlength='100'>
              <input type='hidden' name='cno' value="<?=$c['cno']?>">
              <input type='hidden' name='nickname' value="<?=$_SESSION['nickname']?>">
              <button type='submit'>수정</button>
              <button type='button' onclick="location.href='_comment_cancel.php'">취소</button>
              <br>
            </form>

        <?php
        } else {
            // 수정 대상이 아닌 다른 댓글의 경우
            // <!-- 댓글 정상 호출 -->
            echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
            echo $c['comment']." ";
            // 수정일이 있으면 수정일 호출, 없으면 등록일 호출
            if($c['mod_date']){
              echo "{$c['mod_date']} 수정됨 ";
            } else {
              echo "{$c['reg_date']} ";
            }
            // 세션이 같을 경우 수정/삭제 버튼
            if(isset($_SESSION['id'])){ // 로그인 세션 있는 경우
              if($c['id'] == $_SESSION['id']){ // 로그인 세션 일치하는 경우
                  echo "<button onclick=\"location.href='_comment_modify_1st.php?cno={$c['cno']}'\">수정</button>"; // 여기 만들어야함!!
                  echo "<button onclick=\"location.href='_comment_delete.php?cno={$c['cno']}'\">삭제</button>";
              } else {} // 로그인 세션 일치하지 않는 경우
            } else {} // 로그인 세션 없는 경우
            echo "<br>";
        }
    }

    // 수정 버튼 안 누른 경우 : 모두 원래대로 나와야하는 경우
    else {
          // <!-- 댓글 정상 호출 -->
          echo htmlspecialchars($c['nickname'], ENT_QUOTES, 'UTF-8')." : ";
          echo $c['comment']." ";
          // 수정일이 있으면 수정일 호출, 없으면 등록일 호출
          if($c['mod_date']){
            echo "{$c['mod_date']} 수정됨 ";
          } else {
            echo "{$c['reg_date']} ";
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
<br>






  <!-- 새 댓글 등록 공간 -->
  <?php
  if(isset($_SESSION['comment_mod_switch'])){
  unset($_SESSION['comment_mod_switch']);
  } else {
  ?>
  <form class="form-horizontal" action="_comment_write.php" method="post">
    <div class="form-group">
      <br>
      <label>댓글: </label>
      <input type='hidden' name='no' value='<?=$v['no']?>'>
      <input type='hidden' name='cid' value='bbs1'> <!-- ★ 게시판 ID : cid는 bbsid와 동일하게 설정한다. cid가 없으면 타게시판/블로그와 no 동일할 경우에 다른 곳의 댓글이 여기서도 댓글이 보이게 된다. -->
      <input type='hidden' name='id' value='<?=$_SESSION['id']?>'>
      <input type='hidden' name='nickname' value='<?=$_SESSION['nickname']?>'>
      <textarea class="form-control" rows="5" id="commentContent" name="comment" minlength='1' maxlength='300'></textarea>
      <br>
      <button type="submit" class="btn pull-right">등록</button>
    </div>
  </form>
</div>

<?php } ?>
