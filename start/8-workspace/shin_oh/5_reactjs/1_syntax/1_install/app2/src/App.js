import React from 'react';
import User from './User';

// IF 문 처리
// else 가 있으면 삼항연산자로 처리
// else 가 없으면 && 연산자로 처리
// false인 경우 혹은 대체가 필요한 경우 || 연산자로 처리
// else 가 여러개 있으면 삼항연산자를 여러개 넣어서 처리
export default function App() {
  const isVIP = true;
  const isHackUser = true;
  const email = "sth@sth.com"

  return (
    <div>
      <User userName="Mike" isPremium={"premium"} isVIP={isVIP} isHackUser={isHackUser}/>
      <User userName="Bob" isPremium={"trial user"} email={email}/>
      <User userName="Steve" email={email}/>
    </div>
  );
}
