import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    /*
      console.log(req.body) // req.body는 현재 id가 들어있다.
      console.log(req.query) // req.query는 현재 없다. 
        만일 주소창에 ?name=yang&age=20 같은 쿼리가 있다면, 
          console.log(req.query) 안에, { name: 'yang', age: '20' } 으로 담겨져서 쓸 수 있다.
        만일 api/delete/[name].js를 만든뒤, fetch('/api/delete/yang')를 하게 되면, 
          console.log(req.query) 안에, { name: 'yang' } 으로 담겨져서 쓸 수 있다.
    */
    try {
      const db = (await connectDB).db("db1")
      await db.collection("bbs1").deleteOne({ _id: new ObjectId(req.body) })
      return res.redirect(302, "/bbs") // 응답과 동시에 페이지 이동시키려면 302를 첫 인자로 넣어야한다.
    } catch (e) {
      console.log(e)
    }
  }
}
