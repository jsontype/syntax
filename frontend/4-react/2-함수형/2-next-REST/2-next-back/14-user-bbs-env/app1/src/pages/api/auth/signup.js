import { connectDB } from "@/app/api/connectDB"
// 암호화 라이브러리
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method === "POST") {
    // await bcrypt.hash(암호화할 내용, 아무숫자) : 암호화해준다.
    const hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash
    try {
      const db = (await connectDB).db("db1")
      await db.collection("user").insertOne(req.body)
      res.status(200).json("회원가입이 완료되었습니다.")
    } catch (e) {
      console.log(e)
    }
  }
}
