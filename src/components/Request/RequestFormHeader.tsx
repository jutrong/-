import React from "react";
import styled from "styled-components";
import questionfill from "../../assets/images/svg/ic-question-fill.svg";

const Wrap = styled.div`
  width: 100%;
  height: 46px;
  padding: 7px 9px;
`;
const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
`;
const QuestionSVG = styled.img``;
const QuestionTitleInput = styled.input`
  width: 100%;
  font-family: "Pretendard-Medium";
  font-size: 15px;
  color: #6c7080;
`;
const QuestionTitleLable = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 15px;
  color: #6c7080;
  white-space: nowrap;
`;
const QuestionDesc = styled.div``;
const QuestionDescInput = styled.input``;
const QuestionDescLabel = styled.div``;

const RequestFormHeader: React.FC = () => {
  return (
    <Wrap>
      <QuestionForm>
        <QuestionTitle>
          <QuestionSVG src={questionfill} />
          <QuestionTitleInput placeholder="의뢰 제목을 입력해 주세요." />
          <QuestionTitleLable>0/25자</QuestionTitleLable>
        </QuestionTitle>
        <QuestionDesc>
          <QuestionDescInput placeholder="의뢰 내용을 입력해 주세요." />
          <QuestionDescLabel>0/300자</QuestionDescLabel>
        </QuestionDesc>
      </QuestionForm>
    </Wrap>
  );
};

export default RequestFormHeader;
