import React from "react";
import * as S from "./style/LinkAttachItem.style";
import x from "../../assets/images/svg/ic-x.svg";

type LinkItemType = {
  deletevalue?: boolean;
  itemImg: string;
  itemPrice: string;
  itemName: string;
};

const LinkAttachItem: React.FC<LinkItemType> = ({
  deletevalue,
  itemImg,
  itemPrice,
  itemName,
}) => {
  return (
    <S.Wrap>
      <S.AttachImg src={itemImg} />
      {deletevalue && <S.Delete src={x} />}
      <S.AttachTitle>
        {itemName.length < 7 ? itemName : itemName.substring(0, 7) + "..."}
      </S.AttachTitle>
      <S.AttachPrice>{itemPrice}</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkAttachItem;
