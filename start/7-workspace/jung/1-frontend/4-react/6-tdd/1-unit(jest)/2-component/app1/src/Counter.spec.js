/* eslint-disable testing-library/prefer-screen-queries */
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />)
    expect(utils.container).toMatchSnapshot()
  })

  it("1개의 숫자와 2개의 버튼을 갖고 있는가?", () => {
    const utils = render(<Counter />)
    utils.getByText("0")
    utils.getByText("+")
    utils.getByText("-")
  })

  it("더하기 기능이 잘 동작하는가?", () => {
    const utils = render(<Counter />)
    const number = utils.getByText("0")
    const plusButton = utils.getByText("+")

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)

    expect(number.textContent).toBe("2")
  })

  it("빼기 기능이 잘 동작하는가?", () => {
    const utils = render(<Counter />)
    const number = utils.getByText("0")
    const minusButton = utils.getByText("-")

    fireEvent.click(minusButton)
    fireEvent.click(minusButton)

    expect(number.textContent).toBe("-2")
  })
})
