import React from 'react'
import { NavLink } from 'react-router-dom'

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profile/jsontype"
                        activeStyle={{ background: 'black', color: 'white' }}
                    >
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile/kimkim12"
                        activeStyle={{ background: 'black', color: 'white' }}
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
