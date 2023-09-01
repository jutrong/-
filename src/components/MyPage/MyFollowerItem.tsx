import React, { useState } from "react";
import * as S from "./style/MyFollowerItem.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
  isMe: boolean;
};

const MyFollowerItem: React.FC<MyFollowerAndFollowingType> = ({
  id,
  nickName,
  image,
  isFollowing,
  isMe,
}) => {
  const navigation = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [followValue, setFollowValue] = useState(true);

  const clickFollowBTN = async () => {
    setFollowValue(false);

    try {
      const response = await axiosPrivate.put(`/following/${id}`);
    } catch (err) {
      
    }
  };


  return (
    <S.Wrap>
      <S.FollowerImg
        src={image}
        onClick={() => {
          navigation(`/mypage/${id}`);
        }}
      />
      <S.FollowerName>{nickName}</S.FollowerName>
      {!isFollowing && followValue && !isMe && (
        <S.FollowerBTN state={followValue} onClick={clickFollowBTN}>
          팔로우
        </S.FollowerBTN>
      )}
    </S.Wrap>
  );
};

export default MyFollowerItem;
