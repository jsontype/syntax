<?php
    require ('_conn.php');

    $title = $_POST['title'];
    $type = $_POST['type'];
    $content = $_POST['content'];

    $SQL = "INSERT INTO `codememo2` (`title`, `type`, `content`) VALUES ('$title', '$type', '$content')";
    mysqli_query($conn, $SQL)
?>

<script>location.href="index.php"</script>