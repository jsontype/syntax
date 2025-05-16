import React, { useState } from 'react';
import { weatherService } from '../services/api';
import { WeatherData } from '../types';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getCurrentWeather(city);
      setWeather(data);
    } catch (err) {
      setError('날씨 정보를 불러오는 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2>날씨 검색</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="도시 이름을 입력하세요"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? '로딩 중...' : '검색'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name} 날씨</h3>
          <div className="weather-details">
            <p>온도: {weather.main.temp}°C</p>
            <p>체감 온도: {weather.main.feels_like}°C</p>
            <p>습도: {weather.main.humidity}%</p>
            <p>날씨: {weather.weather[0].description}</p>
            <p>풍속: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather; 