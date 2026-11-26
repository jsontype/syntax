'use client';

import { useState } from 'react';

interface Word {
  id: number;
  english: string;
  korean: string;
  memorized: boolean;
}

interface WordListProps {
  words: Word[];
  onWordSelect: (index: number) => void;
}

export default function WordList({ words = [], onWordSelect }: WordListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = words.filter(
    (word) =>
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.korean.includes(searchTerm)
  );

  if (!words || words.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">단어 목록</h2>
        <p className="text-gray-500">단어가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">단어 목록</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="단어 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="max-h-96 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                영어
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                한국어
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredWords.map((word, index) => (
              <tr
                key={word.id}
                onClick={() => onWordSelect(index)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-4 py-2">{word.english}</td>
                <td className="px-4 py-2">{word.korean}</td>
                <td className="px-4 py-2">
                  {word.memorized ? (
                    <span className="text-green-500">암기 완료</span>
                  ) : (
                    <span className="text-yellow-500">학습 중</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 