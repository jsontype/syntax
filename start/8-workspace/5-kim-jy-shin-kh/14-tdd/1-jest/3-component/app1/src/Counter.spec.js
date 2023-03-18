import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

describe("Counter 앱 테스트", () => {
  it("스냅샷과 일치?", () => {
    const utils = render(<Counter />)
    expect(utils.container).toMatchSnapshot()
  })
  it("1개의 숫자와 2개의 버튼을 갖고 있는가?", () => {
    const utils = render(<Counter />)
    // 버튼과 숫자가 있는지 확인
    utils.getByText("0")
    utils.getByText("+1")
    utils.getByText("-1")
  })
  it("더하기 기능이 잘 동작하는가?", () => {
    const utils = render(<Counter />)
    const number = utils.getByText("0")
    const plusButton = utils.getByText("+1")
    /* 
      fireEvent()는 이벤트를 발생시켜준다. 사용법은 다음과 같다.
      "fireEvent.이벤트이름(DOM, 이벤트객체)"
      클릭 이벤트의 경우엔 이벤트객체를 따로 넣어주지 않아도 되지만, 
      예를 들어서 change 이벤트의 경우엔 다음과 같이 해줘야 한다.
      "fireEvent.change(myInput, { target: { value: 'hello world' } })"
      아래는 fireEvent를 이용해 plusButton을 클릭하는 이벤트를 두번 발생시킨다.
    */
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    expect(number.textContent).toBe("2") // textContent를 직접 비교
  })
  it("빼기 기능이 잘 동작하는가?", () => {
    const utils = render(<Counter />)
    const number = utils.getByText("0")
    const minusButton = utils.getByText("-1")
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    expect(number.textContent).toBe("-2") // textContent를 직접 비교
  })
})
