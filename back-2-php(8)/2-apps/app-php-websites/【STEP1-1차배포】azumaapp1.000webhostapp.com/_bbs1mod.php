<?php
    require('_conn.php');

    $no = $_POST['no'];
    $name = $_SESSION['name'];
    $category = $_POST['category'];
    $title = $_POST['title'];
    $content = $_POST['content'];

    $sql = "UPDATE `bbs1` SET `name`='$name', `category`='$category', `title`='$title', `mod_date`=CURRENT_TIMESTAMP(), `content`='$content' WHERE `no`='$no'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "<script>alert('글 수정이 완료되었습니다.');location.href='bbs.php'</script>";
    }
?>