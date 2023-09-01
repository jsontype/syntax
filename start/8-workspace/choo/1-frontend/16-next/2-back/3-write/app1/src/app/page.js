import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"
import Link from "next/link"

export default async function Home() {
  // db명
  const db = (await connectDB).db("db1")
  // collection명
  const collection = await db.collection("bbs2").find().toArray()
  console.log(collection)

  return (
    <>
      <Link href="/bbs">
        <div className={styles.red}>게시판으로 이동</div>
      </Link>
    </>
  )
}
