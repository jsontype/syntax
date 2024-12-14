import styled, { css } from "styled-components"

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
  ${(props) =>
    props.color === "red"
      ? css`
          background: red;
        `
      : props.color === "blue"
      ? css`
          background: blue;
        `
      : css`
          blackground: black;
        `}
`

export default Circle
