import React, { useState, useEffect } from 'react';
import { exchangeRatesService } from '../services/api';
import { ExchangeRates, popularCurrencies } from '../types';
import FinancialNews from './FinancialNews';

const CurrencyDashboard: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    fetchRates();
    // 1분마다 자동으로 데이터 업데이트
    const interval = setInterval(fetchRates, 60000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency]);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await exchangeRatesService.getLatestRates(baseCurrency);
      console.log('Fetched rates:', data); // 디버깅을 위한 로그 추가
      setRates(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError('환율 정보를 불러오는 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 대시보드에 표시할 주요 통화 목록
  const displayCurrencies = popularCurrencies.filter(currency => currency.code !== baseCurrency);

  // 상승/하락 표시를 위한 임시 데이터 (실제로는 이전 데이터와 비교해야 함)
  const getRandomTrend = () => {
    const random = Math.random();
    return random > 0.5 ? 'up' : 'down';
  };

  const handleCurrencyClick = (currencyCode: string) => {
    setSelectedCurrency(currencyCode === selectedCurrency ? null : currencyCode);
  };

  // 통화 기호 찾기
  const findCurrencySymbol = (code: string) => {
    const currency = popularCurrencies.find(c => c.code === code);
    return currency?.symbol || '';
  };

  return (
    <div className="currency-dashboard">
      <div className="dashboard-header">
        <h2>통화 대시보드</h2>
        <div className="base-currency-selector">
          <label htmlFor="baseCurrency">기준 통화:</label>
          <select
            id="baseCurrency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            disabled={loading}
          >
            {popularCurrencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="dashboard-content">
        <div className="rates-panel">
          <div className="panel-header">
            <h3>실시간 환율 (1 {baseCurrency} 기준)</h3>
            {lastUpdated && (
              <div className="last-updated">
                마지막 업데이트: {lastUpdated.toLocaleTimeString()}
                <button
                  className="refresh-button"
                  onClick={fetchRates}
                  disabled={loading}
                >
                  {loading ? '...' : '↻'}
                </button>
              </div>
            )}
          </div>

          {loading ? (
            <div className="loading-indicator">환율 정보를 불러오는 중...</div>
          ) : rates && rates.rates ? (
            <div className="currency-grid">
              {displayCurrencies.map(currency => {
                // rates.rates가 존재하고, currency.code 속성이 존재하는지 확인
                const rate = rates.rates[currency.code];
                const trend = getRandomTrend(); // 실제로는 이전 데이터와 비교

                return (
                  <div
                    key={currency.code}
                    className={`currency-card ${selectedCurrency === currency.code ? 'selected' : ''}`}
                    onClick={() => handleCurrencyClick(currency.code)}
                  >
                    <div className="currency-header">
                      <div className="currency-name">
                        <span className="currency-code">{currency.code}</span>
                        <span className="currency-fullname">{currency.name}</span>
                      </div>
                      <div className={`trend-indicator ${trend}`}>
                        {trend === 'up' ? '▲' : '▼'}
                      </div>
                    </div>
                    <div className="rate-value">
                      {findCurrencySymbol(currency.code)} {rate !== undefined ? rate.toFixed(4) : 'N/A'}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-data">환율 데이터가 없습니다.</div>
          )}
        </div>

        {selectedCurrency && (
          <div className="currency-news-panel">
            <FinancialNews currencyCode={selectedCurrency} />
          </div>
        )}
      </div>

      <div className="dashboard-footer">
        <small>
          * 위의 통화 카드를 클릭하면 해당 통화에 관한 최신 뉴스를 볼 수 있습니다.
        </small>
      </div>
    </div>
  );
};

export default CurrencyDashboard; 