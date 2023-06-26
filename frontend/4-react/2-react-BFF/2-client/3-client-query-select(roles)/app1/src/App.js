import "./App.css"
import React, { useState } from "react"
// ApolloClient 모듈 임포트
import { ApolloProvider } from "@apollo/client"
import { ApolloClient, InMemoryCache } from "@apollo/client"

import Roles from "./components/roles"
import Teams from "./components/teams"
import People from "./components/people"

// client : GraphQL 서버로와 정보를 주고받을 ApolloClient 객체
const client = new ApolloClient({
  // uri : GraphQL 서버의 주소
  uri: "http://localhost:4000",
  // cache : InMemoryCache를 통한 캐시 관리
  cache: new InMemoryCache(),
})

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
      {/* 최상위 div안의 내부 요소들을 모두 ApolloProvider로 감싸준다. */}
      <ApolloProvider client={client}>
        <header className="App-header">
          <h1>Company Management</h1>
          <nav>
            <ul>{NavMenus()}</ul>
          </nav>
        </header>
        <main>{mainComp[menu]}</main>
      </ApolloProvider>
    </div>
  )
}
