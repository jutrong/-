import * as S from "./style";
import test from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import React from "react";
type props = {
  id: string;
  img: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  selected: boolean;
};
const BucketItem: React.FC<props> = ({
  id,
  img,
  title,
  onClick,
  selected = false,
}) => {
  console.log("Bucket", selected);
  return (
    <S.BucketItemContainer key={id} onClick={onClick}>
      <S.BucketItemImage $url={img} selected={selected} />
      <S.BucketItemTitle>{title}</S.BucketItemTitle>
    </S.BucketItemContainer>
  );
};
export default BucketItem;
