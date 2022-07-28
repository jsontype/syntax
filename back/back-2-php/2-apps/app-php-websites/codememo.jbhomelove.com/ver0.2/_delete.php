<?php
    require ('_conn.php');

    $no = $_GET['no'];
    $SQL = "UPDATE `codememo2` SET `del_flg` = 1 WHERE `no` = $no";

    mysqli_query($conn, $SQL);
?>

<script>location.href="code.php"</script>