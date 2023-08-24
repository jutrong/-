import React, { useState } from "react";
import * as S from "./style/MyPage.style";
import add from "../../assets/images/svg/ic-plus.svg";
import x from "../../assets/images/svg/ic-x-red.svg";
import NewBucketRegister from "../../components/MyPage/NewBucketRegister";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";

const MyPage: React.FC = () => {
  const [hhh, setHHH] = useState(true);

  console.log(hhh);

  const click = () => {
    console.log("eee");
  };
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
          <S.UserBucketDelete src={x} />
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
      {/* {hhh && (
        <AlertModal
          title="채택하기"
          content="채택하시겠습니까?"
          yesContent="채택"
          yesClickHandler={click}
          setModalOpen={setHHH}
        />
      )} */}
      {hhh && (
        <NewBucketRegister yesClickHandler={click} setModalOpen={setHHH} />
      )}
    </>
  );
};

export default MyPage;
