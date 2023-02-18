import styled, { css } from "styled-components"

const Button = styled.button`
  display: block;
  border: 1px solid #fff;
  color: #fff;
  background: ${(props) => props.color || "white"};
  border-radius: 5px;
  width: ${(props) => props.size || "100px;"};
  ${(props) =>
    props.huge &&
    css`
      width: 200px;
    `}
`

export default Button
