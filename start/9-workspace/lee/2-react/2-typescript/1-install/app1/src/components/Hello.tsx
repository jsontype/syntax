import React from "react";

type HelloProps = {
  name: string;
  onClick: (name: string) => void;
};

export default function Hello({ name, onClick }: HelloProps) {
  return <div onClick={() => onClick(name)}>Hello {name}!</div>;
}
