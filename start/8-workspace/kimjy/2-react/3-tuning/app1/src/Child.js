import React, { useState, memo, useMemo, useCallback } from "react";

const Child = memo(() => {
  const [count2, setCount2] = useState(0);

  // 컴포넌트의 경우: memo로 메모화한다.
  const GrandChild = memo((props) => {
    let i = 0;
    while (i < 1000000000) i++;
    console.log("render Child");
    return <button onClick={props.onClick}>Child: {props.count}</button>;
  });

  // 함수의 경우: useCallback로 메모화한다.
  const onClick = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // 변수의 경우: useMemo로 메모화한다.
  const double = count => {
    let i = 0
    while (i < 1000000000) i++
    console.log('run double')
    return count * 2
  }
  const doubledCount = useMemo(() => double(count2), [count2])

  return <GrandChild onClick={onClick} count={doubledCount} />
});

export default Child;
