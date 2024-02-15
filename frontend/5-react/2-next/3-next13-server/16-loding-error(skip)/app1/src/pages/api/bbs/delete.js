import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"
// 글쓴이 정보를 넣기 위해 session 정보를 사용해야 하고, 이를 사용하도록 하기 위해 getServerSession과 authOptions를 추가해야 한다.
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  // 세션을 받아온다.
  const session = await getServerSession(req, res, authOptions)

  if (req.method == "DELETE") {
    try {
      const db = (await connectDB).db("db1")
      // DB의 글쓴이 정보를 추출
      const find = await db
        .collection("bbs1")
        .findOne({ _id: new ObjectId(req.body) })
      // 세션의 email과 DB의 글쓴이 정보가 같을 때만 삭제 가능하게 처리
      if (find.writer === session.user.email) {
        await db.collection("bbs1").deleteOne({ _id: new ObjectId(req.body) })
        return res.redirect(302, "/bbs")
      } else {
        return res.status(500).json("권한이 없습니다.")
      }
    } catch (e) {
      console.log(e)
    }
  }
}
