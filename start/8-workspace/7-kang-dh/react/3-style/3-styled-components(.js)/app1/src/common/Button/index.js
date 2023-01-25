import styled, { css } from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${(props) => props.color || "black"};
  border-radius: 10px;
  color: white;
  border: 1px solid white;
  ${(props) =>
    props.huge &&
    css`
      width: 70px;
      height: 50px;
    `}
`;

export default Button;
