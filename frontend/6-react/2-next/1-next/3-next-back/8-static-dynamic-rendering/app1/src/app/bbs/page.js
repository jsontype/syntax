import { connectDB } from "@/app/api/connectDB"
import Move from "./Move"
import MoveDelete from "./MoveDelete"

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
        <p>
          내용: {item.content}{" "}
          <Move url={`/bbs/edit/${item._id}`} title="수정" />{" "}
          {/* String(item._id): _id가 string이 아니고 ObjectId의 형태로 DB에 들어가있기 때문에 백틱이 아닌 쌩으로 넣을때는 string 캐스팅이 필수 */}
          <MoveDelete id={String(item._id)} title="삭제" />
        </p>
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
