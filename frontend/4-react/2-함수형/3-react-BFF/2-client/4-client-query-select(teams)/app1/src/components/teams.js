import "./components.css"
import { useState } from "react"
import { useQuery, useMutation, gql } from "@apollo/client"

// GraphQL 서버로부터 모든 컨텐츠를 표시하기 위한 쿼리
const GET_TEAMS = gql`
  query GetTeams {
    teams {
      id
      manager
      members {
        id
        first_name
        last_name
        role
      }
    }
  }
`

// GraphQL 서버로부터 id에 해당하는 컨텐츠 하나만 받아와서 표시하기 위한 쿼리
const GET_TEAM = gql`
  query GetTeam($id: ID!) {
    team(id: $id) {
      id
      manager
      office
      extension_number
      mascot
      cleaning_duty
      project
    }
  }
`

export default function Teams() {
  const [contentId, setContentId] = useState(0)
  const [inputs, setInputs] = useState({
    manager: "",
    office: "",
    extension_number: "",
    mascot: "",
    cleaning_duty: "",
    project: "",
  })

  // 왼쪽 사이드바 : GraphQL로부터 모든 데이터를 받아와 목록을 렌더링하도록 작성
  function AsideItems() {
    const roleIcons = {
      developer: "💻",
      designer: "🎨",
      planner: "📝",
    }

    const { loading, error, data, refetch } = useQuery(GET_TEAMS)

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    // GET_TEAMS 쿼리 응답을 콘솔로그에 찍는다.
    if (data) {
      console.log("GET_TEAMS 쿼리 응답: ", data)
    }

    return (
      <ul>
        {data.teams.map(({ id, manager, members }) => {
          return (
            <li key={id}>
              <span
                className="teamItemTitle"
                onClick={() => {
                  setContentId(id)
                }}
              >
                Team {id} : {manager}'s
              </span>
              <ul className="teamMembers">
                {members.map(({ id, first_name, last_name, role }) => {
                  return (
                    <li key={id}>
                      {roleIcons[role]} {first_name} {last_name}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }

  // 가운데 메인컨텐츠 : GraphQL 서버로부터 id로 한개의 컨텐츠 받아와 표시하기
  function MainContents() {
    const { loading, error, data } = useQuery(GET_TEAM, {
      variables: { id: contentId },
      onCompleted: (data) => {
        if (contentId === 0) {
          setInputs({
            manager: "",
            office: "",
            extension_number: "",
            mascot: "",
            cleaning_duty: "",
            project: "",
          })
        } else {
          setInputs({
            manager: data.team.manager,
            office: data.team.office,
            extension_number: data.team.extension_number,
            mascot: data.team.mascot,
            cleaning_duty: data.team.cleaning_duty,
            project: data.team.project,
          })
        }
      },
    })

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    // GET_TEAM 쿼리 응답을 콘솔로그에 찍는다.
    if (data) {
      console.log("GET_TEAM 쿼리 응답: ", data)
    }

    function handleChange(e) {
      const { name, value } = e.target
      setInputs({
        ...inputs,
        [name]: value,
      })
    }

    return (
      <div className="inputContainer">
        <table>
          <tbody>
            {contentId !== 0 && (
              <tr>
                <td>Id</td>
                <td>{contentId}</td>
              </tr>
            )}
            <tr>
              <td>Manager</td>
              <td>
                <input
                  type="text"
                  name="manager"
                  value={inputs.manager}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Office</td>
              <td>
                <input
                  type="text"
                  name="office"
                  value={inputs.office}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Extension Number</td>
              <td>
                <input
                  type="text"
                  name="extension_number"
                  value={inputs.extension_number}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Mascot</td>
              <td>
                <input
                  type="text"
                  name="mascot"
                  value={inputs.mascot}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Cleaning Duty</td>
              <td>
                <input
                  type="text"
                  name="cleaning_duty"
                  value={inputs.cleaning_duty}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Project</td>
              <td>
                <input
                  type="text"
                  name="project"
                  value={inputs.project}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {contentId === 0 ? (
          <div className="buttons">
            <button onClick={() => {}}>Submit</button>
          </div>
        ) : (
          <div className="buttons">
            <button onClick={() => {}}>Modify</button>
            <button onClick={() => {}}>Delete</button>
            <button
              onClick={() => {
                setContentId(0)
              }}
            >
              New
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div id="teams" className="component">
      <aside>{AsideItems()}</aside>
      <section className="contents">{MainContents()}</section>
    </div>
  )
}
