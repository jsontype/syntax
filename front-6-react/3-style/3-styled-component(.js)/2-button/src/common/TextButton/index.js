import styled from "styled-components";

const TextButton = styled.a`
  color: ${(props) => props.color || "blue"};
  text-decoration: underline;
  margin: 0 5px;
`;

export default TextButton;
