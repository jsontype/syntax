/*
    반복문
    반복문은 어레이(배열) 외에는 쓸수가 없다.
    오브젝트에서도 사용할 수 없다. 
    이미 배운바 있을 것이다.
    반복문은 배열의 인덱스를 for로 빙글빙글 돌면서 특정 조건의 밸류값을 취하기 위해서,
    for문과 if문을 섞어서 사용한다.
    이 챕터에서는 이 for 문의 기본사용법을 포함하여, 
    for 대신 사용할 수 있는 보다 고급스러운 문법들도 살펴보겠다.
*/

let array1 = [1, 3, 3, 4, 4, 5]
let array2 = [
    { name: 'apple', count: 2 },
    { name: 'banana', count: 7 },
    { name: 'orange', count: 3 },
]

// 입력값을 받아서, 해당 값이 있는 지를 알려준다.
let search1 = Number(prompt('어떤 숫자? '))
for (let i = 0; i < array1.length; i++) {
    if (search1 === array1[i]) {
        console.log(array1[i] + '가 있습니다.')
    } else { console.log('없습니다.') }
}

// '과일 종류' 입력값을 받아서, 해당 과일이 몇개 있는 지를 알려준다.
let search2 = prompt('어떤 과일? ')
for (let i = 0; i < array2.length; i++) {
    if (search2 === array2[i].name) {
        console.log(array2[i].name + '이 ' + array2[i].count + '개 있습니다.')
    } else { console.log('없습니다.') }
}

