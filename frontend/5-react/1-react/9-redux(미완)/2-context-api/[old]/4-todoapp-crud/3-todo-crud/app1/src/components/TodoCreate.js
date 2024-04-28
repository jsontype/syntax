import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'
/* context로부터 todo의 global state와, todo의 actions dispatch 가져오기 */
import { useTodoDispatch, useTodoNextId } from '../TodoContext'

// TodoTemplate의 하단부에 "추가" 버튼
const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${props =>
        props.open && css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `
    }
`

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`

function TodoCreate() {
    /*
        추가버튼과 "open" state를 onToggle로 연결해서, 
        버튼을 클릭하면 todo 입력 폼이 나타나고, 다시 누르면 폼이 사라진다.
    */
    const [open, setOpen] = useState(false)
    const onToggle = () => setOpen(!open)

    /* useDispatch를 통해, dispatch를 통해서 global action 불러와서, "지역 state인 인풋 value의 값"으로 "전역 state인 todo 리스트에 항목 추가"하기 1. */
    const [value, setValue] = useState('')
    const dispatch = useTodoDispatch()
    const nextId = useTodoNextId()
    const onChange = e => setValue(e.target.value)
    const onSubmit = e => {
        e.preventDefault() // 새로고침 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })
        setValue('')
        setOpen(false)
        nextId.current += 1
    }

    /* useDispatch를 통해, dispatch를 통해서 global action 불러와서, "지역 state인 인풋 value의 값"으로 "전역 state인 todo 리스트에 항목 추가"하기 2. */
    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

/* 다른 항목이 업데이트 될 때, 불필요한 리렌더링 방지 */
export default React.memo(TodoCreate)
