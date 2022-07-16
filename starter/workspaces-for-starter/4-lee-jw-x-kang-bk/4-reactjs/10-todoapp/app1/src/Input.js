import React from 'react'

export default function Input() {
    const onClick = () => { alert('입력됐습니다.') }

    return (
        <>
            <h2>TODO</h2>
            <input type='text' placeholder='할 일 제목을 적어주세요' name='title'></input>
            <input type='text' placeholder='할 일 내용을 적어주세요' name='body'></input>
            <button onClick={onClick}>Send</button>
        </>
    )
}
