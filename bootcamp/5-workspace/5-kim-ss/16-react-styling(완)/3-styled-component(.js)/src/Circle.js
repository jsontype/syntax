import styled, { css } from "styled-components";

const Circle = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: ${(props) => props.color || "black"};
  ${(props) =>
    props.huge &&
    css`
      width: 100px;
      height: 100px;
    `}
`;

export default Circle;
