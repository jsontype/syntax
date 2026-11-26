import React from 'react'
import TodoList from './TodoList'
import { render, fireEvent } from '@testing-library/react'

describe('<TodoList /> 컴포넌트 테스트', () => {
  const sampleTodos = [
    {
      id: 1,
      text: 'TDD 배우기',
      done: true
    },
    {
      id: 2,
      text: '@testing-library/react 사용하기',
      done: true
    }
  ]

  it('todos 프롭에 sampleTodos 배열을 넣었을 때 두개의 TodoItem 컴포넌트로 렌더링되는가?', () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />)
    getByText(sampleTodos[0].text)
    getByText(sampleTodos[1].text)
  })

  it('onToggle, onRemove 함수가 잘 동작되는가?', () => {
    const onToggle = jest.fn()
    const onRemove = jest.fn()
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    )

    // 첫번째 onToggle 버튼을 클릭하면 첫번째 배열의 id를 가져오는가?
    fireEvent.click(getByText(sampleTodos[0].text))
    expect(onToggle).toBeCalledWith(sampleTodos[0].id)

    // 첫번째 onRemove 버튼을 클릭하면 첫번째 배열의 id를 가져오는가?
    fireEvent.click(getAllByText('삭제')[0])
    expect(onRemove).toBeCalledWith(sampleTodos[0].id)
  })
})
