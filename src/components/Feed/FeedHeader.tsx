import React from "react";
import styled from "styled-components";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";

const FeedHeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Profile = styled.img<ProfileProps>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: lightgray;
  cursor: pointer;
  background-image: url(${(props) => props.$imageUrl});
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
  font-family: "Pretendard-Bold";

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
  font-size: 13px;
  font-family: "Pretendard-Medium";
  line-height: 100%;
`;
const Time = styled.div`
  color: #666;
  font-family: "Pretendard-Medium";
  font-size: 13px;
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
const MoreBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

type User = {
  id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  fandom_name: string;
};
type FeedData = {
  id: number;
  user: User;
  created_at: string;
};
type FeedDataProps = {
  feedData: FeedData;
};
type ProfileProps = {
  $imageUrl: string;
};
const FeedHeader: React.FC<FeedDataProps> = ({ feedData }) => {
  return (
    <FeedHeaderContainer>
      {feedData && feedData.user ? (
        <>
          <Profile $imageUrl={feedData.user.profileImg} />
          <HeaderContent>
            <Nickname>{feedData.user.user_name}</Nickname>
            <ContentWrap>
              <FeedName>{feedData.user.fandom_name}</FeedName>
              <Time>
                {feedData.created_at
                  ? detailDate(feedData.created_at)
                  : "시간 정보 없음"}
              </Time>
            </ContentWrap>
          </HeaderContent>
          <MoreBtn src={more} />
        </>
      ) : null}
    </FeedHeaderContainer>
  );
};
export default FeedHeader;
