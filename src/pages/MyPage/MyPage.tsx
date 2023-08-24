import React from "react";
import * as S from "./style/MyPage.style";
import FooterNavBar from "../../components/FooterNavBar";
import add from "../../assets/images/svg/ic-plus.svg";

const MyPage: React.FC = () => {
  return (
    <>
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
          <S.FeedNum>23</S.FeedNum>
        </S.FeedInfo>
        <S.FollowerInfo>
          <S.FollowerTitle>팔로워</S.FollowerTitle>
          <S.FollowerNum>265</S.FollowerNum>
        </S.FollowerInfo>
        <S.FollowInfo>
          <S.FollowTitle>팔로우</S.FollowTitle>
          <S.FollowNum>588</S.FollowNum>
        </S.FollowInfo>
      </S.MyPageInfo>
      <S.Bucket>
        <S.BucketAddBox>
          <S.AddIcon src={add} />
          <S.BucketLabel>새 버킷 추가</S.BucketLabel>
        </S.BucketAddBox>
        <S.UserBucketBox>
          <S.UserBucketImg />
          <S.UserBucketLabel>나의 버킷 리스트</S.UserBucketLabel>
        </S.UserBucketBox>
      </S.Bucket>
      <S.Feed>
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
        <S.FeedImg />
      </S.Feed>
      {/* <S.NoFeed>작성된 피드가 없습니다</S.NoFeed> */}
      <FooterNavBar />
    </>
  );
};

export default MyPage;
