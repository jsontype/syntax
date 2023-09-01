import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "POST") {
    /*
      만일 주소창에 ?name=yang&age=20 같은 쿼리가 있다면, 
        console.log(req.query) 안에, { name: 'yang', age: '20' } 으로 담겨져서 쓸 수 있다.
      만일 api/delete/[name].js를 만든뒤, fetch('/api/delete/yang')를 하게 되면, 
        console.log(req.query) 안에, { name: 'yang' } 으로 담겨져서 쓸 수 있다.
    */
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
        .collection("bbs1")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: newData }) // 참고 : 숫자 타입의 증감만 할 경우에는 $set 대신 $inc: 1 / $inc: -1 과 같이 해도 된다.
      return res.redirect(302, "/bbs") // 응답과 동시에 페이지 이동시키려면 302를 첫 인자로 넣어야한다.
    } catch (e) {
      console.log(e)
    }
  }
}
