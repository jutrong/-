import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #208df1;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  color: #fff;
  border-radius: 8px;
  text-align: center;
`;

const SkyBTN = () => {
  return <Button>링크 등록</Button>;
};

export default SkyBTN;
