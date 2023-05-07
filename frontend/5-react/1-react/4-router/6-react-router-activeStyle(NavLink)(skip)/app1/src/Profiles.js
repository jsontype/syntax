import React from 'react'
import { NavLink } from 'react-router-dom'
// 액티브클래스 적용을 위해 CSS 임포트
import './Profiles.css'

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profile/jsontype"
                        style={{ background: 'black', color: 'white' }}
                    >
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile/kimkim12"
                        className={"red"}
                    >
                        kimkim12
                    </NavLink>
                </li>
            </ul>
            <div>유저를 선택해주세요.</div>
        </div>
    )
}

export default Profiles
