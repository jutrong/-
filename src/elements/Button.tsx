import { styled } from "styled-components";

export const Button = styled.button<{
  background: string;
  border: string;
  margin?: string;
}>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  display: block;
  ${(props) => (props.color ? `color : ${props.color}` : "")};
  ${(props) => (props.border ? `border : ${props.border}` : "")};
  ${(props) => (props.background ? `background : ${props.background}` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "0 auto")};
`;
