/*
  [객체에 Spreading을 쓰기 + 추가, 수정, 삭제 방법]
*/

// 리액트 객체, 배열의 "불변성의 법칙"을 지키는 이유
// 리액트 컴포넌트 여러개를 쓴다. -> 객체 하나를 설정하면, 모든 컴포넌트가 다 한 곳을 참조하죠. -> 실제로 객체가 변경되어도, 얘를 감지할 수 없다. 왜냐면, 주소이기 때문에 변화감지 불가능. -> 변화를 감지해야 퍼포먼스튜닝이 가능하다. 안 그러면서 deps도 안되고... useEffect 등등 다 못쓴다... 그 바뀐 컴포넌트 부분만 캐치해서 재렌더링 해줘야하기 때문이다. -> 
// 그래서 리액트는 새로운 객체주소를 만들고 -> 거기다 기존의 객체의 값을 넣고 -> 변경된 부분만 바꿔 넣고 -> 기존 객체를 그 "주소"으로 갈아끼운다. -> 그 뒤, 기존의 주소를 삭제한다. -> 변화감지가 가능해진다. -> 바뀐 객체를 읽어서 해당 객체를 사용하고 있는 포넌트의 퍼포먼스튜닝이 가능해진다.

// 객체, 배열은 주소참조이기 때문

// user1 객체 만들고, 안에 id yang pw 1234 만들어보자.
const user1 = { id: "yang", pw: "1234" }
const user1Copy = user1
// user1 접속한뒤에, pw를 2345로 바꿨다고 하자.
user1.pw = "2345"
// 얘는 다른 컴포넌트에서 사용하고 있다.
// console.log(user1)
// console.log(user1Copy)
// 둘이 갖고... 바꾼 걸 감지 못한다. ---> 이 방식은 불변성의 법칙을 깨기 때문이다... 리액트에서는 쓰지 않는다.

// 리액트방식으로 다시 해보자. 리액트에서 값을 변경할 때 어떻게 하는가?
const user2 = { id: "yang", pw: "1234" }
// 수정, 추가, 삭제 방법 : user2 접속한뒤에, pw를 2345로 바꿨다고 하자.
const user2Change = { ...user2, pw: "2345" } // 추가
const user2Insert = { ...user2, name: "yangdh" } // 수정
const { id, ...user2Delete } = user2 // 삭제

console.log('원형: ', user2)
console.log('수정: ', user2Change)
console.log('추가: ', user2Insert)
console.log('삭제: ', user2Delete)
// 이 방식은 불변성의 법칙을 지켜서 바꾼 것을 감지한다.... 리액트에서 쓴다. setUser2({ ...user2, pw: "2345" }) 이런 식으로 쓰면, 리액트는 자동으로 주소를 변경하고 값도 변경! 기존 주소는 동시에 삭제하니까 메모리 문제는 없다.





/*
  [배열에 Spreading을 쓰기 + 추가, 수정, 삭제 방법]
*/

// 배열의 불변성의 법칙을 지키려면, push, splice 등의 함수를 사용하거나 n 번째 항목을 직접 수정하면 안되고 다음과 같이 concat, filter, map 등의 함수를 사용해야 합니다.
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
  
// 배열 추가 (Concat 방식)
const inserted = todos.concat({
id: 3,
text: '할 일 #3',
done: false
})
console.log('inserted: ', inserted) // 추가가 잘 된다.

// 배열 추가 (Spreading 방식)  
const inserted2 = [...todos, {
id: 3,
text: '할 일 #3',
done: false
}]
console.log('inserted2: ', inserted2) // 얘도 추가가 잘 된다.

// 배열 삭제 : id 2번 삭제
const filtered = todos.filter((todo) => { return todo.id !== 2 })
// 더 고수버전 : const filtered = todos.filter(todo => todo.id !== 2)

// 배열 변경 : id 2번의 done을 토글링 
const toggled = todos.map((todo) => (todo.id === 2) ? { ...todo, done: !todo.done } : todo)
// 더 고수버전 : const toggled = todos.map(todo => todo.id === 2 ? { ...todo, done: !todo.done } : todo)
