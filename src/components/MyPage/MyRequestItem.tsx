import React from "react";
import * as S from "./style/MyRequestItem.style";

const MyRequestItem: React.FC = () => {
  return (
    <S.Wrap>
      <S.RequestImg />
      <S.RequestInfo>
        <S.RequestTitle>제발 이것 좀 찾아주세요 ㅜㅜ</S.RequestTitle>
        <S.Box>
          <S.RequestUser>아마추어 손민수</S.RequestUser>
          <S.RequestDate>10분전</S.RequestDate>
        </S.Box>
      </S.RequestInfo>
    </S.Wrap>
  );
};

export default MyRequestItem;
