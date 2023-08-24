import React from "react";
import MyFollowItem from "../../components/MyPage/MyFollowItem";
import * as S from "./style/MyFollow.style";

const MyFollow: React.FC = () => {
  return (
    <S.Wrap>
      <MyFollowItem />
      <MyFollowItem />
      <MyFollowItem />
      <MyFollowItem />
    </S.Wrap>
  );
};

export default MyFollow;
