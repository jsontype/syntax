import React from 'react'
import { Link } from 'react-router-dom'

export default function Profiles() {
  return (
    <div>
        <h3>유저목록</h3>
        <ul>
            <li><Link to="/profile/jsontype">jsontyper</Link></li>
            <li><Link to="/profile/kim">Kim00</Link></li>
        </ul>        
        <div>유저를 선택해주세요.</div>
    </div>
  )
}
