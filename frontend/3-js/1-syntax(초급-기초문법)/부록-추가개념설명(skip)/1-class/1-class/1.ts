// 実装レベルのタイプの使い分け
type USER = "NORMAL" | "VIP"
const user1: USER = "VIP"

interface userType {
  id: String;
  pw: String;
}
const userList: userType[] = [
  {
    id: "1324",
    pw: "1234",
  },
]

// class 技術面での説明：objectを作る為のフレーム
// class 内容面での説明：一連の変数・関数だちの集団体
const math = {
  plus: (a: number, b: number): number => a + b,
  minus: (a: number, b: number): number => a - b,
  // ...
  pi: 3.14,
}
let result = math.plus(1, 2)
let pi = math.pi

// objectはobject classフレームによって以下のが自動で使える
userList.map((item) => {
  console.log(item)
})
console.log(userList.length)

// JavascriptはOOPで実装されている。Object-Oriented-Programming
