import "./components.css"
import { useState } from "react"
import { useQuery, useMutation, gql } from "@apollo/client"

const GET_PEOPLE = gql`
  query GetPeople {
    people {
      id
      first_name
      last_name
      sex
      blood_type
    }
  }
`

const GET_PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from
      tools {
        __typename
        ... on Software {
          id
        }
        ... on Equipment {
          id
          count
        }
      }
    }
  }
`

const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!) {
    deletePerson(id: $id) {
      id
    }
  }
`
const POST_PERSON = gql`
  mutation PostPerson($input: PostPersonInput!) {
    postPerson(input: $input) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from
    }
  }
`

const EDIT_PERSON = gql`
  mutation EditTeam($id: ID!, $input: PostPersonInput!) {
    editPerson(id: $id, input: $input) {
      id
      first_name
      last_name
      sex
      blood_type
      serve_years
      role
      team
      from
    }
  }
`

const INCREASE_EQUIPMENT = gql`
  mutation IncreaseEquipment($id: ID!) {
    increaseEquipment(id: $id) {
      count
    }
  }
`

let refetchPeople
let refetchPerson

function People() {
  const [contentId, setContentId] = useState(0)

  const sexes = ["male", "female"]
  const bloodTypes = ["A", "B", "AB", "O"]
  const roles = ["developer", "designer", "planner"]

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    sex: sexes[0],
    blood_type: bloodTypes[0],
    serve_years: 0,
    role: roles[0],
    team: 0,
    from: "",
  })

  function execPostPerson() {
    postPerson({
      variables: { input: inputs },
    })
  }
  const [postPerson] = useMutation(POST_PERSON, {
    onCompleted: postPersonCompleted,
  })
  function postPersonCompleted(data) {
    console.log(data.postPerson)
    alert(`${data.postPerson.id} 항목이 생성되었습니다.`)
    refetchPeople()
    setContentId(0)
  }

  function execEditPerson() {
    editPerson({
      variables: {
        id: contentId,
        input: inputs,
      },
    })
  }
  const [editPerson] = useMutation(EDIT_PERSON, {
    onCompleted: editPersonCompleted,
  })
  function editPersonCompleted(data) {
    console.log(data.editPerson)
    alert(`${data.editPerson.id} 항목이 수정되었습니다.`)
    refetchPeople()
  }

  function execDeletePerson() {
    if (window.confirm("이 항목을 삭제하시겠습니까?")) {
      deletePerson({ variables: { id: contentId } })
    }
  }
  const [deletePerson] = useMutation(DELETE_PERSON, {
    onCompleted: deletePersonCompleted,
  })
  function deletePersonCompleted(data) {
    console.log(data.deletePerson)
    alert(`${data.deletePerson.id} 항목이 삭제되었습니다.`)
    refetchPeople()
    setContentId(0)
  }

  const [increaseEquipment] = useMutation(INCREASE_EQUIPMENT, {
    onCompleted: refetchPerson,
  })

  function AsideItems() {
    const { loading, error, data, refetch } = useQuery(GET_PEOPLE)

    refetchPeople = refetch

    function peopleFaces(sex, id) {
      const bySex = {
        male: ["🧑🏿", "👨🏻", "👦🏼", "‍🧓🏽", "🧔🏾"],
        female: ["👩🏻", "👧🏼", "👩🏽‍🦰", "👩🏾‍🦱", "👱🏿‍♀️"],
      }
      return bySex[sex][id % bySex[sex].length]
    }

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>

    return (
      <ul>
        {data.people.map(({ id, sex, first_name, last_name, blood_type }) => {
          return (
            <li
              key={id}
              onClick={() => {
                setContentId(id)
              }}
            >
              <span className="face">{peopleFaces(sex, id)}</span>
              <span className="bloodType">{blood_type}</span>
              <span className="peopleName">
                {first_name} {last_name}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }

  function MainContents() {
    const { loading, error, data, refetch } = useQuery(GET_PERSON, {
      variables: { id: contentId },
      onCompleted: (data) => {
        if (contentId === 0) {
          setInputs({
            first_name: "",
            last_name: "",
            sex: sexes[0],
            blood_type: bloodTypes[0],
            serve_years: 0,
            role: roles[0],
            team: 0,
            from: "",
          })
        } else {
          setInputs({
            first_name: data.person.first_name,
            last_name: data.person.last_name,
            sex: data.person.sex,
            blood_type: data.person.blood_type,
            serve_years: data.person.serve_years,
            role: data.person.role,
            team: data.person.team,
            from: data.person.from,
          })
        }
      },
    })

    refetchPerson = refetch

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>

    function handleChange(e) {
      const { name, value } = e.target
      setInputs({
        ...inputs,
        [name]: ["serve_years", "team"].includes(name) ? Number(value) : value,
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
              <td>First Name</td>
              <td>
                <input
                  type="text"
                  name="first_name"
                  value={inputs.first_name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  type="text"
                  name="last_name"
                  value={inputs.last_name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Sex</td>
              <td>
                <select
                  name="sex"
                  value={inputs.sex}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                >
                  {sexes.map((sex) => {
                    return (
                      <option key={sex} value={sex}>
                        {sex}
                      </option>
                    )
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Blood Type</td>
              <td>
                <select
                  name="blood_type"
                  value={inputs.blood_type}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                >
                  {bloodTypes.map((bloodType) => {
                    return (
                      <option key={bloodType} value={bloodType}>
                        {bloodType}
                      </option>
                    )
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Serve Years</td>
              <td>
                <input
                  type="number"
                  name="serve_years"
                  value={inputs.serve_years}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <select
                  name="role"
                  value={inputs.role}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                >
                  {roles.map((role) => {
                    return (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    )
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Team</td>
              <td>
                <input
                  type="number"
                  name="team"
                  value={inputs.team}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>From</td>
              <td>
                <input
                  type="text"
                  name="from"
                  value={inputs.from}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {contentId > 0 && (
          <ul>
            {data.person.tools.map((tool) => {
              return (
                <li key={tool.id}>
                  {tool.id}
                  {tool.__typename === "Equipment" && (
                    <span>
                      <span className="count">{tool.count}</span>
                      <span
                        className="increase"
                        onClick={() =>
                          increaseEquipment({ variables: { id: tool.id } })
                        }
                      >
                        🔺
                      </span>
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        )}
        {contentId === 0 ? (
          <div className="buttons">
            <button
              onClick={() => {
                execPostPerson()
              }}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button
              onClick={() => {
                execEditPerson()
              }}
            >
              Modify
            </button>
            <button
              onClick={() => {
                execDeletePerson()
              }}
            >
              Delete
            </button>
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
    <div id="people" className="component">
      <aside>{AsideItems()}</aside>
      <section className="contents">{MainContents()}</section>
    </div>
  )
}

export default People
