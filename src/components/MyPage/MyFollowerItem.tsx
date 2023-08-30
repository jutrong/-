import React, { useState } from "react";
import * as S from "./style/MyFollowerItem.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollowerItem: React.FC<MyFollowerAndFollowingType> = ({
  id,
  nickName,
  image,
  isFollowing,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [followValue, setFollowValue] = useState(true);

  const clickFollowBTN = async () => {
    setFollowValue(false);

    try {
      const response = await axiosPrivate.put(`/following/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrap>
      <S.FollowerImg src={image} />
      <S.FollowerName>{nickName}</S.FollowerName>
      {!isFollowing && followValue && (
        <S.FollowerBTN state={followValue} onClick={clickFollowBTN}>
          팔로우
        </S.FollowerBTN>
      )}
    </S.Wrap>
  );
};

export default MyFollowerItem;
