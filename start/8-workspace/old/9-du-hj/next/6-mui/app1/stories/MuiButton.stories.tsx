// 스토리북에 표시될 버튼 화면
import React from "react"
// ComponentStory : 스토리북에 필요한 실제 태그 <button>를 설정한다.
// ComponentMeta : 스토리북에 필요한 컴포넌트의 타입을 설정한다.
import { ComponentStory, ComponentMeta } from "@storybook/react"
// 버튼 컴포넌트를 임포트한다.
import MuiButton from "./MuiButton"

export default {
  title: "Example/MuiButton",
  component: MuiButton,
  // 인자값 타입
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MuiButton>

// 템플릿
const Template: ComponentStory<typeof MuiButton> = (args) => <MuiButton {...args} />

// Primary 버튼의 인자값 설정
export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: "Button",
}

// Secondary 버튼의 인자값 설정
export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: "Button",
}

// Large 버튼의 인자값 설정
export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Button",
}

// Small 버튼의 인자값 설정
export const Small = Template.bind({})
Small.args = {
  size: "small",
  label: "Button",
}