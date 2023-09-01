import * as S from "./style/BucketItem.style";
import React from "react";

type props = {
  id: number;
  img?: string;
  bucketName?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  selected: boolean;
};
const BucketItem: React.FC<props> = ({
  id,
  img,
  bucketName,
  onClick,
  selected = false,
}) => {
  return (
    <S.BucketItemContainer key={id} onClick={onClick}>
      <S.BucketItemImage $url={img} selected={selected} />
      <S.BucketItemTitle>{bucketName}</S.BucketItemTitle>
    </S.BucketItemContainer>
  );
};
export default BucketItem;
