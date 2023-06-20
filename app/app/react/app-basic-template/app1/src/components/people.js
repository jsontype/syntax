import { useState } from "react"
import "./components.css"

export default function People() {
  const [contentId, setContentId] = useState("")

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

  // Mock DB
  const data = {
    people: [
      {
        id: 1,
        first_name: "Alex",
        last_name: "Davidson",
        sex: "male",
        blood_type: "O",
        serve_years: 2,
        role: "developer",
        team: 2,
        from: "California",
      },
      {
        id: 2,
        first_name: "Lindsay",
        last_name: "West",
        sex: "female",
        blood_type: "A",
        serve_years: 3,
        role: "designer",
        team: 3,
        from: "Arizona",
      },
      {
        id: 3,
        first_name: "Nathan",
        last_name: "Jenkins",
        sex: "male",
        blood_type: "B",
        serve_years: 1,
        role: "planner",
        team: 1,
        from: "Texas",
      },
      {
        id: 4,
        first_name: "Christine",
        last_name: "Harris",
        sex: "female",
        blood_type: "B",
        serve_years: 2,
        role: "developer",
        team: 4,
        from: "Ohio",
      },
    ],
  }

  // 메인화면 왼쪽의 사이드 섹션 리스트가 나타날 곳
  function AsideItems() {
    function peopleFaces(sex, id) {
      const bySex = {
        male: ["🧑🏿", "👨🏻", "👦🏼", "‍🧓🏽", "🧔🏾"],
        female: ["👩🏻", "👧🏼", "👩🏽‍🦰", "👩🏾‍🦱", "👱🏿‍♀️"],
      }
      return bySex[sex][id % bySex[sex].length]
    }

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

  // 메인화면	리스트 각 항목의 내용부가 표시될 곳
  function MainContents() {
    function handleChange(e) {
      const { name, value } = e.target
      console.log(name, "///", value)
      setInputs({
        ...inputs,
        [name]: ["serve_years", "team"].includes(name) ? Number(value) : value,
      })

      // setInputs({
      //   first_name: data.person.first_name,
      //   last_name: data.person.last_name,
      //   sex: data.person.sex,
      //   blood_type: data.person.blood_type,
      //   serve_years: data.person.serve_years,
      //   role: data.person.role,
      //   team: data.person.team,
      //   from: data.person.from,
      // })
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

        <div className="buttons">
          <button
            onClick={() => {
              alert("Hello")
            }}
          >
            Modify
          </button>
          <button
            onClick={() => {
              alert("Hello")
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              alert("Hello")
            }}
          >
            New
          </button>
        </div>
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
