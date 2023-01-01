interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입
function askSomeone1 (someone: Developer | Person) {
  someone.name
  // 아래가 에러인 이유 : 둘중 하나의 타입만 허용하므로 typeof 분기로 someone을 나눈뒤 처리 필요
  // someone.age
  // someone.skill
}
askSomeone1({ name: 'John', skill: 'Front' }) // 둘중 하나의 타입이면 OK이다. 따라서 유니온 타입을 실무에서 더 많이 사용.
askSomeone1({ name: 'Smith', age: 30 })

// 인터섹션 타입
function askSomeone2 (someone: Developer & Person) {
  someone.name
  // 아래가 에러가 아닌 이유 : 둘을 병합한 형태이므로, 두 타입 인터페이스를 합쳐서 사용하게 된다.
  someone.age
  someone.skill  
}
askSomeone2({ name: 'John', skill: 'Front', age: 30 })
// askSomeone2({ name: 'Smith', age: 30 }) // skill이 없으므로 에러가 된다.
