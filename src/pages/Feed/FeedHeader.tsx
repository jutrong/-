import React, { useEffect, useState } from "react";
import styled from "styled-components";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";

const FeedHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Profile = styled.div<ProfileProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: lightgray;
  cursor: pointer;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  width: 294px;
`;
const Nickname = styled.div`
  // height: 14px;
  font-size: 14px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  cursor: pointer;
`;
const ContentWrap = styled.div`
  font-size: 13px;
  display: flex;
`;
const FeedName = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
const Time = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin-left: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #d9d9d9;
    margin-right: 5px;
    top: 50%;
    left: -6px;
    transform: translateY(-50%);
  }
`;
const MoreBtn = styled.div`
  width: 24px;
  height: 24px;
  background: url(${more}) no-repeat center center;
  cursor: pointer;
`;
type FeedData = {
  id: number;
  user_name: string;
  fandom_name: string;
  profileImage: string;
  created_at?: string;
};
type FeedHeaderProps = {
  feedData: FeedData;
};
type ProfileProps = {
  imageUrl: string;
};
const FeedHeader: React.FC<FeedHeaderProps> = ({ feedData }) => {
  return (
    <FeedHeaderContainer>
      <Profile imageUrl={feedData.profileImage} />
      <HeaderContent>
        <Nickname>{feedData.user_name}</Nickname>
        <ContentWrap>
          <FeedName>{feedData.fandom_name}</FeedName>
          <Time>
            {feedData.created_at
              ? detailDate(feedData.created_at)
              : "시간 정보 없음"}
          </Time>
        </ContentWrap>
      </HeaderContent>
      <MoreBtn />
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
