// 1. 함수에서 Generics 사용하기
// 예를 들어, 객체A와 객체B를 합쳐주는 merge라는 함수를 만든다고 가정해보자.
// 그런 상황에서는 A와 B가 어떤 타입이 올 지 모르기 떄문에, 이런 상황에서는 아래와 같이 any라는 타입을 쓸 수도 있지만,
// 결과가 any라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것이기 때문에, 타입 유추가 모두 깨진거나 다름이 없다.
// 이런 상황에선, 주석 처리된 첫번째 merge 대신, 두번째 merge처럼 Generics를 사용하면 된다.

// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     }
// }
// const merged = merge({ foo: 1 }, { bar: 1 })

function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}
const merged = merge({ foo: 1 }, { bar: 1 })

// Generic 다른 예 : 함수에서 Generics를 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
function wrap<T>(param: T) {
  return {
    param
  }
}
const wrapped = wrap(10)

// 1. interface에서 Generics 사용하기
interface Items1<T> {
  list: T[]
}

const items1: Items1<string> = {
  list: ['a', 'b', 'c']
}


// 1. type에서 Generics 사용하기
type Items2<T> = {
  list: T[]
}

const items2: Items2<string> = {
  list: ['a', 'b', 'c']
}


// 1. 클래스에서 Generics 사용하기
class Queue<T> {
  list: T[] = []
  get length() {
    return this.list.length
  }
  enqueue(item: T) {
    this.list.push(item)
  }
  dequeue() {
    return this.list.shift()
  }
}

// 1. 
const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())