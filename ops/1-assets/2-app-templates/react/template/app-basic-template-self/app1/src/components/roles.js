import { useState } from "react"
import "./components.css"

export default function Roles() {
  const [contentId, setContentId] = useState("developer")

  // Mock DB
  const data = {
    roles: [
      {
        id: "developer",
        requirement: "Computer Science Degree",
        members: [
          { id: 1, last_name: "Davidson" },
          { id: 2, last_name: "Harris" },
          { id: 3, last_name: "Adams" },
        ],
      },
      {
        id: "designer",
        requirement: "Graphic Design Certificate",
        members: [
          { id: 4, last_name: "West" },
          { id: 5, last_name: "Ford" },
        ],
      },
      {
        id: "planner",
        requirement: "Portfolio",
        members: [{ id: 6, last_name: "Jenkins" }],
      },
    ],
  }

  // 메인화면 왼쪽의 사이드 섹션 리스트가 나타날 곳
  function AsideItems() {
    const roleIcons = {
      developer: "💻",
      designer: "🎨",
      planner: "📝",
    }

    return (
      <ul>
        {data.roles.map(({ id }) => {
          return (
            <li
              key={id}
              className={"roleItem " + (contentId === "id" ? "on" : "")}
              onClick={() => {
                setContentId(id)
              }}
            >
              <span>{contentId === id ? "🔲" : "⬛"}</span>
              {roleIcons[id]} {id}
            </li>
          )
        })}
      </ul>
    )
  }

  // 메인화면	리스트 각 항목의 내용부가 표시될 곳
  function MainContents() {
    const role =
      contentId && data.roles.filter((item) => item.id === contentId)[0]

    return (
      <div className="roleWrapper">
        <h2>{role.id}</h2>
        <div className="requirement">
          <span>{role.requirement}</span> required
        </div>
        <h3>Members</h3>
        <ul>
          {role.members.map((member) => {
            return <li key={member.id}>{member.last_name}</li>
          })}
        </ul>
      </div>
    )
  }

  return (
    <div id="roles" className="component">
      <aside>{AsideItems()}</aside>
      <section className="contents">{MainContents()}</section>
    </div>
  )
}
