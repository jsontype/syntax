// 배열 : 인덱스와 밸류가 있는 변수 
function clicked() {
    let a = [1, 2, 3, 4, 5]
    // console.log('a배열:', a)
    // console.log('배열의 길이:', a.length)
    // console.log('배열의 0번째 인덱스:', a[0])
    // console.log('배열의 1번째 인덱스:', a[1])
    // console.log('배열의 2번째 인덱스:', a[2])
    // console.log('배열의 3번째 인덱스:', a[3])
    // console.log('배열의 4번째 인덱스:', a[4])

    let b = [1]
    // 배열 추가
    // b.push(2)
    // b.push(3)
    // b.push(4)
    // b.push(5)
    // console.log('b배열:', b)

    // 배열 삭제1 : pop()
    // b.pop() // 마지막에 있는 값 하나를 삭제
    // b.pop() // 마지막에 있는 값 하나를 삭제
    // console.log('b배열:', b)
    // 배열 삭제2 : splice(시작위치, 제거건수)
    // b.splice(3, 1)
    // b.splice(2, 1)
    // b.splice(1, 3)
    // console.log('b배열:', b)

    // 뒤에서 첫번째 인덱스의 값
    // console.log('맨 뒤의 인덱스의 값:', b[b.length - 1])

    // Set (집합) 데이터타입을 이용하여 배열 중복값을 제거하는 방법
    let c = [1, 2, 3, 1, 1, 1, 1, 1, 1, 4, 5]
    let setC = new Set(c) // c의 값으로 새로운 Set를 만들어서 setC에 넣어라.
    console.log(setC)
    c = Array.from(setC) // Set -> Array로 캐스팅
    console.log('중복제거된 배열:', c)
}