// 연락처 서비스

// *** TODO : 주소 클릭시 구글 맵으로 이동
// *** TODO : 라인, 카카오 아이디 클릭시 친추 화면으로 이동
// *** TODO : 이메일 클릭시 gmail 편지쓰기로 이동

function setTitle() {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#subtitle').innerHTML = subtitle
}

/**
 * Mount
 */
 function init() {
    setTitle()
}

init()