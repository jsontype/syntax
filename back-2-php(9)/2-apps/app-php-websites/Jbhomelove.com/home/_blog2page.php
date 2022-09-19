<?php
// <!-- BLOG DB Loading START -->
if(isset($_GET['current_blog_page'])){
    $current_blog_page=$_GET['current_blog_page'];
} else {$current_blog_page=1;}
// ▲ 페이지 없을 시 1 자동부여
$start_blog = ($current_blog_page-1)*9;
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
$sqlall_blog = "SELECT * FROM `azuma_jb_blog2` where delflag = '0'"; // ★ 블로그 ID
$count_blog = mysqli_query($conn, $sqlall_blog)->num_rows;
$end_blog_page = ceil($count_blog/9);
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
$sql_blog = "SELECT * FROM `azuma_jb_blog2` where delflag = '0' order by no desc limit $start_blog, 9"; // ★ 블로그 ID
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
// ▲ 개발자 주 : del_flg가 0인 모든 db를 가져온다. order by no desc는 no 순으로 거꾸로(내림차순)으로 블로그형태로 최신글이 먼저 나오게 한다.
// ▲ 개발자 주 : limit 0, 5는 처음(0)부터 시작해 5개씩만 나오게 한다는 뜻. 이때 0의 값은 (현재페이지-1)x5를 하면 됨
$result_blog = mysqli_query($conn, $sql_blog);
// ▲ sql 실행
$prev_blog_page = $current_blog_page-1;
$next_blog_page = $current_blog_page+1;
// ▲ page 변수 처리
// <!-- BLOG DB Loading END -->
?>
