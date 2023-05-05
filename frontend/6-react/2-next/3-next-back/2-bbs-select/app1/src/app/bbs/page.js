import { connectDB } from "@/app/api/connectDB"

export default async function BBS() {
  const db = (await connectDB).db("db1")
  const result = await db.collection("bbs1").find().toArray()

  const render = result.map((item) => {
    return (
      <div className="list-item" key={item.id}>
        <h4>제목: {item.title}</h4>
        <p>내용: {item.content}</p>
      </div>
    )
  })

  return <div className="list-bg">{render}</div>
}
