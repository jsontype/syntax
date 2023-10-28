import './App.css';
import Hello from './Hello';
import Hello2 from './Hello2';
import Hello3 from './Hello3';

export default function App() {
  // JSX 문법

  // JS
  const userName1 = "Boss"
  const userName2 = "Shin"
  const userName3 = "Oh"

  // XML
  return (
    // fragment <></>
    <>
      <div className="App">
        <Hello textColor={'red'} userName={userName1}/>
        <Hello textColor={'blue'} userName={userName2}/>
        <Hello textColor={'orange'} userName={userName3}/>
        <Hello2 textColor={'red'} userName={userName1}/>
        <Hello2 textColor={'blue'} userName={userName2}/>
        <Hello2 textColor={'orange'} userName={userName3}/>
        <Hello3>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </Hello3>
      </div>
    </>
  );
}
