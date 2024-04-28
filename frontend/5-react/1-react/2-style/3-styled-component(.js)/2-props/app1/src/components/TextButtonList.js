import React from "react";
// common TextButton 임포트
import TextButton from "../common/TextButton";

export default function TextButtonList() {
  const google = "https://www.google.com/";

  return (
    <>
      <TextButton href={google}>상세화면</TextButton>
      <TextButton color="orange">상세화면</TextButton>
      <TextButton color="red">상세화면</TextButton>
    </>
  );
}
