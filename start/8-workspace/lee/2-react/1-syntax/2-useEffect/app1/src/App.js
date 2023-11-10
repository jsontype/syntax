// CSS
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Cart from './components/Cart';

// JSX 문법
export default function App() {
  // JS
  const [isOpen, setIsOpen] = useState(false)
  const [number, setNumber] = useState(0)

  // XML
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기' }</button>
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      <hr />
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
    </>
  );
}
