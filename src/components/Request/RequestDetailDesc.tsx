import React from "react";
import * as S from "./style/RequestDeatilDesc.style";

const RequestDetailDesc: React.FC = () => {
  return (
    <S.Wrap>
      <S.RequestDetailImg />
      <S.RequestDetailDescText>
        울지민이 라방보다가 지민이가 낀 악세사리가 너무 예쁜거 있죠! ㅜㅜㅜ 제발
        이것좀 찾아 주세요... 찾아봐도 모르겠어요 ㅜㅜ 도와주세요!!
      </S.RequestDetailDescText>
    </S.Wrap>
  );
};

export default RequestDetailDesc;
