// 타입 단언(type assertion) : as 타입명을 통해서 단언할 수 있다. 타입스크립트보다 개발자 본인이 더 정확히 타입을 알 때, 타입을 단언할 수 있다.
let a // 이때의 a는 타입이 any이다.
a = 20 // 이때의 a는 타입이 string이지만, 타입스크립트가 a의 타입을 추론할 수 없다.
let b = a // 따라서, 이때의 b도, string이 아니라 any 타입이 된다. 그러나 위 상황은, 개발자가 코드를 작성하고 있고, 개발자가 타입스크립트보다 더 타입을 정확히 아는 상태가 된다.
let c = a as string // 이때의 c는 string이 된다. 이처럼, 타입 단언을 통해, 개발자가 타입스크립트보다 더 정확히 타입을 알고 있으니, as 이하대로 타입을 갖고 가라고, "단언"한다.



// DOM 조작 : 타입 단언을 가장 많이 쓰는 경우는 DOM 조작을 하는 경우이다.
// 첫번째 코드의 경우, ts상에선 div가 HTMLDivElement | null 유니온 타입이기 때문에,
// div가 null 체크를 if문으로 한번 한 뒤에, 아래와 같은 코드를 쓸 수 있게 된다.
// 이럴 때, as HTMLDivElement 를 붙여서 이런 번거로움을 해결할 수 있다.

// let div = document.querySelector('div')
// div.innerText // 에러가 난다.
let div = document.querySelector('div') as HTMLDivElement
div.innerText // 에러가 나지 않는다.
