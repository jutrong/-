import React from "react";
import styled from "styled-components";
import question from "../../assets/images/svg/ic-question.svg";
import pushgin from "../../assets/images/svg/ic-pushpin.svg";
import more from "../../assets/images/svg/ic-more-horizontal.svg";

const Wrap = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Left = styled.div`
  display: flex;
`;
const QuestionSVG = styled.div`
  width: 55px;
  height: 55px;
  background: url(${question}) no-repeat;
`;
const QuestionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const QuestionTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 7px;
`;
const QuestionTitleInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const QuestionUserName = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: #666;
`;
const QuestionDate = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: #666;
`;
const Right = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 16px;
`;
const PushPin = styled.div`
  width: 24px;
  height: 24px;
  background: url(${pushgin}) no-repeat;
`;
const More = styled.div`
  width: 24px;
  height: 24px;
  background: url(${more}) no-repeat;
`;

const RequestDetailHeader: React.FC = () => {
  return (
    <Wrap>
      <Left>
        <QuestionSVG />
        <QuestionTitleBox>
          <QuestionTitle>제발 이것 좀 찾아주세요...</QuestionTitle>
          <QuestionTitleInfo>
            <QuestionUserName>아마추어 손민수</QuestionUserName>
            <QuestionDate>2023.08.10</QuestionDate>
          </QuestionTitleInfo>
        </QuestionTitleBox>
      </Left>
      <Right>
        <PushPin />
        <More />
      </Right>
    </Wrap>
  );
};

export default RequestDetailHeader;
