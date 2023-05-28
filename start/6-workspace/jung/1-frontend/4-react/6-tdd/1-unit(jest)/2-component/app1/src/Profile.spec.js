import React from "react"
import { render } from "@testing-library/react"
import Profile from "./Profile"

// 컴포넌트 단위
describe("<Profile /> 컴포넌트가 잘 동작하는가?", () => {
  // 스냅샷 테스트
  it("이전 테스트시 찍힌 스냅샷과 현재 스냅샷이 일치하는가?", () => {
    const utils = render(<Profile username="Jsontype" name="D.Yang" />)
    expect(utils.container).toMatchSnapshot()
  })
  // 테스트 케이스
  it("username 프롭스를 제대로 표시하고 있는가?", () => {
    const utils = render(<Profile username="Jsontyper" name="D.Yang" />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    utils.getByText("Jsontyper")
  })
  it("name 프롭스를 제대로 표시하고 있는가?", () => {
    const utils = render(<Profile username="Jsontyper" name="D.Yang" />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    utils.getByText("(D.Yang)")
  })
})
