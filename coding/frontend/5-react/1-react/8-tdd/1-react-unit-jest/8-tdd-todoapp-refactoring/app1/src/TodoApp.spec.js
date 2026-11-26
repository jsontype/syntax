import React from 'react'
import TodoApp from './TodoApp'
import { render, fireEvent } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'

describe('<TodoApp /> 컴포넌트 테스트', () => {
  it('렌더링 결과에 TodoForm이 존재하는가?', () => {
    const { getByText } = render(<TodoApp />)
    getByText('등록') // TodoForm 존재유무 확인
  })

  it('렌더링 결과에 두개의 기본 todo 목록이 존재하는가?', () => {
    const { getByText } = render(<TodoApp />)
    getByText('TDD 배우기')
    getByText('@testing-library/react 사용하기')
  })

  it('등록 버튼을 누르면 적어둔 input value가 전달되는가?', () => {
    const { getByPlaceholderText } = render(<TodoApp />)
    const input = getByPlaceholderText('할 일을 입력하세요')
    fireEvent.change(input, {
      target: {
        value: '새 항목 추가하기'
      }
    })
    expect(input.getAttribute('value')).toBe('새 항목 추가하기')
  })

  it('첫번째 todo를 클릭하면 첫번째 done 값이 토글링되는가?', () => {
    const { getByText } = render(<TodoApp />)
    const todoText = getByText('TDD 배우기')
    expect(todoText).toHaveStyle({ 'text-decoration': 'line-through' })
    fireEvent.click(todoText)
    expect(todoText).not.toHaveStyle({ 'text-decoration': 'line-through' })
    fireEvent.click(todoText)
    expect(todoText).toHaveStyle({ 'text-decoration': 'line-through' })
  })

  it('첫번째 todo를 삭제하면 첫번째 todo가 페이지에서 사라지는가?', () => {
    const { getByText } = render(<TodoApp />)
    const todoText = getByText('TDD 배우기')
    const removeButton = todoText.nextSibling
    fireEvent.click(removeButton)
    expect(todoText).not.toBeInTheDocument()
  })
})
