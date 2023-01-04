/* 
    [JS 해시테이블]
        key와 value를 가지는 자료구조 형태이다. (Array는 index와 value를 가진 자료구조 형태이므로 해쉬테이블이 아니다.)

        해시테이블은 내재된 해시함수를 통해서 데이터를 치환시킨다.
        해시함수(hash function)란 데이터의 효율적 관리를 목적으로 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
        매핑 전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시값(hash value), 매핑하는 과정 자체를 해싱(hashing)라고 한다.

        Hash Table에는 Object가 있다. 문자열을 Key로 가질 수 있다.
        Hash Table에는 Set도 있다. 문자열을 Key로 가질 수 있으나, 중복된 값을 허용하지 않는다.
        Hash Table에는 Map도 있다. 문자열, 숫자, 함수도 Key로 가질 수 있다.
        자바스크립트의 해쉬테이블은 전통적으로는 Object가 있고, ES6부터 Map, Set이 추가되었다.
*/

// 1. 맵(Map)타입 : 탐색은 get(), 삽입은 set()으로 한다. key는 고유값으로써, 단 한개만 존재한다.

/* 
  ★ Object로도 다 구현할 수 있음에도 Map을 사용해야 할 이유
    1. ★★ 반복문 사용 가능. 키의 순서 보장.
    2. 더 많은 key의 유형 : Object의 key는 문자열 형태만 가능하다. 하지만 Map은 어떠한 형태라도 key로 사용될 수 있다.
    3. size 사용 가능 : Object의 경우 일반적인 방법으로는 size를 확인 할 수 없다. 하지만 Map은 가능하다.
    4. 덮어쓰기 금지 : key가 충돌할 위험이 없음
    5. 성능 : Map은 설계단계부터 데이터의 추가와 제거에 최적화 되어 있기 때문에 성능에 있어서 매우 유리하다. 
      (맥북프로에서 천만개의 데이터 셋 테스트시 1.6초 vs 1초 차이)
*/

// 해쉬맵 설정
let map = new Map()

let number = 0
let str = 'string'
let obj = { a: 1 }
let fnc = () => {
    console.log('fnc')
}

// value 설정 : set() = key로 가능한 자료형은 number, string, function, object, NaN, * key는 고유값으로써, 단 한개만 존재한다.
map.set(number, 4) // key에 number 가능
map.set(str, 1) // key에 string 가능
map.set(obj, 2) // key에 object 가능
map.set(fnc, 3) // key에 함수 가능
map.set(number, 0) // 덮어쓰기 가능

// value 얻기 : get()
console.log("map.get(str): ", map.get(str)) // 1
console.log("map.get(obj): ", map.get(obj)) // 2
console.log("map.get('none'): ", map.get('none')) // undefined  
console.log("map.get({ a: 1 }): ", map.get({ a: 1 })) // undefined, obj !== { a: 1 }

// value 찾기 : has()
console.log("map.has(str): ", map.has(str)) // true
console.log("map.has(obj): ", map.has(obj)) // true
console.log("map.has('none'): ", map.has('none')) // false

// value 삭제 : delete()
console.log("map.delete(str): ", map.delete(str)) // true 
console.log("map.get('none'): ", map.get('none')) // false

// value 존재유무 : size
console.log("map.size: ", map.size) // 4
console.log("map.length: ", map.length) // undefined

// key, value 쌍으로 출력
for (let [key, value] of map) {
  console.log(key + ' = ' + value)
}

// key만 출력
for (let key of map.keys()) {
  console.log(key)
}

// value만 출력
for (let value of map.values()) {
  console.log(value)
}



// 2. 세트(set)타입 : set은 중복되지 않는 값들을 모아둔 컬렉션이다.

// set에 들어갈 객체들을 준비해두자.
const kim = { name: 'kim' }
const lee = { name: 'lee' }
const choi = { name: 'choi' }

// const set1 = new Set([kim, lee, choi]) // 파라미터에는 이렇게 배열이 들어갈 수 있다.
const set1 = new Set() // 파라미터에 인자값이 없으면 빈 배열이 들어간 것과 같다. = new Set([])

// set은 배열과 다르게 push가 아닌 add로 추가를 한다.
set1.add(kim)
set1.add(lee)
set1.add(choi)
set1.add(lee) // 중복되므로 추가되지 않는다.
set1.add(choi) // 중복되므로 추가되지 않는다.

// 세트 출력
console.log('set1: ', set1)
console.log('set1.size: ', set1.size) // = arr1.length
console.log('set1.size: ', set1.has(kim)) // = arr1.include(kim)
for (let item of set1) {
    console.log(item)
}

// 중복이 제거된 set을 array로 변환해서 재사용한다.
const arr1 = Array.from(set1)

// 배열 출력
console.log('arr1: ', arr1)
