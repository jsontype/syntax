<?php

// if login ok
  $sql_user = "select * from `azuma_f_user1` where id='$id'";
  $result_user = mysqli_query($conn, $sql);
  foreach($result_user as $user){
    $realname=$user['realname'];
    $nickname=$user['nickname'];
    $gender=$user['gender'];
    $birth=$user['birth'];
    $email=$user['email'];
    $tel=$user['tel'];
    $phone=$user['phone'];
    $address=$user['address'];
    $bill1=$user['bill1'];
    $bill2=$user['bill2'];
    $bill3=$user['bill3'];
    $bill4=$user['bill4'];
    $bill5=$user['bill5'];
    $bill6=$user['bill6'];
    $bill7=$user['bill7'];
    $bill8=$user['bill8'];
    $bill9=$user['bill9'];
    $bill10=$user['bill10'];
  }

  $_SESSION['id'] = $id;
  $_SESSION['realname'] = $realname;
  $_SESSION['nickname'] = $nickname;
  $_SESSION['gender'] = $gender;
  $_SESSION['birth'] = $birth;
  $_SESSION['email'] = $email;
  $_SESSION['tel'] = $tel;
  $_SESSION['phone'] = $phone;
  $_SESSION['address'] = $address;
  $_SESSION['bill1'] = $bill1;
  $_SESSION['bill2'] = $bill2;
  $_SESSION['bill3'] = $bill3;
  $_SESSION['bill4'] = $bill4;
  $_SESSION['bill5'] = $bill5;
  $_SESSION['bill6'] = $bill6;
  $_SESSION['bill7'] = $bill7;
  $_SESSION['bill8'] = $bill8;
  $_SESSION['bill9'] = $bill9;
  $_SESSION['bill10'] = $bill10;
?>
