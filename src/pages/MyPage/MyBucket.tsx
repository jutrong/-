import React from "react";
import MyBucketItem from "../../components/MyPage/MyBucketItem";
import * as S from "./style/MyBucket.style";

const MyBucket: React.FC = () => {
  return (
    <S.Wrap>
      <MyBucketItem />
      <MyBucketItem />
      <MyBucketItem />
      <MyBucketItem />
    </S.Wrap>
  );
};

export default MyBucket;
