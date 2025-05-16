import { useEffect } from 'react';

export default function UseEffectSample({ count, setCount }) {
  // count << obj -> 주소참조 -> 값의 변경을 인식할 수 없다. -> 값의 변경을 인식하려면 useState를 사용해야한다.

  // 불변성의 법칙을 지키는 이유: 라이프사이클 등의 모든 훅을 구현
  // count: 0 주소: 신오쿠보 1-1
  // setCount: 주소가 신오쿠보 1-2인 그리고 값이 1인 새로운 주소참조변수 newCount 라는 걸 만들고, 그거랑 count랑 '주소'를 교환 -> JS가 객체/배열의 변경을 인식한다. -> 라이프사이클 구현가능

  // 탄생, 사망시점은 Deps에 외부변수함수 외에 빈 배열을 넣어주면 된다.
  useEffect(() => {
    // 탄생시점
    console.log('mounted');
    setCount(0);
    // 사망시점
    return () => {
      console.log('unmounted');
    }
  }, [setCount]); // 외부변수함수는 사용할 경우에는 넣어줘야한다.

  // 업데이트 시점은 Deps에 업데이트를 확인할 변수를 넣어주면 된다.
  useEffect(() => {
    // 업데이트시점
    console.log(`updated: ${count}`);
  }, [count]);

  const APP_NAME = "Counter LifeCycle";

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{ APP_NAME }</h2>
      <div>Count: { count }</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
