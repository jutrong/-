import React from "react";
import * as S from "./style/LinkAttachItem.style";
import x from "../../assets/images/svg/ic-x.svg";
import { LinkItemType } from "../../types/request";

const LinkAttachItem: React.FC<LinkItemType> = ({
  deletevalue,
  itemImg,
  itemPrice,
  itemName,
  itemUrl,
  deleteclick,
}) => {
  return (
    <S.Wrap
      onClick={() => {
        window.open(itemUrl);
      }}
    >
      <S.AttachImg src={itemImg} />
      {deletevalue && <S.Delete src={x} onClick={deleteclick} />}
      <S.AttachTitle>{itemName}</S.AttachTitle>
      <S.AttachPrice>{itemPrice}</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkAttachItem;
