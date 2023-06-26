import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  const db = (await connectDB).db("db1")
  const result = await db
    .collection("comment1")
    .find({ parent: req.query.id })
    .toArray()
  console.log("result: ", result)
  res.status(200).json(result)
}
