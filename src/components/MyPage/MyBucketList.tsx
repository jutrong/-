import React from "react";
import * as S from "./style/MyBucketList.style";
import x from "../../assets/images/svg/ic-x-red.svg";
import { Link } from "react-router-dom";

type BucketData = {
  userid: number;
  id: number;
  bucketName: string;
  img: string;
};

const MyBucketList: React.FC<BucketData> = ({
  id,
  bucketName,
  img,
  userid,
}) => {
  return (
    <Link to={`/mypage/${userid}/bucket/${id}`}>
      <S.UserBucketBox>
        <S.UserBucketImg src={img} />
        <S.UserBucketLabel>{bucketName}</S.UserBucketLabel>
      </S.UserBucketBox>
    </Link>
  );
};

export default MyBucketList;
