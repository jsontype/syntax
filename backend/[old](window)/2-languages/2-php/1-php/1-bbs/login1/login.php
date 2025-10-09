<?php require('../lib/top_in_folder.php'); ?>

<h2>로그인</h2>
<form action='_login.php' method='post'>
  <input type='text' name='id' placeholder='ID' maxlength='15' />
  <input type='password' name='pw' placeholder='비밀번호' maxlength='30' />
  <button type='submit'>로그인</button>
  <button type='button' onclick="location.href='join.php'">회원가입</button>
</form>

<?php require('../lib/bottom_in_folder.php'); ?>
