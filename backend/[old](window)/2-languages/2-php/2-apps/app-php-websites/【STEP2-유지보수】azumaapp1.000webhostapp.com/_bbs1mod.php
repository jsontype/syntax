<?php
    require('_conn.php');

    $no = $_POST['no'];
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
        $sql = "UPDATE `bbs1` SET `name`='$name', `category`='$category', `title`='$title', `img_file`='$file_name', `img_size`='$img_size', `mod_date`=CURRENT_TIMESTAMP(), `content`='$content' WHERE `no`='$no'";
    } else {
        // 파일이 없을 경우
        $sql = "UPDATE `bbs1` SET `name`='$name', `category`='$category', `title`='$title', `mod_date`=CURRENT_TIMESTAMP(), `content`='$content' WHERE `no`='$no'";
    }

    $result = mysqli_query($conn, $sql);
    if ($result) {
        echo "<script>alert('글 수정이 완료되었습니다.');location.href='bbs.php'</script>";
    }
?>