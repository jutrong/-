import React, { useState } from "react";
import * as S from "./style/MyFollowItem.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollowingItem: React.FC<MyFollowerAndFollowingType> = ({
  id,
  nickName,
  image,
  isFollowing,
}) => {
  const navigation = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [followValue, setFollowValue] = useState(true);

  const clickFollowBTN = async () => {
    setFollowValue((prev) => !prev);

    try {
      const response = await axiosPrivate.put(`/following/${id}`);
    } catch (err) {
      
    }
  };

  return (
    <S.Wrap>
      <S.FollowImg
        src={image}
        onClick={() => {
          navigation(`/mypage/${id}`);
        }}
      />
      {<S.FollowName>{nickName}</S.FollowName>}
      {isFollowing && (
        <S.FollowBTN state={followValue} onClick={clickFollowBTN}>
          {followValue ? "팔로잉" : "팔로우"}
        </S.FollowBTN>
      )}
    </S.Wrap>
  );
};

export default MyFollowingItem;
