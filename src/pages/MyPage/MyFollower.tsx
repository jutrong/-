import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import MyFollowerItem from "../../components/MyPage/MyFollowerItem";
import * as S from "./style/MyFollow.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

type MyFollowerAndFollowingType = {
  id: number;
  nickName: string;
  image: string;
  isFollowing: boolean;
};

const MyFollower: React.FC = () => {
  let { userId } = useParams() as { userId: any };
  const axiosPrivate = useAxiosPrivate();
  const token = useSelector(({ auth }) => auth.accessToken);
  const [followerData, setFollowerData] = useState<
    MyFollowerAndFollowingType[]
  >([]);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(`/followers/${userId}`);
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
              isMe={follower.id === userId}
            />
          ))}
      </S.Wrap>
    </>
  );
};

export default MyFollower;
