import React from "react";
import * as S from "../style/RequestDatailNoWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import pushgin from "../../../assets/images/svg/ic-pushpin.svg";

type RequestTitleProps = {
  title: string;
  username: string;
};

const RequestDetaiNoWriterlHeader: React.FC<RequestTitleProps> = ({
  title,
  username,
}) => {
  return (
    <S.Wrap>
      <S.Left>
        <S.QuestionSVG src={question} />
        <S.QuestionTitleBox>
          <S.QuestionTitle>{title}</S.QuestionTitle>
          <S.QuestionTitleInfo>
            <S.QuestionUserName>{username}</S.QuestionUserName>
            <S.QuestionDate>2023.08.10</S.QuestionDate>
          </S.QuestionTitleInfo>
        </S.QuestionTitleBox>
      </S.Left>
      <S.Right>
        <S.PushPin src={pushgin} />
      </S.Right>
    </S.Wrap>
  );
};

export default RequestDetaiNoWriterlHeader;
