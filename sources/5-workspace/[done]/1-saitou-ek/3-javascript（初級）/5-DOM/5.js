// Document Object Model = DOM
// console.log(document)

// DOM 選択
const title = document.querySelector('#title') // selector = id # , class . , tag
console.log(title)

// DOM 変更
title.innerHTML = 'Hello JS! '
title.setAttribute('class', 'title1')

// DOM 作成
const link = document.createElement('a')
link.setAttribute('id', 'son')
link.innerHTML = 'Link'
link.href = 'http://google.com'
title.appendChild(link)

// DOM 削除
// let son = document.querySelector("#son")
// let parent = ""
// if (son && son.parentElement) {
//     parent = son.parentElement
//     parent.removeChild(son)
// }
