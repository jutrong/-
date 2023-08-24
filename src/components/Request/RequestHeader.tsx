import React from "react";
import * as S from "./style/RequestHeader.style";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import edit from "../../assets/images/svg/ic-edit.svg";

const RequestHeader: React.FC = () => {
  return (
    <S.Wrap>
      <S.BackBTN src={arrow} />
      <S.Title>손민수템 의뢰</S.Title>
      <S.RequestFormEdit src={edit} />
    </S.Wrap>
  );
};

export default RequestHeader;
