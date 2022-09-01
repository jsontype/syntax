// 반복문 심화
function init() {
    let a = [11, 22, 22, 23, 25]
    let b = 24

    // 기존 for의 방식
    // for (let i = 0; i < a.length; i++) {
    //     if(a[i] == b) {
    //         console.log('당첨되셨습니다.')
    //     }
    // }

    // ★indexOf : 조건에 해당하는 값이 몇번째 인덱스에 있는지를 표시
    // if(a[a.indexOf(b)] != undefined) {
    //     console.log('당첨되셨습니다.')
    // }

    // ★filter : 조건에 해당하는값이 몇개 있는지를 검색해서, 배열에 담아서 표시
    // let c = a.filter(function(item) { return item == b }) // c == [22, 22]
    // if(c.length != 0) {
    //     console.log('당첨되셨습니다.')
    // }
    
    // ★map : 밸류값, 인덱스값을 동시에 꺼낸다.
    // a.map(function(v, i) { 
    //     if (b == v) {
    //         console.log(i+1+'번째 상품에 당첨되셨습니다.')
    //     }
    // })

    // ★foreach : 배열 안에 있는 값들을 순서대로 하나씩 꺼낸다.
    // a.forEach(function(item) { console.log(item) })
    a.forEach(function(item) { 
        if(item == b) {
            console.log('당첨되셨습니다.')
        }
    })

    a.forEach(function(value, index, array) { 
        console.log('value:', value) // 첫번째 인수는 배열의 각각의 값(value)
        console.log('index:', index) // 두번째 인수는 배열의 인덱스(index)
        console.log('array:', array) // 세번째 인수는 배열 그 자체
    })
}

init()