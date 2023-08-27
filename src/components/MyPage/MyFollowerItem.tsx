import React from "react";
import * as S from "./style/MyFollowerItem.style";

const MyFollowerItem: React.FC = () => {
  return (
    <S.Wrap>
      <S.FollowerImg />
      <S.FollowerName>아마추어 손민수</S.FollowerName>
      <S.FollowerBTN>팔로잉</S.FollowerBTN>
    </S.Wrap>
  );
};

export default MyFollowerItem;
