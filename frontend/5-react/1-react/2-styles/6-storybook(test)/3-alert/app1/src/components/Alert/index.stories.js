import React from "react"
import Alert from "./"

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    message: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["success", "info", "warning", "danger"],
      },
    },
    onClose: { action: "closed" },
  },
}

const Template = (args) => <Alert {...args} />

export const Success = Template.bind({})
Success.args = {
  message: "This is a success alert.",
  type: "success",
  onClose: () => {},
}

export const Info = Template.bind({})
Info.args = {
  message: "This is an info alert.",
  type: "info",
  onClose: () => {},
}

export const Warning = Template.bind({})
Warning.args = {
  message: "This is a warning alert.",
  type: "warning",
  onClose: () => {},
}

export const Danger = Template.bind({})
Danger.args = {
  message: "This is a danger alert.",
  type: "danger",
  onClose: () => {},
}
