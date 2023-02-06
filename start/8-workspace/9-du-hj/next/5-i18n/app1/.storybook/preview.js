export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: 'lightgray',
      },
      {
        name: 'skyblue',
        value: 'skyblue',
      },
      {
        name: 'pink',
        value: 'pink',
      },
    ]
  }
}