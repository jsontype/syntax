<?php
require ('_conn.php');
$sql = "UPDATE `codememo1` SET `del_flg` = 1";
$result = mysqli_query($conn, $sql);
if ($result) {
    echo "<script>location.href='index.php';</script>";
}
?>
