import { connectDB } from "@/app/api/connectDB"
import Move from "./move"

export default async function BBS() {
  const db = (await connectDB).db("db1")
  const collection = await db.collection("bbs2").find().toArray()

  const render = collection.map((item) => {
    return (
      <div key={item._id}>
        <h4>
          <Move url={`/bbs/bbsDetail/${item._id}`} title={item.title} />
        </h4>
      </div>
    )
  })

  return (
    <>
      <div>
        <Move url={`/bbs/write`} title={`등록`} />
      </div>
      <div>{render}</div>
    </>
  )
}
