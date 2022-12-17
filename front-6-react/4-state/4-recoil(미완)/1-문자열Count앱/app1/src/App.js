import React from "react";
import { RecoilRoot } from "recoil"
import { CharacterCounter } from "./Atoms/CharacterCounter"

export default function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
