import React from "react";
import * as S from "../style/RequestLinkRegister.style";
import close from "../../../assets/images/svg/ic-x.svg";
import LinkAttachItem from "../LinkAttachItem";
import SkyBTN from "../SkyBTN";

const RequestLinkRegister = () => {
  return (
    <S.Overlay>
      <S.Content>
        <S.Close src={close} />
        <S.LinkTitle>링크 등록</S.LinkTitle>
        <S.LinkRegister placeholder="링크를 입력해주세요" />
        {/* <S.LinkRegisterAlert>올바른 링크가 아닙니다.</S.LinkRegisterAlert> */}
        <S.LinkAttachItemBox>{/* <LinkAttachItem /> */}</S.LinkAttachItemBox>
        <S.LinkNumber>링크 1개</S.LinkNumber>
        <SkyBTN />
      </S.Content>
    </S.Overlay>
  );
};

export default RequestLinkRegister;
