import React from "react";
// common Button 임포트
import Button from "../common/Button";

export default function ButtonList() {
  return (
    <>
      <Button color="lightgray">BUTTON</Button>
      <Button color="gray">BUTTON</Button>
      <Button color="blue" huge>
        BUTTON
      </Button>
    </>
  );
}
