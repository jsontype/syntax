import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hello from './Hello'

describe('Hello Component', () => {
  it('인삿말을 렌더링할 때, Props로 받은 name이 존재한다.', () => {
    render(<Hello name="Donghwa" />)
    // expect(screen.getByText('Hello, Donghwa!')).toBeInTheDocument()
    // 위를, Donghwa를 포함하는지를 확인하는 걸로 위 코드 변경했음.
    expect(screen.getByText(/Donghwa/)).toBeInTheDocument()
  })
})
