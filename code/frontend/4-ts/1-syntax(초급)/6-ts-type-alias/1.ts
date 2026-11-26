// 1. TypeScript type alias 사용하기
// type alias은 특정 타입에 별칭을 붙이는 것이다. (그냥 type이라고도 한다.)
// 객체가 아닌 형태의 타입지정을 할때 사용하는 것으로, 주로 "Intersaction Type (교집합)이나 Union Type (합집합)형태"로 지정을 묶어서 해줄 때 사용한다.

// type alias 정의하기
type Age = number
type JobTitle =
  | "Frontend Developer"
  | "Backend Developer"
  | "Full-stack Developer"

// 객체가 아닌 형태의 타입 지정 예시
type UserID = string
type Email = string

// Intersaction Type (교집합) 예시
type Address = {
  city: string
  street: string
}

type UserDetail = {
  age: Age
  job: JobTitle
  address: Address
}

// Union Type (합집합) 예시
type Contact =
  | {
      phone: string
    }
  | {
      email: Email
    }

// 예시 객체
const user1: UserDetail & Contact = {
  age: 23,
  job: "Frontend Developer",
  address: {
    city: "Seoul",
    street: "Gangnam-gu",
  },
  email: "example@example.com",
}
