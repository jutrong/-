import React from "react";
import * as S from "../style/RequestNoWriterResponse.style";
import LinkAttachItem from "../LinkAttachItem";

const RequestNoWriterResponse: React.FC = () => {
  return (
    <S.Wrap>
      <S.ProfileBox>
        <S.ProfileImg />
        <S.ProfileInfo>
          <S.UserName>정의로운 손민수</S.UserName>
          <S.ResponesInfo>
            <S.ClearNumber>채택된 의뢰 20개</S.ClearNumber>
            <S.Date>10분전</S.Date>
          </S.ResponesInfo>
        </S.ProfileInfo>
      </S.ProfileBox>
      <S.ImgsBox>
        <LinkAttachItem />
      </S.ImgsBox>
    </S.Wrap>
  );
};

export default RequestNoWriterResponse;
