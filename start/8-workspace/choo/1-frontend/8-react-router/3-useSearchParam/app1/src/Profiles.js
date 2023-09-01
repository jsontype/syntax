import React from "react"
import { Link } from "react-router-dom"

export default function Profiles() {
  return (
    <div>
      <h1>Profiles</h1>
      <div>
        ID: <Link to="/profile/kim">Kim</Link>
      </div>
      <div>
        ID: <Link to="/profile/yang">Yang</Link>
      </div>
    </div>
  )
}
