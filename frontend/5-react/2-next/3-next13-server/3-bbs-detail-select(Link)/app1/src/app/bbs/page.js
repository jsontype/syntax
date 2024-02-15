import { connectDB } from "@/app/api/connectDB"
import Link from "next/link.js"

export default async function BBS() {
  const db = (await connectDB).db("db1")
  const result = await db.collection("bbs1").find().toArray()

  const render = result.map((item) => {
    return (
      <div className="list-item" key={item._id}>
        <h4>
          제목: <Link href={`/bbs/detail/${item._id}`}>{item.title}</Link>
          {/* 
            기본적으로 넥스트의 Link는 prefatch가 true로 되어있다.
            prefetch란 링크를 클릭했을 때 나올 모든 페이지들을 미리 로드해놓는다는 설정이다.
            이는 속도면에서 향상을 시킬 수 있다는 장점이 있다.
            만일 
            제목: <Link prefetch={false} href={`/bbs/detail/${item._id}`}>{item.title}</Link>  
          */}
        </h4>
        <p>내용: {item.content}</p>
      </div>
    )
  })

  return <div className="list-bg">{render}</div>
}
