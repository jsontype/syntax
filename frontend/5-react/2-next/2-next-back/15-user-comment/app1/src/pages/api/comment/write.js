import { connectDB } from "@/app/api/connectDB"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (req.method == "POST") {
    req.body = JSON.parse(JSON.stringify(req.body))
    const data = {
      content: req.body.comment,
      parent: req.body.parent,
      writer: session.user.email,
    }
    const db = (await connectDB).db("db1")
    await db.collection("comment1").insertOne(data)
    res.status(200).json("저장완료")
  }
}
