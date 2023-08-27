import React from "react";
import * as S from "../style/RequestDatilWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";

const RequestDetailWriterHeader: React.FC = () => {
  return (
    <S.Wrap>
      <S.Left>
        <S.QuestionSVG src={question} />
        <S.QuestionTitleBox>
          <S.QuestionTitle>제발 이것 좀 찾아주세요...</S.QuestionTitle>
          <S.QuestionTitleInfo>
            <S.QuestionUserName>아마추어 손민수</S.QuestionUserName>
            <S.QuestionDate>2023.08.10</S.QuestionDate>
          </S.QuestionTitleInfo>
        </S.QuestionTitleBox>
      </S.Left>
      <S.Right>
        <S.More src={more} />
      </S.Right>
    </S.Wrap>
  );
};

export default RequestDetailWriterHeader;
