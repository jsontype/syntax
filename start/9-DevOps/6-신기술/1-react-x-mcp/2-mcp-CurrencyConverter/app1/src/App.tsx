import React, { useState } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import ExchangeRateChart from './components/ExchangeRateChart';
import FinancialNews from './components/FinancialNews';
import CurrencyDashboard from './components/CurrencyDashboard';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'converter' | 'chart' | 'news'>('dashboard');

  return (
    <div className="App">
      <header className="App-header">
        <h1>MCP 금융 정보 앱</h1>
        <p>MCP 서버를 활용한 실시간 환율 및 금융 뉴스 통합 앱</p>
      </header>

      <nav className="App-nav">
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          대시보드
        </button>
        <button
          className={activeTab === 'converter' ? 'active' : ''}
          onClick={() => setActiveTab('converter')}
        >
          환율 변환기
        </button>
        <button
          className={activeTab === 'chart' ? 'active' : ''}
          onClick={() => setActiveTab('chart')}
        >
          환율 차트
        </button>
        <button
          className={activeTab === 'news' ? 'active' : ''}
          onClick={() => setActiveTab('news')}
        >
          금융 뉴스
        </button>
      </nav>

      <main className="App-content">
        {activeTab === 'dashboard' && <CurrencyDashboard />}
        {activeTab === 'converter' && <CurrencyConverter />}
        {activeTab === 'chart' && <ExchangeRateChart />}
        {activeTab === 'news' && <FinancialNews />}
      </main>

      <footer className="App-footer">
        <p>
          이 앱은 다음 무료 API를 사용합니다:
          <a href="https://exchangerate.host/" target="_blank" rel="noopener noreferrer">Exchange Rates API</a> |
          <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a>
        </p>
        <p className="mcp-info">
          <strong>MCP(Model Context Protocol)</strong>: AI가 다양한 서비스를 쉽게 활용할 수 있게 해주는 프로토콜
        </p>
      </footer>
    </div>
  );
}

export default App;
