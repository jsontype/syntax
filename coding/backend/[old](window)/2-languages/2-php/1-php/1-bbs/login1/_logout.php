<?php
    // session_start();
    // * 주석화 이유 : session.auto_start 사용 (설명은 _login.php 참조)

    // 세션 삭제
    session_unset();

    // 세션 파괴
    SESSION_DESTROY();

    // 세션 재시작 * session.auto_start 사용시, SESSION_DESTORY하면 php가 적용이 꺼지므로, 즉시 재시작을 사용 (session.auto_start 미사용시 주석화)
    session_start();

    // 로그아웃 알림과 새로고침 이동
    echo "<script>alert('로그아웃 되었습니다.');location.href='login.php'</script>";
?>
