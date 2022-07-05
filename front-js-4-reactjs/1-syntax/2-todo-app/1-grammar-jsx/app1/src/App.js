import React from 'react'
import Hello from './Hello'
const name = 'Yang'
const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정        
}

function App() {
    return (
    <>
        {/* 주석은 화면에 보이지 않습니다 */}
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <Hello 
            // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
        />
    </>
    );
}

export default App