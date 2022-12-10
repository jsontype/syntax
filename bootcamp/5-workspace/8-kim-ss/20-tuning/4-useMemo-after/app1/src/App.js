import React, { useState, useMemo } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 파라미터의 수치를 2배로 해서 리턴한다.
  // 불필요한 루프를 실행해서, 계산에 시간이 꽤 걸리는 상태이다.
  const double = (count) => {
    let i = 0;
    while (i < 3000000000) i++;
    console.log("run double");
    return count * 2;
  };

  // ★★ 값 메모화
  // useMemo 사용시, 기존의 함수부는 함수형 업데이트를 해준다.
  // DEPS 배열에는 값이 참조하고 있는 변수를 넣는다.
  const doubledCount = useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
}

export default App;
