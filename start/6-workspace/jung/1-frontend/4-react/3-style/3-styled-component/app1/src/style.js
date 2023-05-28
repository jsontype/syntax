import styled, { css } from "styled-components"

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 5rem;
      height: 5rem;
    `}
`

export default Circle
