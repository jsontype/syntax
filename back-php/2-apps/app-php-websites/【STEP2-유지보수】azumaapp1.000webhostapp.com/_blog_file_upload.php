<?php
    if(isset($img_file)) {
        $dir = "blog_img/";
        $file_name = basename($img_file['name']);
        $tmp_name = $img_file['tmp_name'];

        // 파일이름의 중복을 방지
        $addName = strtotime(date("Y-m-d H:i:s")); // 현재 일시를 구한다.
        $milliseconds = round(microtime(true) * 1000); // 현재 일시를 밀리초로 바꾼다.
        $addName .= $milliseconds; // $addName = $addName.$milliseconds
        $file_name = $addName."_".$file_name; // 파일명 변경

        // 파일 업로드
        $result = move_uploaded_file($tmp_name, $dir.$file_name);
    }
?>