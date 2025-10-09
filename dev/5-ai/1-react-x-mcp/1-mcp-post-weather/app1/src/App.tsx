import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import UserList from './components/UserList';
import Weather from './components/Weather';

function App() {
  const [activeTab, setActiveTab] = useState<'posts' | 'users' | 'weather'>('posts');

  return (
    <div className="App">
      <header className="App-header">
        <h1>MCP API 튜토리얼</h1>
        <p>다양한 무료 API를 활용한 React 앱 예제</p>
      </header>

      <nav className="App-nav">
        <button
          className={activeTab === 'posts' ? 'active' : ''}
          onClick={() => setActiveTab('posts')}
        >
          게시물
        </button>
        <button
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => setActiveTab('users')}
        >
          사용자
        </button>
        <button
          className={activeTab === 'weather' ? 'active' : ''}
          onClick={() => setActiveTab('weather')}
        >
          날씨
        </button>
      </nav>

      <main className="App-content">
        {activeTab === 'posts' && <PostList />}
        {activeTab === 'users' && <UserList />}
        {activeTab === 'weather' && <Weather />}
      </main>

      <footer className="App-footer">
        <p>
          이 앱은 다음 무료 API를 사용합니다:
          <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a> |
          <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeather API</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
