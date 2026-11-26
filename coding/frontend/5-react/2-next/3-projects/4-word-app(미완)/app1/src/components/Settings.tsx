'use client';

interface Settings {
  interval: number;
  showOrder: 'english-first' | 'korean-first';
  displayMode: 'all' | 'memorized' | 'unmemorized';
  autoPlay: boolean;
}

interface SettingsProps {
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}

const defaultSettings: Settings = {
  interval: 3,
  showOrder: 'english-first',
  displayMode: 'all',
  autoPlay: false
};

type SettingValue = Settings[keyof Settings];

export default function Settings({ settings = defaultSettings, onSettingsChange }: SettingsProps) {
  const handleChange = (key: keyof Settings, value: SettingValue) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">설정</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            표시 순서
          </label>
          <select
            value={settings.showOrder}
            onChange={(e) => handleChange('showOrder', e.target.value as Settings['showOrder'])}
            className="w-full p-2 border rounded"
          >
            <option value="english-first">영어 → 한국어</option>
            <option value="korean-first">한국어 → 영어</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            자동 전환 간격 (초)
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={settings.interval}
            onChange={(e) => handleChange('interval', Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            표시 모드
          </label>
          <select
            value={settings.displayMode}
            onChange={(e) => handleChange('displayMode', e.target.value as Settings['displayMode'])}
            className="w-full p-2 border rounded"
          >
            <option value="all">전체 표시</option>
            <option value="memorized">암기한 항목만</option>
            <option value="unmemorized">암기할 항목만</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="autoPlay"
            checked={settings.autoPlay}
            onChange={(e) => handleChange('autoPlay', e.target.checked)}
            className="h-4 w-4 text-blue-500"
          />
          <label htmlFor="autoPlay" className="ml-2 text-sm text-gray-700">
            자동 재생
          </label>
        </div>
      </div>
    </div>
  );
} 