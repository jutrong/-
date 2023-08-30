import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import MyFollowerItem from "../../components/MyPage/MyFollowerItem";
import * as S from "./style/MyFollow.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollower: React.FC = () => {
  let { userId } = useParams() as { userId: any };
  const axiosPrivate = useAxiosPrivate();
  const [followerData, setFollowerData] = useState<
    MyFollowerAndFollowingType[]
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(`/followers/${userId}`); //유저 아이디 받아서 적기
      setFollowerData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" title="팔로워" />
      <S.Wrap>
        {followerData &&
          followerData.map((follower) => (
            <MyFollowerItem
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

export default MyFollower;
