// 광고 서비스

function setTitle() {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#subtitle').innerHTML = subtitle
}

function setItem() {
    for (let i = 0; i < item0NameList.length; i++) {
        document.querySelector('#item0Src-'+i).src = item0SrcList[i]
        document.querySelector('#item0Name-'+i).innerHTML = item0NameList[i]
        document.querySelector('#item0Content-'+i).innerHTML = item0ContentList[i]
        document.querySelector('#item0Status-'+i).innerHTML = item0StatusList[i]
        document.querySelector('#item0Href-'+i).href = item0HrefList[i]
        document.querySelector('#item0Href-'+i).innerHTML = item0LinkNameList[i]
    }
    console.log(item1SubnameList[0])
    for (let i = 0; i < item1NameList.length; i++) {
        document.querySelector('#item1Subname-'+i).innerHTML = item1SubnameList[i]
        document.querySelector('#item1Name-'+i).innerHTML = item1NameList[i]
        document.querySelector('#item1Href-'+i).action = item1HrefList[i]
        document.querySelector('#item1ButtonName-'+i).innerHTML = item1ButtonNameList[i]
    }
}

/**
 * Mount
 */
 function init() {
    setTitle()
    setItem()
}

init()