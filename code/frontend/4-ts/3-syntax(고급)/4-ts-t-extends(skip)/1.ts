// "T extends"로 제네릭의 타입을 제한할 수 있다.

// 제네릭 T의 하위변수로 쓸 타입을 선언해둔다.
type LengthType1 = {
  length: number
}

// 제네릭 T에 하위타입을 지정하지 않는다.
function textLength111<T>(text: T): T {
  // text.length // 에러가 난다.
  return text
}

// 제네릭 T에 하위타입을 지정한다.
function textLength222<T extends LengthType1>(text: T): T {
  text.length // 에러가 나지 않는다.
  return text
}

// 이로 인해, 제네릭 인자값 타입에 다음과 같은 제한이 생기게 되었다.
// textLength222(10) // number는 length가 없으므로 에러가 난다.
textLength222("text") // string은 length가 있으므로 에러가 나지 않는다.

// "T extends keyof"로 제네릭 인자값 타입을 제한할 수 있다.
type ItemType1 = {
  name: string
  price: number
  stock: number
}

function searchItem1<T extends keyof ItemType1>(item: T): T {
  return item
}

// 이로 인해, 제네릭 인자값 타입에 다음과 같은 제한이 생기게 되었다.
// searchItem('NG') // string으로 된 key값을 인자에 넣지 않으면 에러가 발생한다.
searchItem1("name")
searchItem1("price")
searchItem1("stock")
