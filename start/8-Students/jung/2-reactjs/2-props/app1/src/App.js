import './App.css';
import Hello from './components/Hello';

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
    </div>
  );
}

export default App;
