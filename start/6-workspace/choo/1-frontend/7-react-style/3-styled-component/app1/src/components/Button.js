import styled, { css } from "styled-components"

const Button = styled.button`
  display: block;
  border: 1px solid #fff;
  color: #fff;
  background: ${(props) => props.color || "white"};
  width: ${(props) => props.size || "100px"};
  border-radius: 5px;
  ${(props) =>
    props.huge &&
    css`
      width: 200px;
      height: 50px;
    `}
`

export default Button
