import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 10%;
  width: 50px;
  background: ${(props) => props.color || "black"};
  color: ${(props) => !props.color && "white"};

  ${(props) =>
    props.huge &&
    css`
      width: 100px;
      height: 100px;
    `}
`;

export default function ButtonList() {
  return (
    <div>
      <Button color="blue">승인</Button>
      <Button color="orange">승인</Button>
      <Button color="red">승인</Button>
      <Button>승인</Button>
      <Button color="pink" huge>
        승인
      </Button>
    </div>
  );
}
