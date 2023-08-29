import React from "react";
import * as S from "./style/MyBucketList.style";
import x from "../../assets/images/svg/ic-x-red.svg";

type BucketData = {
  id: number;
  bucketName: string;
  img: string;
};

const MyBucketList: React.FC<BucketData> = ({ id, bucketName, img }) => {
  return (
    <S.UserBucketBox>
      <S.UserBucketImg src={img} />
      <S.UserBucketLabel>{bucketName}</S.UserBucketLabel>
      {/* <S.UserBucketDelete src={x} /> */}
    </S.UserBucketBox>
  );
};

export default MyBucketList;
