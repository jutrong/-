import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import MyFollowItem from "../../components/MyPage/MyFollowItem";
import * as S from "./style/MyFollow.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollow: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();
  const [followingData, setFollowingData] = useState<
    MyFollowerAndFollowingType[]
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(`/follows/2`); //유저 아이디 받아서 적기
      setFollowingData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" title="팔로잉" />
      <S.Wrap>
        {followingData &&
          followingData.map((follower) => (
            <MyFollowItem
              id={follower.id}
              nickName={follower.nickName}
              image={follower.image}
              isFollowing={follower.isFollowing}
            />
          ))}
      </S.Wrap>
    </>
  );
};

export default MyFollow;
