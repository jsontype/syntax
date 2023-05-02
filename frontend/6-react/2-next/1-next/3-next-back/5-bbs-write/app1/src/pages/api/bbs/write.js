import { connectDB } from "@/app/api/connectDB"

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body)
    if (req.body.title == "") {
      return res.status(500).json("제목은 필수입니다.")
    }
    try {
      const db = (await connectDB).db("db1")
      await db.collection("bbs1").insertOne(req.body)
      // return res.status(200).json("저장완료") // 이것도 가능하지만 아래처럼 하는게 더 좋다.
      // return res.status(200).redirect("/bbs") // 이러면 리다이렉션도 해준다. 이것도 가능하지만 아래처럼 하는게 더 좋다.
      return res.redirect(302, "/bbs") // 이러면 리다이렉션이 더 빠르다. 이렇게 응답과 동시에 페이지 이동시키려면 302를 첫 인자로 넣어야한다.
    } catch (e) {
      console.log(e)
    }
  }
}
