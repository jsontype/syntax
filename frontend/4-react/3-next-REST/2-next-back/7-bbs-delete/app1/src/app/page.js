import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"

export default async function Home() {
  // db명 : "db1"
  const db = (await connectDB).db("db1")
  // collection명 : "bbs1"
  const result = await db.collection("bbs1").find().toArray()
  // db 호출 결과 표시
  console.log(result)

  return (
    <>
      <div className={styles.red}>Hello Next</div>
    </>
  )
}
