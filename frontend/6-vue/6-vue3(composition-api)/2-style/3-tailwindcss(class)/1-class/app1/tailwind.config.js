/** @type {import('tailwindcss').Config} */
export default {
  // tailwind를 사용할 html 파일과 vue 파일을 지정
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // tailwind를 사용할 css 클래스 중 컬러 클래스들을 커스터마이징: 아래처럼 정의하면, 나중에, bg-primary-50 이런 식으로 사용 가능
      colors: {
        primary: {
          50: '#335FFF',
          60: '#637CFF',
          70: '#939DFF',
        },
        secondary: {
          50: '#FC325E',
          60: '#FE627B',
          70: '#FF929D',
        }
      }
    },
  },
  plugins: [],
}
