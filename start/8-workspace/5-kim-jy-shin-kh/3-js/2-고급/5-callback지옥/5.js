/*
    [비동기 작업]

    1. 실무에서 비동기 작업 다루기
        실무에서 비동기 작업을 다룰 때에는 callback을 그대로 쓰지 않는다.
        대신 Promise/then, async/await 문법을 사용하여 처리 할 수 있다.
        그러나 왜, callback이 있는데 저런 대안이 등장을 했을까?
    
    1. ★ 대안이 등장하게 된 배경 : 콜백지옥
        콜백을 통해 많은 비동기함수를(순차적으로) 실행하려 하다보니, 때때로 콜백 지옥이 발생하여 개발자들이 많은 어려움을 겪었다.
        예를 들어 work1(() => { work2(() => { work3(() => { } ... }).bind(this) }).bind(this)}).bind(this) ... 이런 식의 코딩이 되어버리게 되었다.
*/

// 1. 콜백 지옥의 예시 : 콜백을 이용해서 한번 숫자 n을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을 setTimeout 으로 구현해보자.
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1
    console.log(increased)
    if (callback) {
      callback(increased)
    }
  }, 1000)
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("끝")
        })
      })
    })
  })
})

/*
    1. 콜백 지옥의 해결 : Promise/then과 async/await의 등장
        콜백을 쓰니 이렇게 "콜백 지옥"이 발생되었다.
        이를 해결하기 위해, Promise/then이나 async/await이 등장하게 되었다.
        이들이 어떻게 콜백 지옥을 해결하는 지, 다음 시간부터 배워볼 것이다.
*/
