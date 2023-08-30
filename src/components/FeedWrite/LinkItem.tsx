import React from "react";
import * as S from "./style/LinkItem.style";
import x from "../../assets/images/svg/ic-x.svg";

type LinkItemType = {
  deletevalue?: boolean;
  itemImg: string;
  itemPrice: string;
  itemName: string;
  deleteclick?: () => void;
};

const LinkItem: React.FC<LinkItemType> = ({
  deletevalue,
  itemImg,
  itemPrice,
  itemName,
  deleteclick,
}) => {
  return (
    <S.Wrap>
      <S.AttachImg src={itemImg} />
      {deletevalue && <S.Delete src={x} onClick={deleteclick} />}
      <S.AttachTitle>{itemName}</S.AttachTitle>
      <S.AttachPrice>{itemPrice}</S.AttachPrice>
    </S.Wrap>
  );
};

export default LinkItem;
