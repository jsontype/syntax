<?php

    $id = $_SESSION['id'];
    $name = $_SESSION['name'];
    
    // XSS 방지 처리 대상
    $category = htmlspecialchars($_POST['category'], ENT_QUOTES, 'UTF-8');
    $title = htmlspecialchars($_POST['title'], ENT_QUOTES, 'UTF-8');
    $content = htmlspecialchars($_POST['content'], ENT_QUOTES, 'UTF-8');

    $img_file = $_FILES['img_file'];
    $img_size = $_FILES['img_file']['size'];

    require('_bbs_file_upload.php');

    if($result) {
        // 파일이 있을 경우
        $sql = "INSERT INTO `bbs1` (`name`, `title`, `category`, `content`, `id`, `img_file`, `img_size`) VALUES ('$name', '$title', '$category', '$content', '$id', '$file_name', '$img_size')";
    } else {
        // 파일이 없을 경우
        $sql = "INSERT INTO `bbs1` (`name`, `title`, `category`, `content`, `id`) VALUES ('$name', '$title', '$category', '$content', '$id')";
    }

    require('_conn.php');
    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "<script>alert('글 작성이 완료되었습니다.');location.href='bbs.php'</script>";
    }
?>