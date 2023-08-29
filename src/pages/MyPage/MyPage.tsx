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
import { useNavigate } from "react-router-dom";
import MyBucketList from "../../components/MyPage/MyBucketList";
import MypageMenuModal from "../../components/MyPage/MypageMenuModal";

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
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();

  //get 데이터
  const [bucketdata, setBucketData] = useState<BucketData[]>([]);
  const [profileNumdata, setProfileNumData] = useState<ProfileNumData>();
  const [feeddata, setFeedData] = useState<FeedData[]>([]);

  //modal 여부
  const [bucketModalValue, setBucketModalValue] = useState(false);
  const [menuModalValue, setMenuModalValue] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //팔로우 팔로워 수
      const responsprofilenum = await axios.get(`/fesfosfos/2`); //유저 아이디 받아서 적기
      setProfileNumData(responsprofilenum.data.data);
      //bucket
      const responsebucket = await axiosPrivate.get(`/buckets`);
      setBucketData(responsebucket.data.data);
      //feed
      const responsefeed = await axios.get(`/feeds/users/2`); //유저 아이디 받아서 적기
      setFeedData(responsefeed.data.data);
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
        <S.Img />
        <S.Introduce>
          <S.UserName>정의로운 손민수</S.UserName>
          <S.UserDesc>A.R.M.Y 본진 / 정구기 최고</S.UserDesc>
        </S.Introduce>
        <S.ProfileButton>프로필 편집</S.ProfileButton>
      </S.UserInfo>
      <S.MyPageInfo>
        <S.FeedInfo>
          <S.FeedTitle>피드</S.FeedTitle>
          <S.FeedNum>{profileNumdata?.feeds}</S.FeedNum>
        </S.FeedInfo>
        <S.FollowerInfo
          onClick={() => {
            navigation(`/mypage/follower`);
          }}
        >
          <S.FollowerTitle>팔로워</S.FollowerTitle>
          <S.FollowerNum>{profileNumdata?.followers}</S.FollowerNum>
        </S.FollowerInfo>
        <S.FollowInfo
          onClick={() => {
            navigation(`/mypage/follow`);
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
            />
          ))}
      </S.Bucket>
      {feeddata.length === 0 ? (
        <S.NoFeed>작성된 피드가 없습니다</S.NoFeed>
      ) : (
        <S.Feed>
          {feeddata && feeddata.map((feed) => <S.FeedImg src={feed.image} />)}
        </S.Feed>
      )}
      <FooterNavBar />
      {bucketModalValue && (
        <NewBucketRegister setModalOpen={setBucketModalValue} />
      )}
      {menuModalValue && <MypageMenuModal setModalOpen={setMenuModalValue} />}
    </>
  );
};

export default MyPage;
