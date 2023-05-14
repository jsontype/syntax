export default async function Write() {
  return (
    <div className="p-20">
      <form action="/api/bbs/write" method="POST">
        {/* _id는 자동저장이므로 보낼 필요 없음 */}
        <input type="text" name="title" placeholder="글제목" />
        <input type="text" name="content" placeholder="글내용" />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}
