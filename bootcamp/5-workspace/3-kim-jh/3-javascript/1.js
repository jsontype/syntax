/**
 * 파라미터에 1을 더한다.
 * @param {Number} item 1을 더할 값 
 * @returns 1을 더한 결과값
 */
function plusOne (item) {
    return item + 1
}

// 실무에서는 화살표함수를 쓴다.
const func1 = function (item) { return item + 1 }
const func2 = (item) => { return item + 1 }
const func3 = item => { return item + 1 }
const func4 = item => item + 1 // 제일 많이 씀
const func5 = item => { // 제일 많이 씀
    const result = item + 1
    return result
}

// 실무에서 void일때는 {}는 쓴다.
const func6 = item => { console.log(item + 1) } // 제일 많이 씀

// 실무에서 파라미터 없으면..?
const func7 = () => { console.log('hello world!') }

// 파라미터가 여러개 일때
const func8 = (item1, item2, item3, func) => func(item1 + item2 + item3)
