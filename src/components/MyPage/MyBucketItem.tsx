import React from "react";
import * as S from "./style/MyBucketItem.style";
import bookmark from "../../assets/images/svg/ic-bookmark.svg";

const MyBucketItem: React.FC = () => {
  return (
    <S.Wrap>
      <S.ItemImg />
      <S.Artist>전정국</S.Artist>
      <S.Box>
        <S.ItemName>비행사 우주...</S.ItemName>
        <S.Bookmark src={bookmark} />
      </S.Box>
      <S.Price>12,000원</S.Price>
    </S.Wrap>
  );
};

export default MyBucketItem;
