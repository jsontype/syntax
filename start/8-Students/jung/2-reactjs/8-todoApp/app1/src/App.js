import './App.css';
import Movies from './components/Movies';
import { useState } from 'react';

function App() {
  // JS
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('default');

  // XML
  return (
    <div className="App">
      <button onClick={() => setMode('default')}>No Sort</button>
      <button onClick={() => setMode('rating')}>Sort By Rating</button>
      <button onClick={() => setMode('year')}>Sort By Year</button>
      <span>{mode}</span>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Movies</button>
        { (isOpen && mode) && <Movies mode={mode} /> }
      </div>
    </div>
  );
}

export default App;
