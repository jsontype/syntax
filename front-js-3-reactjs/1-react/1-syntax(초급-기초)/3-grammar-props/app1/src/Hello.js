import React from 'react'

// 2. 프롭 받는다.
export default function Hello({name, mark}) {
    return (
        // 3. 프롭 쓴다. * 파라미터를 "Hello(props)"처럼 받고 "{props.name} {props.mark}"처럼 꺼내써도 된다.
        <div>Hello {name} {mark}</div>
    )
}
