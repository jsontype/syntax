import { connectDB } from "../api/connectDB"

export default async function BBS() {
  const db = (await connectDB).db("db1")
  const collection = await db.collection("bbs2").find().toArray()

  const render = collection.map((item) => {
    return (
      <div key={item._id}>
        <h4>제목 : {item.title}</h4>
        <div>내용 : {item.content}</div>
      </div>
    )
  })

  return (
    <>
      <div>{render}</div>
    </>
  )
}
