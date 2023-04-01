import React from "react"
import { action } from "@storybook/addon-actions"
import News from "./"

export default {
  title: "Components/News",
  component: News,
}

const sampleNews = [
  {
    points: 100,
    id: 1,
    url: "https://google.com",
    title: "Sample News 1",
    user: "Sample User 1",
  },
  {
    points: 80,
    id: 2,
    url: "https://google.com",
    title: "Sample News 2",
    user: "Sample User 2",
  },
  {
    points: 60,
    id: 3,
    url: "https://google.com",
    title: "Sample News 3",
    user: "Sample User 3",
  },
]

const Template = (args) => <News {...args} />

export const Default = Template.bind({})
Default.args = {
  news: sampleNews,
  setNews: action("setNews"),
}
