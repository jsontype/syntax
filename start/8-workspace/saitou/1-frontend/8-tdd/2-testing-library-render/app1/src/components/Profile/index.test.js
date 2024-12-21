import React from "react"
import { render } from "@testing-library/react"
import Profile from "./index"

// test("<Profile />のレンダリングテスト", () => {
describe("<Profile />のレンダリングテスト", () => {
  it("Snapshot test", () => {
    const utils = render(<Profile username="jsontyper" name="John Doe" />)
    expect(utils.container).toMatchSnapshot()
  })

  it("My Profile, username: jsontyper, name: John Doeが表示されていること", () => {
    const utils = render(<Profile username="hahaha" name="haha" />)
    utils.getByText("hahaha")
    utils.getByText("haha")
  })
})
