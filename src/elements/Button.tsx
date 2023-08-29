import { styled } from "styled-components";

export const Button = styled.button<{ background: string; border: string }>`
  width: 358px;
  height: 60px;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  ${(props) => (props.color ? `color : ${props.color}` : "")};
  ${(props) => (props.border ? `border : ${props.border}` : "")};
  ${(props) => (props.background ? `background : ${props.background}` : "")};
`;
