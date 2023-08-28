import React from "react";
import MyFollowerItem from "../../components/MyPage/MyFollowerItem";
import * as S from "./style/MyFollow.style";

const MyFollower: React.FC = () => {
  return (
    <S.Wrap>
      <MyFollowerItem />
    </S.Wrap>
  );
};

export default MyFollower;
