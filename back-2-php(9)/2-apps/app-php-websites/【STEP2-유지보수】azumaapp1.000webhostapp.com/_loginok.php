<?php
    require('_conn.php');

    $sql = "SELECT * FROM `user` WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    foreach($result as $user) {
        $_SESSION['no'] = $user['no'];
        $_SESSION['id'] = $user['id'];
        $_SESSION['name'] = $user['name'];
        $_SESSION['address'] = $user['address'];
    }
?>
