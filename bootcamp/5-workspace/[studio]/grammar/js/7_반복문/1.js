// 반복문 조건 : 배열 변수가 없으면 사용할 수 없다.
// 반복문 : 배열의 인덱스를 for로 빙글빙글 돌면서 반복된 특정 작업을 수행하는 문
function clicked() {
    // let arr1 = [11, 22, 33, 44, 55]
    // let a = Number(prompt('어떤 숫자를 확인해보시겠습니까?'))
    // for (let i = 0; i < arr1.length; i++) {
    //     // console.log('arr1[i]:', arr1[i])
    //     if (a == arr1[i]) {
    //         console.log(String(i+1) + '번째에 ' + String(arr1[i]) + ' 이라는 값이 있습니다.')
    //     }
    // } 

    // let arr2 = [
    //     { name: 'apple', count: 2 },
    //     { name: 'banana', count: 7 },
    //     { name: 'orange', count: 3 },
    // ]
    // // console.log(arr2)
    // let b = prompt('어떤 과일을 확인하시겠습니까?')
    // let c = 0
    // for (let i = 0; i < arr2.length; i++) {
    //     if (b == arr2[i].name) {
    //         c++
    //         console.log(arr2[i].count + '개 있습니다.')
    //     }
    // }

    // if (!c) {
    //     console.log('그런 과일은 없어요.')
    // }
    
    // 구구단 : 중복 for문
    let a = [2,3,4,5,6,7,8,9]
    let b = [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            console.log(String(a[i])+'x'+String(b[j])+'='+String(a[i]*b[j]))
        }
    }
}