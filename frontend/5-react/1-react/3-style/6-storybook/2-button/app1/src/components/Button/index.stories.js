import React from "react"
import Button from "./"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    style: { control: "object" },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "버튼 텍스트",
  onClick: () => {
    alert("버튼을 클릭했음")
  },
  style: {
    backgroundColor: "blue",
    color: "white",
    fontSize: "16px",
    padding: "10px",
  },
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  style: {
    backgroundColor: "gray",
    color: "white",
    fontSize: "16px",
    padding: "10px",
  },
  disabled: true,
}
