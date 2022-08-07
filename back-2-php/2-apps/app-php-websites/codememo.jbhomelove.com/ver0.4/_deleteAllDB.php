<?php
require ('_conn.php');
$sql = "DELETE FROM `codememo1`";
$result = mysqli_query($conn, $sql);
if ($result) {
    echo "<script>location.href='index.php';</script>";
}
?>
