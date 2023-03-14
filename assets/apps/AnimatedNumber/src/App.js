import React from 'react';
import AnimatedNumber from './AnimatedNumber';

function App() {
  const score = 9754;

  return (
    <div>
      <h2>
        Score:{' '}
        <AnimatedNumber number={score} duration={2000} delay={50} />
      </h2>
    </div>
  );
}

export default App;