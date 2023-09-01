import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function Edit(props) {
  const db = (await connectDB).db("db1")
  const result = await db
    .collection("bbs2")
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/bbs/edit" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <input type="hidden" name="_id" defaultValue={String(result._id)} />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}
