// 공통 서비스

function setTopMenu () {
    for(let i = 0; i < menuList.length; i++) {
        document.querySelector('.topMenu'+i).innerHTML = menuList[i]
    }    
}

function setBottomMenu () {
    for(let i = 0; i < menuList.length; i++) {
        document.querySelector('.bottomMenu'+i).innerHTML = menuList[i]
    }    
}

function setMeta () {
    document.querySelector('html').lang = language
    document.querySelector('title').innerHTML = tabName
}

function setCommonContact () {
    document.querySelector('#commonContactSubTitle').innerHTML = commonContactSubTitle
    document.querySelector('#commonContactTitle').innerHTML = commonContactTitle
}

/**
 * Mount
 */
function init () {
    setMeta()
    setTopMenu()
    setBottomMenu()
    setCommonContact()
}

init()