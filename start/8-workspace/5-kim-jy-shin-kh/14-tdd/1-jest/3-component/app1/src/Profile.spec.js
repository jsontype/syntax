import React from "react"
import { render } from "@testing-library/react"
import Profile from "./Profile"

describe("<Profile />의 테스트", () => {
  it("이전 테스트시 찍힌 스냅샷과 현재 스냅샷이 일치하는가?", () => {
    const utils = render(<Profile username="Jsontype" name="D.Yang" />)
    expect(utils.container).toMatchSnapshot()
  })
  it("username와 name 프롭스를 제대로 표시하는가?", () => {
    const utils = render(<Profile username="Jsontype" name="D.Yang" />)
    utils.getByText("Jsontype") // 해당 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(D.Yang)") // 해당 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/D.Y/) // 정규식 /D.Y/ 을 통과하는 엘리먼트가 있는지 확인
  })
})
