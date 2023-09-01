import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function Edit(props) {
  const db = (await connectDB).db("db1")
  // props.params = 유저가 주소창에 localhost:3000/detail 뒤에 입력한 값
  const result = await db
    .collection("bbs1")
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/bbs/edit" method="POST">
        {/* Next에서는 수정페이지의 input에 value 대신 defaultValue를 사용해야 함 */}
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        {/* 숨겨진 인풋으로 수정대상을 찾기위한 _id 값을 함께 보내준다. */}
        <input type="hidden" name="_id" defaultValue={String(result._id)} />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}
