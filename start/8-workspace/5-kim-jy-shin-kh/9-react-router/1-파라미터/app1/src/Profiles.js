import React from "react"
import { Link } from "react-router-dom"

export default function Profiles() {
  return (
    <div>
      <h2>Profiles List</h2>
      <Link to="../profile/jsontype">jsontype</Link> /
      <Link to="../profile/kimkim12">kimkim12</Link>
    </div>
  )
}
