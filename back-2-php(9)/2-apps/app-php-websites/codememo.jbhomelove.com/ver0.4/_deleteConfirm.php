<script>
    const isDeleteAll = confirm("정말로 전체 삭제를 하시겠습니까?");
    if (isDeleteAll === true) {
        const isDeleteDB = confirm("DB까지 초기화하시겠습니까?");
        if (isDeleteDB === true) {
            const pw = prompt('비밀번호는? (a****)');
            if (pw === 'admin') {
                location.href='_deleteAllDB.php';                
            }
            else {
                alert('비밀번호가 틀립니다!')
                location.href='index.php';
            }
        } else {
            location.href='_deleteAll.php';
        }
    } else {
        location.href='index.php';
    }
</script>


