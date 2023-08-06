import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App', () => {
  it('Hello React! 텍스트가 정상적으로 렌더링되는지 확인한다.', () => {
    render(<App />)
    const textElement = screen.getByText(/Hello React!/i)
    expect(textElement).toBeInTheDocument()
  })

  it('onClick 이벤트가 발생했을 때 console.log가 호출되는지 확인한다.', () => {
    // 스파이를 이용해 console.log가 호출되었는지 확인한다.
    const consoleSpy = jest.spyOn(console, 'log')

    render(<App />)
    const textElement = screen.getByText(/Hello React!/i)
    fireEvent.click(textElement)

    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('Hello React!')

    // 테스트 후 원래 console.log를 복원한다.
    consoleSpy.mockRestore()
  })  
})
