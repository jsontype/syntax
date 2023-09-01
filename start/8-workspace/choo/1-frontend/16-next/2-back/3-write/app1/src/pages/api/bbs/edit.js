import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목은 필수입니다.")
    }
    try {
      const newData = {
        title: req.body.title,
        content: req.body.content,
      }
      const db = (await connectDB).db("db1")
      await db
        .collection("bbs2")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: newData }) // 참고 : 숫자 타입의 증감만 할 경우에는 $set 대신 $inc: 1 / $inc: -1 과 같이 해도 된다.
      return res.redirect(302, "/bbs") // 응답과 동시에 페이지 이동시키려면 302를 첫 인자로 넣어야한다.
    } catch (e) {
      console.log(e)
    }
  }
}
