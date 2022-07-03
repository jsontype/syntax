<?php
    require ('_conn.php');

    $title = nl2br(htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8'));
    $content = nl2br(htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8'));
    $type = $_POST['type'];

    $SQL = "INSERT INTO `codememo2` (`title`, `type`, `content`) VALUES ('$title', '$type', '$content')";
    mysqli_query($conn, $SQL)
?>

<script>location.href="code.php"</script>