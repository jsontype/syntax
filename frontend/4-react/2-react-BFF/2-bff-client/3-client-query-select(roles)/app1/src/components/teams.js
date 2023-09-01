import "./components.css"

export default function Teams() {
  // 메인화면 왼쪽의 사이드 섹션 리스트가 나타날 곳
  function AsideItems() {
    return <div></div>
  }

  // 메인화면	리스트 각 항목의 내용부가 표시될 곳
  function MainContents() {
    return <div></div>
  }

  return (
    <div id="teams" className="component">
      <aside>{AsideItems()}</aside>
      <section className="contents">{MainContents()}</section>
    </div>
  )
}
