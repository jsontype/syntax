import "./App.css"
import React, { useState } from "react"

import Roles from "./components/roles"
import Teams from "./components/teams"
import People from "./components/people"

export default function App() {
  const [menu, setMenu] = useState("Roles")

  // mainComp : App-header 아래 메인 화면에 나타날 컴포넌트 매핑
  const mainComp = {
    Roles: <Roles />,
    Teams: <Teams />,
    People: <People />,
  }

  // NavMenus : menu값에 따라 상단 App-header의 버튼을 표시하는 함수
  function NavMenus() {
    return ["Roles", "Teams", "People"].map((_menu, key) => {
      return (
        <li
          key={key}
          className={menu === _menu ? "on" : ""}
          onClick={() => {
            setMenu(_menu)
          }}
        >
          {_menu}
        </li>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Management</h1>
        <nav>
          <ul>{NavMenus()}</ul>
        </nav>
      </header>
      <main>{mainComp[menu]}</main>
    </div>
  )
}
