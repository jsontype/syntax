import React from 'react'
import { Link } from 'react-router-dom'

export default function Profiles() {
    return (
        <div>
            <h3>유저 목록:</h3>
            <Link to="/profile/jsontype">jsontype</Link> / &nbsp;
            <Link to="/profile/dududu">du</Link>
            <div>유저를 선택해주세요.</div>
        </div>
    )
}
