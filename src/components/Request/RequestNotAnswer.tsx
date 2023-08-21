import React from "react";
import styled from "styled-components";
import WhiteSpaceBTN from "./WhiteSpaceBTN";

const Wrap = styled.div`
  width: 100%;
  margin: 16px;
`;
const AnswerNumber = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;

const RequestNotAnswer: React.FC = () => {
  return (
    <Wrap>
      <AnswerNumber>답변 0개</AnswerNumber>
      <WhiteSpaceBTN />
    </Wrap>
  );
};

export default RequestNotAnswer;
