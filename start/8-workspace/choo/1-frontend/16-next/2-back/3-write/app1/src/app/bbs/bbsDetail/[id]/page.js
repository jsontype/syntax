import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"
import Button from "./button"
import Delete from "./delete"

export default async function BbsDetail(props) {
  const db = (await connectDB).db("db1")
  const collection = await db
    .collection("bbs2")
    .findOne({ _id: new ObjectId(props.params.id) })

  // http://localhost:3000/bbs/bbsDetail/64eacc0da977a3ad5d6cae40 -> 해당 ID를 가진 게시물 상세페이지로 이동
  return (
    <div>
      <h4>제목: {collection?.title}</h4>
      <div>내용: {collection?.content}</div>
      <Button url={`/bbs/edit/${props.params.id}`} title="수정" />
      <Delete id={props.params.id} title="삭제" />
    </div>
  )
}
