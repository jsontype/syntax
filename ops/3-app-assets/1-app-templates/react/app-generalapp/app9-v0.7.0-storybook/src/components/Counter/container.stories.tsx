import React from "react"
import { Story } from "@storybook/react/types-6-0"
import { Provider } from "react-redux"
import { createStore } from "redux"
import CounterContainer from "./container"
import rootReducer from "../../modules"

const store = createStore(rootReducer)

export default {
  title: "Components/CounterContainer",
  component: CounterContainer,
}

const Template: Story = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)

export const Default = Template.bind({})
