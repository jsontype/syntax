import './App.css';
import Hello from './components/Hello';
import StudyIf from './components/StudyIf';
import StudyFor from './components/StudyFor';
import UseStateSample from './components/UseStateSample';
import UseStateSample2 from './components/UseStateSample2';
import { useState } from 'react';

function App() {
  // JS
  const [isCounter, setIsCounter] = useState(false);
  const [isCounter2, setIsCounter2] = useState(false);
  const [count, setCount] = useState(0);

  const users = ['Kim', 'Yang'];
  const onClick = () => {
    alert('Hello!')
  }

  // XML
  return (
    <div className="App">
      <Hello username={users[0]} handleClick={onClick} />
      <Hello username={users[1]} />
      <Hello />

      <StudyIf isSpecial username='Kim' />
      <StudyIf username='Yang' />
      <StudyIf isVIP username='Yang' />
      <StudyIf isSpecial isVIP username='Jung' />

      <StudyFor />

      <hr />
      <button onClick={() => setIsCounter(!isCounter)}>Toggle Counter1</button>
      { isCounter && <UseStateSample /> }

      <button onClick={() => setIsCounter2(!isCounter2)}>Toggle Counter2</button>
      { isCounter2 && <UseStateSample2 count={count} setCount={setCount} /> }
    </div>
  );
}

export default App;
