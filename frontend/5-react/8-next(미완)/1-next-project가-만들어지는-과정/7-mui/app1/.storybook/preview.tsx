// 6. React를 임포트
import React from 'react'
// 7. 화면과 동일하게 하기위해 ThemeProvider, theme 임포트
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme'

// 8. Storybook에 MUI 테마를 적용하기
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
        value: '#F3F5FB',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'blue',
        value: '#2E48A0',
      },
    ],
  },
}
