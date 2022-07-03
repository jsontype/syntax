// 관리자 서비스

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