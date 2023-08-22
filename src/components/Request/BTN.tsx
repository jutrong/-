import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 358px;
  height: 57px;
  border: none;
  border-radius: 8px;
  background-color: #ebeef2;
  color: #83839f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const BTN: React.FC = () => {
  return <Button>답변 등록</Button>;
};

export default BTN;
