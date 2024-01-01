// CSS
import './App.css';
import Movies from './components/Movies';
import News from './components/News';
import Top from './components/Top';
import { useState } from 'react';

// JSX 문법
export default function App() {
  // JS
  const [isMovie, setIsMovie] = useState(false);
  const [isNews, setIsNews] = useState(false);

  // XML
  return (
    <>
      <Top isMovie={isMovie} setIsMovie={setIsMovie} isNews={isNews} setIsNews={setIsNews} />
      { isMovie && <Movies /> }
      { isNews && <News /> }
    </>
  );
}
