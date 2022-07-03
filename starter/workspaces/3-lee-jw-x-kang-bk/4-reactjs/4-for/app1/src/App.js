import React from 'react'
import Hello from './Hello'
import './App.css'

function App() {  
  return (
    <div className="App">
      <Hello isPremium position={'frontend'} />
      <Hello isPremium position={'backend'} />
      <Hello isPremium position={'backend'} isSpecial />
      <Hello id={1} />
      <Hello id={2} />
    </div>
  );
}

export default App;

// 문제1.
// prop명 position={'frontend'} -> "프론트엔드" 무료 우수 고객님
// prop명 position={'backend'} -> "백엔드" 무료 우수 고객님


// 문제2.
// prop명 id={1} -> "1번." 프론트엔드 무료 우수 고객님
// prop명 id={2} -> "2번." 프론트엔드 무료 우수 고객님
// prop명 id={null} -> "?번." 프론트엔드 무료 우수 고객님
