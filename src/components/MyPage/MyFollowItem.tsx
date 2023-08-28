import React from "react";
import * as S from "./style/MyFollowItem.style";

const MyFollowItem: React.FC = () => {
  return (
    <S.Wrap>
      <S.FollowImg />
      <S.FollowName>아마추어 손민수</S.FollowName>
      <S.FollowBTN>팔로잉</S.FollowBTN>
    </S.Wrap>
  );
};

export default MyFollowItem;
