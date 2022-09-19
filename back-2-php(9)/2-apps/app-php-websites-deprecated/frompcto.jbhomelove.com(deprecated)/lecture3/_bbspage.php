<?php
// <!-- BBS DB Loading START -->
if(isset($_GET['current_bbs_page'])){
    $current_bbs_page=$_GET['current_bbs_page'];
} else {$current_bbs_page=1;}
// ▲ 페이지 없을 시 1 자동부여
$start_bbs = ($current_bbs_page-1)*5;
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
$sqlall_bbs = "SELECT * FROM `azuma_f_bbs3` where del_flg = '0'";
$count_bbs = mysqli_query($conn, $sqlall_bbs)->num_rows;
$end_bbs_page = ceil($count_bbs/5);
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
// [Toggle] 최신순 ON/OFF
// $sql_bbs = "SELECT * FROM `azuma_f_bbs3` where del_flg = '0' order by no desc limit $start_bbs, 5"; // ★ 게시물 ID
$sql_bbs = "SELECT * FROM `azuma_f_bbs3` where del_flg = '0' limit $start_bbs, 5"; // ★ 게시물 ID
// ▲ ★ 넘기는 개수 수정할 때 맨 끝 숫자 수정
// ▲ 개발자 주 : del_flg가 0인 모든 db를 가져온다. order by no desc는 no 순으로 거꾸로(내림차순)으로 블로그형태로 최신글이 먼저 나오게 한다.
// ▲ 개발자 주 : limit 0, 5는 처음(0)부터 시작해 5개씩만 나오게 한다는 뜻. 이때 0의 값은 (현재페이지-1)x5를 하면 됨
$result_bbs = mysqli_query($conn, $sql_bbs);
// ▲ sql 실행
$prev_bbs_page = $current_bbs_page-1;
$next_bbs_page = $current_bbs_page+1;
// ▲ page 변수 처리
// <!-- BBS DB Loading END -->
?>
