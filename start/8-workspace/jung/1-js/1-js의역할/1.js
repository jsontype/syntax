const bbsList = [
  {
    userName: "Jung",
    title: "안녕하세요1",
    content: "코딩 공부하려고 왔습니다. 1",
  },
  {
    userName: "Hwang",
    title: "안녕하세요2",
    content: "코딩 공부하려고 왔습니다. 2",
  },
  {
    userName: "Kim",
    title: "안녕하세요3",
    content: "코딩 공부하려고 왔습니다. 3",
  },
]

function onClick() {
  // console.log(document) // DOM을 출력하는 것. JS는 DOM을 기본적으로 갖고 시작함.
  for (let i = 0; i < bbsList.length; i++) {
    const parent = document.querySelector("#bbs")
    // userName DOM 추가
    const userName = document.createElement("div")
    userName.innerHTML = bbsList[i].userName
    parent.appendChild(userName)
    // title DOM 추가
    const title = document.createElement("div")
    title.innerHTML = bbsList[i].title
    parent.appendChild(title)
    // content DOM 추가
    const content = document.createElement("div")
    content.innerHTML = bbsList[i].content
    parent.appendChild(content)
  }
}
