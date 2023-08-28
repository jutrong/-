import React from "react";
import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
`;

const MypageHeader: React.FC = () => {
  return <Wrap>여기는 헤더</Wrap>;
};

export default MypageHeader;
