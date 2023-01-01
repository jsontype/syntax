import React from 'react'
import styled, { css } from 'styled-components'
// 아이콘은 react-icons 라이브러리의 MdDone, MdDelete 아이콘을 사용한다.
import { MdDone, MdDelete } from 'react-icons/md'

/* 휴지통 아이콘을 담는 컴포넌트 */
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`

/* 휴지통 아이콘이 호버링시에 표시된다. ${Remove}를 Component Selector라 한다. */
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`

/* 체크박스 아이콘을 담는 컴포넌트 */
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.done && css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`

/* 체크박스에 체크했을 때, 좌측에 체크가 나타나고 텍스트의 색상이 연해진다. */
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => 
        props.done && css`
            color: #ced4da;
        `
    }
`

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            {/* 체크박스에 체크했을 때, 좌측에 체크가 나타나고 텍스트의 색상이 연해진다. */}
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            {/* 마우스를 올리면 휴지통 아이콘이 나타나고, 이를 누르면 항목이 삭제된다.  */}
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem
