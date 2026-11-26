'use client'

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Counter</h2>
      <p className="text-xl">{count}</p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
