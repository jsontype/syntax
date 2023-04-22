// 별칭 (alias)
type Person = {
  name: string
  age: number
}

const person: Person = {
  name: "김사람",
  age: 20
}

// 별칭 상속
type Dev = Person & {
  skills: string[]
}

const frontend: Dev = {
  name: "김개발",
  age: 25,
  skills: ['javascript', 'typescript', 'react', 'next', 'vue', 'nuxt']
}

// 유니온타입
type Color = 'red' | 'orange' | 'yellow'

const color: Color = 'red'
