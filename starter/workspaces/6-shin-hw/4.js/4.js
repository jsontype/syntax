function act () {
    // 배열 Array 데이터타입 : index와 value로 구성
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 111]
    console.log(a.length) // 길이는 3개
    console.log(a[2]) // 인덱스는 0부터
    console.log(a[a.length - 1]) // 마지막 인덱스의 값을 꺼내는 방법?

    // 반복문 : for (초기값; 조건; 끝났으면 추가)
    for (let i = 0; i < a.length; i = i + 1) {
        console.log('a의 ' + i + '번째 인덱스 : ' + a[i])
    }
}