import React from 'react'
import TodoItem from './TodoItem'
import { render, fireEvent } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'

describe('<TodoItem /> 컴포넌트 테스트', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: false
  }

  // 중복제거 리팩토링을 하기 위한 setup 함수 선언
  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo }
    const utils = render(<TodoItem {...initialProps} {...props} />) // render 함수
    const { getByText } = utils // render 함수를 호출하면 나오는 Varient + Query 함수
    const todo = props.todo || initialProps.todo
    const span = getByText(todo.text)
    const button = getByText('삭제')
    return {
      ...utils,
      span,
      button
    }
  }

  it('이 컴포넌트에 필요한 span, button이 있는가?', () => {
    // 중복제거 리팩토링을 하기 위한 setup 함수 사용
    const { span, button } = setup()
    expect(span).toBeTruthy()
    expect(button).toBeTruthy()
  })

  it('todo 객체의 done 값이 true일 때, 삭제선이 표시되는가?', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } })
    expect(span).toHaveStyle({ 'text-decoration': 'line-through' })
  })

  it('todo 객체의 done 값이 false일 때, 삭제선이 표시되지 않는가?', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } })
    expect(span).not.toHaveStyle({ 'text-decoration': 'line-through' })
  })

  it('onToggle 함수를 실행하면 done 값이 토글링되는가?', () => {
    const onToggle = jest.fn()
    const { span } = setup({ onToggle })
    fireEvent.click(span)
    expect(onToggle).toBeCalledWith(sampleTodo.id)
  })

  it('onRemove 함수를 실행하면 id를 props로 전달하는가?', () => {
    const onRemove = jest.fn()
    const { button } = setup({ onRemove })
    fireEvent.click(button)
    expect(onRemove).toBeCalledWith(sampleTodo.id)
  })
})
