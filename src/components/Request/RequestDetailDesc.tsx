import React from "react";
import * as S from "./style/RequestDeatilDesc.style";

type RequestDescProps = {
  desc: string;
  img: string;
};

const RequestDetailDesc: React.FC<RequestDescProps> = ({ desc, img }) => {
  return (
    <S.Wrap>
      <S.RequestDetailImg src={img} />
      <S.RequestDetailDescText>{desc}</S.RequestDetailDescText>
    </S.Wrap>
  );
};

export default RequestDetailDesc;
