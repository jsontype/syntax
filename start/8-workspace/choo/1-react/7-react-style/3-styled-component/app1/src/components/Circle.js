import styled, { css } from "styled-components"

const Circle = styled.div`
  background: ${(props) => props.color || "black"};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`

export default Circle
