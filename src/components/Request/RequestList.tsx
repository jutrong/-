import React from "react";
import * as S from "./style/RequestLink.style";

const RequestList: React.FC = () => {
  return (
    <S.Wrap>
      <S.ListImg />
      <S.LeftBox>
        <S.ListTitle>제발 이것좀 찾아 주세요 ㅜㅜ</S.ListTitle>
        <S.ListInfo>
          <S.ListUserName>아마추어 손민수</S.ListUserName>
          <S.ListTime>10분전</S.ListTime>
        </S.ListInfo>
      </S.LeftBox>
    </S.Wrap>
  );
};

export default RequestList;
