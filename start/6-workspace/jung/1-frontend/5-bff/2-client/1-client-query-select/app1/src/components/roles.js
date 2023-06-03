import { useState } from "react"
import "./components.css"
import { useQuery, gql } from "@apollo/client"

// GraphQL 서버로부터 모든 컨텐츠를 표시하기 위한 쿼리
const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`

// GraphQL 서버로부터 id에 해당하는 컨텐츠 하나만 받아와서 표시하기 위한 쿼리
const GET_ROLE = gql`
  query GetRole($id: ID!) {
    role(id: $id) {
      id
      requirement
      members {
        id
        last_name
        serve_years
      }
      equipments {
        id
      }
      softwares {
        id
      }
    }
  }
`

export default function Roles() {
  const [contentId, setContentId] = useState("")

  // 메인화면 왼쪽의 사이드 섹션 리스트가 나타날 곳
  function AsideItems() {
    const roleIcons = {
      developer: "💻",
      designer: "🎨",
      planner: "📝",
    }
    const { loading, error, data } = useQuery(GET_ROLES)

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    if (data) {
      console.log("GET_ROLES 쿼리 응답: ", data)
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
    const { loading, error, data } = useQuery(GET_ROLE, {
      variables: { id: contentId },
    })

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    if (contentId === "") return <div className="roleWrapper">Select Role</div>
    if (data) {
      console.log("GET_ROLES 쿼리 응답: ", data)
    }

    return (
      <div className="roleWrapper">
        <h2>{data.role.id}</h2>
        <div className="requirement">
          <span>{data.role.requirement}</span> required
        </div>
        <h3>Members</h3>
        <ul>
          {data.role.members.map((member) => {
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
