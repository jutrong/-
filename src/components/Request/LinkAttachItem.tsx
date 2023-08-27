import React from "react";
import * as S from "./style/LinkAttachItem.style";
import x from "../../assets/images/svg/ic-x.svg";

type LinkItemType = {
  deletevalue?: boolean;
};

const LinkAttachItem: React.FC<LinkItemType> = ({ deletevalue }) => {
  return (
    <S.Wrap>
      <S.AttachImg>{deletevalue && <S.Delete src={x} />}</S.AttachImg>
      <S.AttachTitle>moonchuld</S.AttachTitle>
      <S.AttachPrice>12000원</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkAttachItem;
