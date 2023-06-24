// [Promise/then]

// 1. Promise 함수 선언
// Promise는 성공할 때 resolve를, 실패할 때 reject를 호출해준다. (reject는 생략 가능)
// Promise는 함수의 return에 new Promise((resolve, reject) => { 비동기처리함수 + reject(error) + resolve(value) }를 넣어서 구현한다.

function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1

      // reject : 실패한 케이스
      if (value === 5) {
        const error = new Error()
        error.name = "ValueIsFiveError"
        reject(error)
        return
      }

      // resolve : 성공한 케이스
      console.log(value)
      resolve(value)
    }, 1000)
  })
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)

/*
  1. 해결했으나 여전히 남은 숙제
    Promise/then을 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 된다.
    하지만, 이것도 여전히 불편한점이 있다.
      첫째, 에러를 잡을 때 "에러가 몇번째?"에서 발생했는지 알아내기 어렵다.
      둘째, 특정 "조건의 분기"를 나누는 작업이 어렵다.
      셋째, 특정 "값을 공유"해가면서 작업을 처리하기 까다롭다. 
    다음에서 배울 async/await 을 사용하면, 이러한 문제점을 깔끔하게 해결할 수 있다.
*/
