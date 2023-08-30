import React, { useEffect, useState } from "react";
import * as S from "./style/MyPage.style";
import add from "../../assets/images/svg/ic-plus.svg";
import NewBucketRegister from "../../components/MyPage/NewBucketRegister";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { Link } from "react-router-dom";
import edit from "../../assets/images/svg/ic-edit.svg";
import menu from "../../assets/images/svg/ic-menu.svg";
import Icon from "../../elements/Icon";
import axios, { axiosPrivate } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyBucketList from "../../components/MyPage/MyBucketList";
import MypageMenuModal from "../../components/MyPage/MypageMenuModal";

type UserData = {
  id: number;
  nickName: string;
  introduction: string;
  image: string;
};
type BucketData = {
  id: number;
  bucketName: string;
  createdAt: string;
  img: string;
};
type ProfileNumData = {
  feeds: number;
  follows: number;
  followers: number;
};
type FeedData = {
  id: number;
  image: string;
};

const MyPage: React.FC = () => {
  let { userId } = useParams() as { userId: any };
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();

  //get 데이터
  const [userdata, setUserData] = useState<UserData>();
  const [followingdata, setFollowingData] = useState();
  const [bucketdata, setBucketData] = useState<BucketData[]>([]);
  const [profileNumdata, setProfileNumData] = useState<ProfileNumData>();
  const [feeddata, setFeedData] = useState<FeedData[]>([]);

  //modal 여부
  const [bucketModalValue, setBucketModalValue] = useState(false);
  const [menuModalValue, setMenuModalValue] = useState(false);

  // 타인 페이지에서 팔로우 상태값
  const [followValue, setFollowValue] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //유저 프로필
      const responseuser = await axiosPrivate.get(`/profile`);
      setUserData(responseuser.data.data);
      //팔로잉
      const responsefollowing = await axiosPrivate.get(
        `/isfollowing/${userId}`
      );
      setFollowingData(responsefollowing.data.data);
      //팔로우 팔로워 수
      const responsprofilenum = await axios.get(`/fesfosfos/${userId}`);
      setProfileNumData(responsprofilenum.data.data);
      //bucket
      const responsebucket = await axiosPrivate.get(`/buckets`);
      setBucketData(responsebucket.data.data);
      //feed
      const responsefeed = await axios.get(`/feeds/users/${userId}`);
      setFeedData(responsefeed.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const clickFollowToggle = async () => {
    setFollowValue((prev) => !prev);

    try {
      const response = await axiosPrivate.put(`/following/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderBar
        BackButton={false}
        color="#fff"
        items={[
          <Link to="/">
            <Icon src={edit} />
          </Link>,
          <Icon
            src={menu}
            onClick={() => {
              setMenuModalValue(true);
            }}
          />,
        ]}
      />
      <S.UserInfo>
        <S.Img src={userdata?.image} />
        <S.Introduce>
          <S.UserName>{userdata?.nickName}</S.UserName>
          <S.UserDesc>{userdata?.introduction}</S.UserDesc>
        </S.Introduce>
        {userdata?.id == userId ? (
          <S.ProfileButton
            onClick={() => {
              navigation(`/mypage/profile/${userId}`);
            }}
          >
            프로필 편집
          </S.ProfileButton>
        ) : followingdata ? (
          <S.FollowingButton onClick={clickFollowToggle} state={followValue}>
            {followValue ? "팔로잉" : "팔로우"}
          </S.FollowingButton>
        ) : (
          <S.FollowButton onClick={clickFollowToggle} state={!followValue}>
            {!followValue ? "팔로잉" : "팔로우"}
          </S.FollowButton>
        )}
      </S.UserInfo>
      <S.MyPageInfo>
        <S.FeedInfo>
          <S.FeedTitle>피드</S.FeedTitle>
          <S.FeedNum>{profileNumdata?.feeds}</S.FeedNum>
        </S.FeedInfo>
        <S.FollowerInfo
          onClick={() => {
            navigation(`/mypage/follower/${userId}`);
          }}
        >
          <S.FollowerTitle>팔로워</S.FollowerTitle>
          <S.FollowerNum>{profileNumdata?.followers}</S.FollowerNum>
        </S.FollowerInfo>
        <S.FollowInfo
          onClick={() => {
            navigation(`/mypage/following/${userId}`);
          }}
        >
          <S.FollowTitle>팔로잉</S.FollowTitle>
          <S.FollowNum>{profileNumdata?.follows}</S.FollowNum>
        </S.FollowInfo>
      </S.MyPageInfo>
      <S.Bucket>
        <S.BucketAddBox
          onClick={() => {
            setBucketModalValue(true);
          }}
        >
          <S.AddIcon src={add} />
          <S.BucketLabel>새 버킷 추가</S.BucketLabel>
        </S.BucketAddBox>
        {bucketdata &&
          bucketdata.map((bucket) => (
            <MyBucketList
              key={bucket.id}
              img={bucket.img}
              bucketName={bucket.bucketName}
              id={bucket.id}
              userid={userId}
            />
          ))}
      </S.Bucket>
      {feeddata.length === 0 ? (
        <S.NoFeed>작성된 피드가 없습니다</S.NoFeed>
      ) : (
        <S.Feed>
          {feeddata &&
            feeddata.map((feed) => (
              <S.FeedImg
                src={feed.image}
                onClick={() => {
                  navigation(`/feed/${feed.id}`);
                }}
              />
            ))}
        </S.Feed>
      )}
      <FooterNavBar />
      {bucketModalValue && (
        <NewBucketRegister setModalOpen={setBucketModalValue} id={userId} />
      )}
      {menuModalValue && <MypageMenuModal setModalOpen={setMenuModalValue} />}
    </>
  );
};

export default MyPage;
