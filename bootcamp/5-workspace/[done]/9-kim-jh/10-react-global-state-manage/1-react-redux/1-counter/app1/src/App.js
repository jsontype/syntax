import './App.css'
// 카운터 대신, 카운터 컨테이너 컴포넌트를 렌더링
import CounterContainer from './containers/CounterContainer'

export default function App() {
  return (
    <div className="App">
      {/* 글로벌 State/Action을 가진 컴포넌트 완성 */}
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
    </div>
  )
}
