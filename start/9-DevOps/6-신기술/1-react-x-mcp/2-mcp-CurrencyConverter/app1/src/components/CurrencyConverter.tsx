import React, { useState, useEffect } from 'react';
import { exchangeRatesService } from '../services/api';
import { popularCurrencies, CurrencyConversion } from '../types';

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KRW');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<CurrencyConversion | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertCurrency = async () => {
    if (!amount || amount <= 0) {
      setError('유효한 금액을 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await exchangeRatesService.convertCurrency(fromCurrency, toCurrency, amount);
      setResult(data);
    } catch (err) {
      setError('환율 변환 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 페이지 로드 시 최초 변환 실행
  useEffect(() => {
    convertCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    convertCurrency();
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromCurrency = e.target.value;
    // 같은 통화를 선택했을 경우 자동으로 변경
    if (newFromCurrency === toCurrency) {
      setToCurrency(fromCurrency);
    }
    setFromCurrency(newFromCurrency);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToCurrency = e.target.value;
    // 같은 통화를 선택했을 경우 자동으로 변경
    if (newToCurrency === fromCurrency) {
      setFromCurrency(toCurrency);
    }
    setToCurrency(newToCurrency);
  };

  // 통화 기호 찾기
  const findCurrencySymbol = (code: string) => {
    const currency = popularCurrencies.find(c => c.code === code);
    return currency?.symbol || '';
  };

  return (
    <div className="currency-converter">
      <h2>실시간 환율 변환기</h2>

      <form onSubmit={handleSubmit} className="converter-form">
        <div className="input-group">
          <label htmlFor="amount">금액</label>
          <div className="amount-input">
            <span className="currency-symbol">{findCurrencySymbol(fromCurrency)}</span>
            <input
              type="text"
              id="amount"
              value={amount === 0 ? '' : amount}
              onChange={(e) => {
                // 숫자만 허용하는 정규식
                const numericValue = e.target.value.replace(/[^0-9.]/g, '');

                // 입력값이 비어있으면 0으로 설정
                if (numericValue === '') {
                  setAmount(0);
                } else {
                  // 숫자로 변환하여 설정
                  setAmount(Number(numericValue));
                }
              }}
              min="0.01"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="currency-selectors">
          <div className="select-group">
            <label htmlFor="fromCurrency">통화</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {popularCurrencies.map(currency => (
                <option key={`from-${currency.code}`} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="swap-button"
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
          >
            ⇄
          </button>

          <div className="select-group">
            <label htmlFor="toCurrency">변환</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {popularCurrencies.map(currency => (
                <option key={`to-${currency.code}`} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="convert-button"
          disabled={loading}
        >
          {loading ? '변환 중...' : '변환하기'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {result && (
        <div className="conversion-result">
          <div className="result-amount">
            <span className="amount">{amount.toLocaleString()} {fromCurrency}</span>
            <span className="equals">=</span>
            <span className="converted-amount">
              {findCurrencySymbol(toCurrency)} {result.result?.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })} {toCurrency}
            </span>
          </div>
          <div className="exchange-rate">
            <small>
              1 {fromCurrency} = {result.result && (result.result / amount).toLocaleString(undefined, { maximumFractionDigits: 6, minimumFractionDigits: 6 })} {toCurrency}
            </small>
          </div>
          <div className="update-time">
            <small>업데이트: {new Date(result.date).toLocaleString()}</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter; 