import React from "react";
import { RequestDescProps } from "../../types/request";
import * as S from "./style/RequestDeatilDesc.style";

const RequestDetailDesc: React.FC<RequestDescProps> = ({ desc, img }) => {
  return (
    <S.Wrap>
      <S.RequestDetailImg src={img} />
      <S.RequestDetailDescText>{desc}</S.RequestDetailDescText>
    </S.Wrap>
  );
};

export default RequestDetailDesc;
