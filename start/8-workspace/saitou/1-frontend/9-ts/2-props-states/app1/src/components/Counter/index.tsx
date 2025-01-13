import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center p-4 border rounded shadow-md w-64 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-xl mb-4">現在のカウント: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          増やす
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          減らす
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          リセット
        </button>
      </div>
    </div>
  );
};

export default Counter;