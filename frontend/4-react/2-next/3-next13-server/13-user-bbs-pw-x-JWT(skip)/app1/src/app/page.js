import styles from "./page.module.css"
import { connectDB } from "@/app/api/connectDB"

// 1. API URL을 만들지 않고 직접 connectDB 함수로 API를 호출하는 경우의 캐싱
// 1-1. 아래와 같이 설정해두면 자동으로 유저가 페이지 방문시 60초동안 페이지가 캐싱된다.
//      그리고 60초가 지나면 다시 서버로 요청해서 새로운 데이터를 가져온다.
//      예전 Next.js에선 이를 ISR이라고 불렀었다.
export const revalidate = 60

export default async function Home() {
  // 1-2. 그 다음 이대로 connectDB 함수를 호출해서 사용하면 끝이다.
  const db = (await connectDB).db("db1")
  const result = await db.collection("bbs1").find().toArray()
  console.log(result)

  // 2. API URL을 만들어놓고 fetch하는 식으로 API를 호출하는 경우의 캐싱 (* 참고로, 캐싱된 데이터는 하드 용량을 차지한다.)
  // await fetch("/URL", { cache: "no-cache" }) // 2-1. 캐싱 없이 매번 서버로 요청해서 새거 가져옴 (실시간 데이터가 중요할 때)
  // await fetch("/URL", { next: { revalidate: 60 } }) // 2-2. 60초마다 캐싱 (데이터가 중요할 때)
  // await fetch("/URL", { cache: "force-cache" }) // 2-3. 강제 캐싱 (속도가 중요할 때)

  return (
    <>
      <div className={styles.red}>Hello Next</div>
    </>
  )
}
