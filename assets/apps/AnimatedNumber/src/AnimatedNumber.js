import React, { useState, useEffect } from 'react';

function AnimatedNumber({ number, duration, delay }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = number - currentNumber;
      const increment = Math.ceil(diff / (duration / 50));

      if (currentNumber + increment >= number) {
        setCurrentNumber(number);
        clearInterval(interval);
      } else {
        setCurrentNumber((prev) => prev + increment);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [number, duration, delay, currentNumber]);

  return <span>{currentNumber}</span>;
}

export default AnimatedNumber;
