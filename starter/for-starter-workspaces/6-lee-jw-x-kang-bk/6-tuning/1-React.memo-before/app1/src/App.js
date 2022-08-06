import React, { useState } from 'react'

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <>
            <button onClick={() => setCount1(count1 + 1)}>Count1 +</button>
            <button onClick={() => setCount2(count2 + 1)}>Count2 +</button>
            <p>count1: {count1}</p>
            <p>count2: {count2}</p>
        </>
    );
}

export default App;
