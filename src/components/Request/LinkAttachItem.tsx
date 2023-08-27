import React from "react";
import * as S from "./style/LinkAttachItem.style";
import x from "../../assets/images/svg/ic-x.svg";

const LinkAttachItem = () => {
  return (
    <S.Wrap>
      <S.AttachImg>
        <S.Delete src={x} />
      </S.AttachImg>
      <S.AttachTitle>moonchuld</S.AttachTitle>
      <S.AttachPrice>12000원</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkAttachItem;
