import styled, { css } from "styled-components"

const Button = styled.button`
  background-color: ${(props) => props.color || "red"};
  color: white;
  margin: 5px;
  border: none;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.small &&
    css`
      width: 60px;
      height: 30px;
    `}

  &:hover {
    background-color: #1a237e;
  }
`

export default Button
