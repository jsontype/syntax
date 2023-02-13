import './App.css'
// 3. 컴포넌트 임포트한다.
import Hello from './Hello'

export default function App() {  
    return (
        <div className="hello">
            {/* 4. 컴포넌트 쓴다. */}
            <Hello />
            <Hello />
            <Hello />
        </div>
    )
}

// 아래는 익스포트를 하기 위한 건데, 그냥 export default를 함수 앞으로 놓아도 된다.
// export default App
