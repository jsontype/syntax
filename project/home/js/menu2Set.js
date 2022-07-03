// 프로그램 서비스

function setTitle() {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#subtitle').innerHTML = subtitle    
}

function setItem() {
    for (let i = 0; i < item0NameList.length; i++) {
        document.querySelector('#item0Name-'+i).innerHTML = item0NameList[i]
        document.querySelector('#sideItemContent-0-'+i).innerHTML = String(i+1)+'. '+item0NameList[i]
        document.querySelector('#item0Content-'+i).innerHTML = item0ContentList[i]
        document.querySelector('#item0TagName-'+i).innerHTML = item0TagList[i]
        document.querySelector('#item0Status-'+i).innerHTML = item0StatusList[i]
    }

    document.querySelector('#sideItemName-0').innerHTML = sideItemName0List[0]
    
    document.querySelector('#sideItemName-1').innerHTML = sideItemName1List[0]
    for (let i = 0; i < sideItemContent1List.length; i++) {
        document.querySelector('#sideItemHref-1-'+i).href = sideItemHref1List[i]
        document.querySelector('#sideItemContent-1-'+i).innerHTML = sideItemContent1List[i]
    }

    document.querySelector('#sideItemName-2').innerHTML = sideItemName2List[0]
    for (let i = 0; i < sideItemContent2List.length; i++) {
        document.querySelector('#sideItemHref-2-'+i).href = sideItemHref2List[i]
        document.querySelector('#sideItemContent-2-'+i).innerHTML = sideItemContent2List[i]
    }

    for (let i = 0; i < sideBannerList.length; i++) {
        document.querySelector('#sideBanner-'+i).innerHTML = sideBannerList[i]
        document.querySelector('#sideBannerHref-'+i).href = sideBannerHrefList[i]
    }
}

/**
 * Mount
 */
function init () {
    setTitle()
    setItem()
}

init()

/**
 * Methods
 */
function clickPage (page) {
    document.querySelector('.page1').classList.remove('active')
    document.querySelector('.page2').classList.remove('active')
    document.querySelector('.page3').classList.remove('active')
    document.querySelector('.page4').classList.remove('active')
    document.querySelector('.page'+page).classList.add('active')

    document.querySelector('.post1').classList.add('d-none')
    document.querySelector('.post2').classList.add('d-none')
    document.querySelector('.post3').classList.add('d-none')
    document.querySelector('.post4').classList.add('d-none')
    document.querySelector('.post'+page).classList.remove('d-none')
}