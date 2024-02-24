// 관리자 서비스

function setTitle() {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#subtitle').innerHTML = subtitle
}

function login() {
  location.href = "https://jsontype.github.io/corp"
}

/**
 * Mount
 */
 function init() {
    setTitle()
}

init()
