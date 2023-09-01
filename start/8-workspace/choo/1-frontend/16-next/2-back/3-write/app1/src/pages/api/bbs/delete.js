import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    try {
      const db = (await connectDB).db("db1")
      await db.collection("bbs2").deleteOne({ _id: new ObjectId(req.body) })
      return res.redirect(302, "/bbs") // 응답과 동시에 페이지 이동시키려면 302를 첫 인자로 넣어야한다.
    } catch (e) {
      console.log(e)
    }
  }
}
