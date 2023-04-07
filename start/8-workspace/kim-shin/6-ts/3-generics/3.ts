function wrap1(param: any, param2: string): any {
  return {
    param, param2
  }
}

const wrapped1 = wrap1(10, '1234314') // wrapped1을 다른 곳에서 썼을 때 타입 지원을 받을 수 없다.


// 함수에서 Generics인 <T>를 사용 : 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있다.
function wrap2<T>(param: T, param2: String) { // 파라미터 () 뒤에 :any 쓰는 대신, 함수명 뒤에 <T>를 설정하고, T 타입으로 된 파라미터타입을 내부에서 설정해준다.
  return {
      param, param2
  }
}

const wrapped2 = wrap2(10, '1234314') // wrap1처럼 아무 파라미터나 넣을 수 있으면서, wrapped2을 다른 곳에서 썼을 때 타입 지원을 받을 수 없다.
