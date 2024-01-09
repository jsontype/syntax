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

// GraphQL 서버로부터 id에 해당하는 컨텐츠 하나를 삭제하는 쿼리
const DELETE_TEAM = gql`
  mutation DeleteTeam($id: ID!) {
    deleteTeam(id: $id) {
      id
    }
  }
`

// GraphQL 서버로부터 id에 해당하는 컨텐츠 하나를 수정하는 쿼리
const EDIT_TEAM = gql`
  mutation EditTeam($id: ID!, $input: PostTeamInput!) {
    editTeam(id: $id, input: $input) {
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

// 새로고침 변수1 : 삭제, 수정, 추가 등의 Mutation(=POST처리) 실행 후, 팀 정보를 새로고침 하기 위한 변수
let refetchTeams

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

  // 삭제 함수1 : 처음 버튼을 눌렀을 때, 정말 삭제할 것인지 확인함
  function execDeleteTeam() {
    if (window.confirm("이 항목을 삭제하시겠습니까?")) {
      deleteTeam({ variables: { id: contentId } })
    }
  }
  // 삭제 함수2 : useMutation을 사용해서, 먼저 GraphQL 서버로부터 id에 해당하는 컨텐츠 하나를 삭제하고, 완료 후 deleteTeamCompleted 함수를 실행
  const [deleteTeam] = useMutation(
    DELETE_TEAM, // 이걸 먼저 실행해서 삭제함
    { onCompleted: deleteTeamCompleted } // 삭제 완료 후, deleteTeamCompleted 함수를 실행
  )
  // 삭제 함수3 : 삭제 완료 후의 처리로, 콘솔로그와 알림창을 띄우고 목록을 새로고침 해주는 함수
  function deleteTeamCompleted(data) {
    console.log(data.deleteTeam)
    alert(`${data.deleteTeam.id} 항목이 삭제되었습니다.`)
    setContentId(0)
    // 새로고침 변수3 : 새로고침 함수 호출
    refetchTeams()
  }

  // 수정 함수1 : 처음 버튼을 눌렀을 때, 수정을 위한 인자값을 파라미터에 담아서 수정 함수를 호출함
  function execEditTeam() {
    editTeam({
      variables: {
        id: contentId,
        input: inputs,
      },
    })
  }
  // 수정 함수2 : useMutation을 사용해서, 먼저 GraphQL 서버로부터 id에 해당하는 컨텐츠 하나를 수정하고, 완료 후 editTeamCompleted 함수를 실행
  const [editTeam] = useMutation(EDIT_TEAM, { onCompleted: editTeamCompleted })
  // 수정 함수3 : 수정 완료 후의 처리로, 콘솔로그와 알림창을 띄우고 목록을 새로고침 해주는 함수
  function editTeamCompleted(data) {
    console.log(data.editTeam)
    alert(`${data.editTeam.id} 항목이 수정되었습니다.`)
    refetchTeams() // 새로고침
  }

  // 왼쪽 사이드바 : GraphQL로부터 모든 데이터를 받아와 목록을 렌더링하도록 작성
  function AsideItems() {
    const roleIcons = {
      developer: "💻",
      designer: "🎨",
      planner: "📝",
    }

    const { loading, error, data, refetch } = useQuery(GET_TEAMS)
    // 새로고침 변수2 : 쿼리의 "새로고침된 정보"를 담는 부분
    refetchTeams = refetch

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
            <button onClick={execEditTeam}>Modify</button>
            <button onClick={execDeleteTeam}>Delete</button>
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
