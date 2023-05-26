import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import TodoForm from './TodoForm'

describe('<TodoForm /> 컴포넌트 테스트', () => {
  it('이 컴포넌트에 필요한 input, button이 있는가?', () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />)
    getByPlaceholderText('할 일을 입력하세요') // input 이 있는지 확인
    getByText('등록') // button이 있는지 확인
  })

  it('input 상태에서 change 이벤트를 발생시키면 value 값이 바뀌는가?', () => {
    const { getByPlaceholderText } = render(<TodoForm />)
    const input = getByPlaceholderText('할 일을 입력하세요')
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기'
      }
    })
    expect(input.getAttribute('value')).toBe('TDD 배우기')
  })
})
