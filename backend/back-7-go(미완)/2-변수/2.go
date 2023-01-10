// [변수]
package main

// 변수 선언 1
// var a int 
// var f float32 = 11.

// 변수 선언 2 : 이 선언방식도 가능하다.
// a := int
// f := float32(11.)

// 변수 복수 선언
// var i, j, k int = 1, 2, 3

// 상수 선언
// const c int = 10
// const s string = "Hi"

// 상수는 타입 추론을 자주 사용
// const c = 10
// const s = "Hi"

// 상수 복수 선언
// const (
//   Visa = "Visa"
//   Master = "MasterCard"
//   Amex = "American Express"
// )

// iota : 상수값을 0부터 순차적으로 부여하는 identifier
// iota가 지정된 Apple에는 0이 할당되고, 나머지 상수들을 순서대로 1씩 증가된 값을 부여
// const (
//   Apple = iota // 0
//   Grape        // 1
//   Orange       // 2
// )

// 데이터타입
/*
  기본 데이터타입
    bool : 불린 타입
    string : 문자열 타입. string은 한번 생성되면 수정될 수 없는 Immutable 타입임.
    int int8 int16 int32 int64 : 정수형 타입1
    uint uint8 uint16 uint32 uint64 uintptr : 정수형 타입2
    float32 float64 complex64 complex128 : 실수 및 복소수 타입
    byte : uint8과 동일하며 바이트 코드에 사용
    rune : int32과 동일하며 유니코드 코드포인트에 사용한다

  문자열 데이터타입
    Back Quote(``) : 단순 문자열, 엔터친 줄바꿈은 적용, 별도 해석은 적용하지 않음
    이중인용부호("") : "아리랑아리랑\n아리리요" 같이 \n 등을 쓸 경우 줄바꿈 등 별도 해석 적용

  주의점
    go는 선언만 하고 사용하지 않는 변수를 허용하지 않는다.
    go는 '' 문자열을 허용하지 않는다.
*/
func main() {
  println(`아리랑아리랑\n아리리요`)
  println("아리랑아리랑\n아리리요")

  // 캐스팅 1
  const i int = 100
  const u uint = uint(i)
  const f float32 = float32(i)  
  println("f: ", f, "\nu: ", u)

  // 캐스팅 2
  str := "ABC"
  bytes := []byte(str)
  str2 := string(bytes)
  println("bytes: ", bytes, "\nstr2: ", str2)
}
