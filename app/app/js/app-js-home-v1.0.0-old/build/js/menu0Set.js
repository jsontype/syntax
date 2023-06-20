// 소개 서비스

function setItemTitle() {
  for (let i = 0; i < itemTitleList.length; i++) {
    document.querySelector("#itemTitle" + i).innerHTML = itemTitleList[i]
  }
}

function setItem() {
  for (let i = 0; i < item0NameList.length; i++) {
    document.querySelector("#item0Icon-" + i).className = item0IconList[i]
    document.querySelector("#item0Name-" + i).innerHTML = item0NameList[i]
    document.querySelector("#item0Href-" + i).href = item0HrefList[i]
  }
  for (let i = 0; i < item1NameList.length; i++) {
    document.querySelector("#item1Name-" + i).innerHTML = item1NameList[i]
    document.querySelector("#item1Content-" + i).innerHTML = item1ContentList[i]
  }
  for (let i = 0; i < item2NameList.length; i++) {
    document.querySelector("#item2Name-" + i).innerHTML = item2NameList[i]
    document.querySelector("#item2Content-" + i).innerHTML = item2ContentList[i]
  }
  for (let i = 0; i < item3NameList.length; i++) {
    document.querySelector("#item3Name-" + i).innerHTML = item3NameList[i]
    document.querySelector("#item3Content-" + i).innerHTML = item3ContentList[i]
  }
  for (let i = 0; i < item4ContentList.length; i++) {
    document.querySelector("#item4Content-" + i).innerHTML = item4ContentList[i]
  }
  for (let i = 0; i < item9NameList.length; i++) {
    document.querySelector("#item9Icon-" + i).className = item9IconList[i]
    document.querySelector("#item9Name-" + i).innerHTML = item9NameList[i]
    document.querySelector("#item9Content-" + i).innerHTML = item9ContentList[i]
  }
}

/**
 * Mount
 */
function init() {
  setItemTitle()
  setItem()
}

init()
