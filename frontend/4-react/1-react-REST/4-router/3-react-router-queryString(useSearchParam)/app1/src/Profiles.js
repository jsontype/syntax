import React from 'react'
import { Link } from 'react-router-dom'

export default function Profiles () {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profile/jsontype">jsontype</Link>
                </li>
                <li>
                    <Link to="/profile/kimkim12">kimkim12</Link>
                </li>
            </ul>
            <div>유저를 선택해주세요.</div>
        </div>
    )
}
