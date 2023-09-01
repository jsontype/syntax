// DB상의 _id에는 단순 string 값이 아닌 _id: ObjectId('6450863eddd0d9ea6f2236c7')의 형태가 들어가기 때문에 ObjectId 클래스를 import 해서 써줘야 한다.
import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function Detail(props) {
  const db = (await connectDB).db("db1")
  const result = await db
    .collection("bbs1")
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>제목: {result.title}</h4>
      <p>내용: {result.content}</p>
      <h5>작성자: {result.writer}</h5>
    </div>
  )
}
