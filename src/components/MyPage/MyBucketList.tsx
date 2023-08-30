import React from "react";
import * as S from "./style/MyBucketList.style";
import { useNavigate } from "react-router-dom";

type BucketData = {
  userid: number;
  id: number;
  bucketName: string;
  img: string;
  state: boolean;
};

const MyBucketList: React.FC<BucketData> = ({
  id,
  bucketName,
  img,
  userid,
  state,
}) => {
  const navigation = useNavigate();

  return (
    <S.UserBucketBox
      onClick={() => {
        if (state) {
          navigation(`/mypage/${userid}/bucket/${id}`);
        }
        return;
      }}
    >
      <S.UserBucketImg src={img} />
      <S.UserBucketLabel>{bucketName}</S.UserBucketLabel>
    </S.UserBucketBox>
  );
};

export default MyBucketList;
