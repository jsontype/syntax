import { connectDB } from "@/app/api/connectDB"
// 3. 글쓴이 정보를 넣기 위해 session 정보를 사용해야 하고, 이를 사용하도록 하기 위해 getServerSession과 authOptions를 추가해야 한다.
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  // 4. 세션을 받아온다.
  const session = await getServerSession(req, res, authOptions)
  // console.log(session?.user?.email) // 확인용
  // 5. request body의 writer(글쓴이) 키값에 세션에 있는 유저 정보를 넣어둔다.
  if (session?.user?.email) {
    req.body.writer = session.user.email
  }

  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목은 필수입니다.")
    }
    try {
      const db = (await connectDB).db("db1")
      await db.collection("bbs1").insertOne(req.body)
      return res.redirect(302, "/bbs")
    } catch (e) {
      console.log(e)
    }
  }
}
