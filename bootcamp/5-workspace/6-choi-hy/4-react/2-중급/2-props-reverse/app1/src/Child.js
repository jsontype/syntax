import React, { useState, useEffect } from "react";

export default function Child({ onGift }) {
  // 1. 자식이 선물을 준비한다.
  const [gift, setGift] = useState("");

  // 2. 이벤트를 실행해서 선물 state를 준비한다.(산다.)
  const onClick = () => {
    setGift("Grandeur");
  };

  // 3. gift라는 선물이 준비되고(null -> 'Grandeur'), onGift라는 부모의 요청이 있을 때, 보낸다.
  useEffect(() => {
    onGift && onGift(gift);
  }, [gift, onGift]);

  return (
    <>
      <button onClick={onClick}>Send</button>
    </>
  );
}
