/*
  [배열객체 중급복사 - Spreading]

  ES6의 유용한 기능중 하나로 객체로부터 보다 쉽게 값(보통은 일부의 값)을 가져올 수 있다.
  * 특히 불변성의 법칙은 잘 알아두면 이후 리액트할 때 많이 쓴다.
*/

// 객체를 이렇게 바꾸면 사실 객체의 불변성의 법칙이 깨어진다.
const object = {
  a: 1,
  b: 2
}
object.b = 3

// (이후 리액트 등에서 메모리할당의 효율성을 위해 지키게 되는) 객체의 불변성의 법칙을 지키려면, 다음과 같이 ... 연산자를 사용해서 새로운 객체를 만들어주어야 한다.
const object = {
  a: 1,
  b: 2
}
const nextObject = {
  ...object,
  b: 3
}

// 배열을 이렇게 바꾸면 사실 객체의 불변성의 법칙이 깨어진다.
const arr = []
arr.push(1)
arr.splice(0, 1)

// (이후 리액트 등에서 메모리할당의 효율성을 위해 지키게 되는) 배열의 불변성의 법칙을 지키려면, push, splice 등의 함수를 사용하거나 n 번째 항목을 직접 수정하면 안되고 다음과 같이 concat, filter, map 등의 함수를 사용해야 합니다.
const todos = [
  {
    id: 1,
    text: '할 일 #1',
    done: true
  },
  {
    id: 2,
    text: '할 일 #2',
    done: false
  }
]

const inserted = todos.concat({
  id: 3,
  text: '할 일 #3',
  done: false
})

const filtered = todos.filter(todo => todo.id !== 2)

const toggled = todos.map(
  todo => todo.id === 2
    ? {
      ...todo,
      done: !todo.done,
    }
    : todo
)
