import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { exchangeRatesService } from '../services/api';
import { popularCurrencies, HistoricalRate } from '../types';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExchangeRateChart: React.FC = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('KRW');
  const [historicalRates, setHistoricalRates] = useState<HistoricalRate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    fetchHistoricalRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency, targetCurrency]);

  const fetchHistoricalRates = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await exchangeRatesService.getHistoricalRates(baseCurrency, targetCurrency);
      setHistoricalRates(data);
    } catch (err) {
      setError('환율 데이터를 불러오는 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBaseCurrency = e.target.value;
    // 같은 통화를 선택했을 경우 자동으로 변경
    if (newBaseCurrency === targetCurrency) {
      setTargetCurrency(baseCurrency);
    }
    setBaseCurrency(newBaseCurrency);
  };

  const handleTargetCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTargetCurrency = e.target.value;
    // 같은 통화를 선택했을 경우 자동으로 변경
    if (newTargetCurrency === baseCurrency) {
      setBaseCurrency(targetCurrency);
    }
    setTargetCurrency(newTargetCurrency);
  };

  // Chart.js 데이터 생성
  const chartData: ChartData<'line'> = {
    labels: historicalRates.map(rate => {
      const date = new Date(rate.date);
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `${baseCurrency}/${targetCurrency} 환율`,
        data: historicalRates.map(rate => rate.rate),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${baseCurrency}에서 ${targetCurrency}로의 환율 추이 (최근 7일)`,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `환율: ${context.parsed.y.toFixed(6)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value: any) => {
            return value.toFixed(6);
          }
        }
      }
    }
  };

  return (
    <div className="exchange-rate-chart">
      <h2>환율 차트</h2>

      <div className="chart-controls">
        <div className="select-group">
          <label htmlFor="baseCurrency">기준 통화</label>
          <select
            id="baseCurrency"
            value={baseCurrency}
            onChange={handleBaseCurrencyChange}
          >
            {popularCurrencies.map(currency => (
              <option key={`base-${currency.code}`} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        <span className="currency-divider">→</span>

        <div className="select-group">
          <label htmlFor="targetCurrency">대상 통화</label>
          <select
            id="targetCurrency"
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
          >
            {popularCurrencies.map(currency => (
              <option key={`target-${currency.code}`} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={fetchHistoricalRates}
          className="refresh-button"
          disabled={loading}
        >
          {loading ? '로딩 중...' : '새로고침'}
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="chart-container">
        {loading ? (
          <div className="loading-indicator">데이터를 불러오는 중...</div>
        ) : (
          historicalRates.length > 0 ? (
            <Chart
              ref={chartRef}
              type="line"
              data={chartData}
              options={chartOptions}
              height={300}
            />
          ) : (
            <div className="no-data">데이터가 없습니다.</div>
          )
        )}
      </div>

      {historicalRates.length > 0 && (
        <div className="chart-info">
          <div className="current-rate">
            <strong>현재 환율:</strong> 1 {baseCurrency} = {historicalRates[historicalRates.length - 1].rate.toFixed(6)} {targetCurrency}
          </div>
          <div className="rate-change">
            {historicalRates.length > 1 && (
              <>
                <strong>변동률:</strong>
                {(() => {
                  const firstRate = historicalRates[0].rate;
                  const lastRate = historicalRates[historicalRates.length - 1].rate;
                  const changePercentage = ((lastRate - firstRate) / firstRate) * 100;
                  const isPositive = changePercentage > 0;

                  return (
                    <span className={isPositive ? 'positive-change' : 'negative-change'}>
                      {isPositive ? '+' : ''}{changePercentage.toFixed(2)}%
                    </span>
                  );
                })()}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeRateChart;
