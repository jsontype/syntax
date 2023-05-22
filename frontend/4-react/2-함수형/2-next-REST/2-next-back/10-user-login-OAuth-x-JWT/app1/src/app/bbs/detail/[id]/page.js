// DB상의 _id에는 단순 string 값이 아닌 _id: ObjectId('6450863eddd0d9ea6f2236c7')의 형태가 들어가기 때문에 ObjectId 클래스를 import 해서 써줘야 한다.
import { ObjectId } from "mongodb"
import { connectDB } from "@/app/api/connectDB"

export default async function Detail(props) {
  const db = (await connectDB).db("db1")
  // props.params = 유저가 주소창에 localhost:3000/detail 뒤에 입력한 값
  const result = await db
    .collection("bbs1")
    // ObjectId 클래스를 사용해서 _id 객체를 생성: '6450863eddd0d9ea6f2236c7'를 ObjectId('6450863eddd0d9ea6f2236c7') 의 형태로 변환
    .findOne({ _id: new ObjectId(props.params.id) })

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}
