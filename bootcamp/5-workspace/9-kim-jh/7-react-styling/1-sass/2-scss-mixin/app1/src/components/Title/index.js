import React from 'react'
import Header from '../../common/Header/Header'
import Button from '../../common/Button/Button'

export default function Title () {
    const text = "안녕하세요!"
    
    return (
        <div>
            <Header text={text} />
            <Button type="primary" text="승인" />
            <Button type="warning" text="주의" />
        </div>
    )
}
