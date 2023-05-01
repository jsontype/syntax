// "T extends"로 제네릭의 타입을 제한할 수 있다.

// 제네릭 T의 하위변수로 쓸 타입을 선언해둔다.
type LengthType = {
  length: number
}

// 제네릭 T에 하위타입을 지정하지 않는다.
function textLength1<T>(text: T): T {
  // text.length // 에러가 난다.
  return text
}

// 제네릭 T에 하위타입을 지정한다.
function textLength2<T extends LengthType>(text: T): T {
  text.length // 에러가 나지 않는다.
  return text
}

// 이로 인해, 제네릭 인자값 타입에 다음과 같은 제한이 생기게 되었다.
// textLength2(10) // number는 length가 없으므로 에러가 난다.
textLength2('text') // string은 length가 있으므로 에러가 나지 않는다.



// "T extends keyof"로 제네릭 인자값 타입을 제한할 수 있다.
type ItemType = {
  name: string;
  price: number;
  stock: number;
}

function searchItem<T extends keyof ItemType>(item: T): T {
  return item
}

// 이로 인해, 제네릭 인자값 타입에 다음과 같은 제한이 생기게 되었다.
// searchItem('NG') // string으로 된 key값을 인자에 넣지 않으면 에러가 발생한다.
searchItem('name')
searchItem('price')
searchItem('stock')
