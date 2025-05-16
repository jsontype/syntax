import './App.css';
import Hello from './components/Hello';
import StudyIf from './components/StudyIf';

function App() {
  // JS
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
    </div>
  );
}

export default App;
