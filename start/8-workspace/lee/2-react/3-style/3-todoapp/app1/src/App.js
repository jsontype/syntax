// CSS
import './App.css';
import Movies from './components/Movies';
import News from './components/News';
import Todos from './components/Todos';
import Top from './components/Top';
import { useState } from 'react';

// JSX 문법
export default function App() {
  // JS
  const [isMovies, setIsMovies] = useState(false);
  const [isNews, setIsNews] = useState(false);
  const [isTodos, setIsTodos] = useState(false);

  // XML
  return (
    <>
      <Top isMovies={isMovies} setIsMovies={setIsMovies} isNews={isNews} setIsNews={setIsNews} isTodos={isTodos} setIsTodos={setIsTodos} />
      { isMovies && <Movies /> }
      { isNews && <News /> }
      { isTodos && <Todos /> }
    </>
  );
}
