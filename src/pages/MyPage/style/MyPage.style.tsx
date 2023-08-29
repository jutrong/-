import { styled } from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  padding: 16px;
`;
export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: gray;
  margin-right: 15px;
`;
export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 0;
`;
export const UserName = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
  margin-bottom: 6px;
`;
export const UserDesc = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #1d1b20;
`;
export const ProfileButton = styled.button`
  width: 103px;
  height: 30px;
  border-radius: 4px;
  background: #ebeef2;
  color: #83839f;
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Bold";
`;
export const MyPageInfo = styled.div`
  width: 358px;
  height: 75px;
  border-radius: 8px;
  background: #f1f5fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const FeedInfo = styled.div`
  margin: 0 auto;
`;
export const FeedTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #1d1b20;
  margin-bottom: 8px;
`;
export const FeedNum = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
`;
export const FollowerInfo = styled.div`
  width: 113px;
  border-left: 1px solid #ccd1d8;
  border-right: 1px solid #ccd1d8;
`;
export const FollowerTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #1d1b20;
  margin-bottom: 8px;
`;
export const FollowerNum = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
`;
export const FollowInfo = styled.div`
  margin: 0 auto;
`;
export const FollowTitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #1d1b20;
  margin-bottom: 8px;
`;
export const FollowNum = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
`;
export const Bucket = styled.div`
  width: 374px;
  padding: 20px 0;
  margin-left: 16px;
  height: 140px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BucketAddBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const AddIcon = styled.img``;
export const BucketLabel = styled.p`
  width: 64px;
  font-size: 13px;
  font-family: "Pretendard-Medium";
  text-align: center;
  color: #1d1b20;
`;
export const UserBucketBox = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const UserBucketImg = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #000;
  border-radius: 8px;
`;
export const UserBucketLabel = styled.p`
  width: 60px;
  font-size: 13px;
  font-family: "Pretendard-Medium";
  text-align: center;
  color: #1d1b20;
  word-wrap: break-word;
`;
export const UserBucketDelete = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
`;
export const Feed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const FeedImg = styled.img`
  width: 100%;
  height: 128px;
  border: 1px solid #fff;
`;
export const NoFeed = styled.div`
  text-align: center;
  margin-top: 140px;
`;
