import { connectDB } from "@/app/api/connectDB"
// import Link from "next/link"
import Move from "./Move"

export default async function BBS() {
  const db = (await connectDB).db("db1")
  const result = await db.collection("bbs1").find().toArray()

  const render = result.map((item) => {
    return (
      <div className="list-item" key={item._id}>
        <h4>
          제목: {item.title}{" "}
          <Move url={`/bbs/detail/${item._id}`} title="자세히 보기" />
        </h4>
        <p>내용: {item.content}</p>
      </div>
    )
  })

  return (
    <>
      <div>
        <Move url={`/bbs/write`} title="등록" />
      </div>
      <div className="list-bg">{render}</div>
    </>
  )
}
