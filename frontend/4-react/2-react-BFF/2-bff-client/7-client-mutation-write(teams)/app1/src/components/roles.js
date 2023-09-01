import "./components.css"
import { useState } from "react"
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

  // 왼쪽 사이드바 : GraphQL로부터 모든 데이터를 받아와 목록을 렌더링하도록 작성
  function AsideItems() {
    const roleIcons = {
      developer: "💻",
      designer: "🎨",
      planner: "📝",
    }
    const { loading, error, data } = useQuery(GET_ROLES)

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    // GET_ROLES 쿼리 응답을 콘솔로그에 찍는다.
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

  // 가운데 메인컨텐츠 : GraphQL 서버로부터 id로 한개의 컨텐츠 받아와 표시하기
  function MainContents() {
    const { loading, error, data } = useQuery(GET_ROLE, {
      variables: { id: contentId },
    })

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    if (contentId === "") return <div className="roleWrapper">Select Role</div>
    // GET_ROLE 쿼리 응답을 콘솔로그에 찍는다.
    if (data) {
      console.log("GET_ROLE 쿼리 응답: ", data)
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
        <h3>Equipments</h3>
        <ul>
          {data.role.equipments.map((equipment) => {
            return <li key={equipment.id}>{equipment.id}</li>
          })}
        </ul>
        <h3>Softwares</h3>
        {data.role.softwares.map((software) => {
          return <li key={software.id}>{software.id}</li>
        })}
        <ul></ul>
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
