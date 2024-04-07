import React from "react";

export default function Movies({ name, vip, money }) {
  const isMoney = money ? "有料" : "無料";

  return (
    <div>
      <h1>Movie App</h1>
      <h3>
        User: {name} {isMoney} {vip && "VIP"} 様
      </h3>
    </div>
  );
}
