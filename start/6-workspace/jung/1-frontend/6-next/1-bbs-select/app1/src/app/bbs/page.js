import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"
import Link from "next/link.js"
import Move from "./Move"

export default async function Home() {
  const db = (await connectDB).db("db1")
  const result = await db.collection("bbs1").find().toArray()

  const render = result.map((item) => {
    return (
      <div key={item.id}>
        <h4>
          제목: {item.title}{" "}
          <Move url={`/bbs/detail/${item._id}`} title="자세히 보기" />
        </h4>
      </div>
    )
  })

  return (
    <>
      <div className={styles.bbs}>{render}</div>
    </>
  )
}
