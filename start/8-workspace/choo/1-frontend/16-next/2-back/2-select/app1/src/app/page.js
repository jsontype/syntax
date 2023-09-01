import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"

export default async function Home() {
  // db명
  const db = (await connectDB).db("db1")
  // collection명
  const collection = await db.collection("bbs2").find().toArray()
  console.log(collection)

  return (
    <>
      <div className={styles.red}>Hello World</div>
    </>
  )
}
