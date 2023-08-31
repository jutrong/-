import styled from "styled-components";

export const FeedHeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 40px;
  background-color: lightgray;
  cursor: pointer;
`;
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  width: 100%;
`;
export const Nickname = styled.div`
  // height: 14px;
  font-size: 14px;
  display: inline-block;
  font-family: "Pretendard-Bold";

  margin-bottom: 6px;
  display: flex;
  cursor: pointer;
`;
export const ContentWrap = styled.div`
  font-size: 13px;
  display: flex;
`;
export const FeedName = styled.div`
  color: #666;
  font-size: 13px;
  font-family: "Pretendard-Medium";
  line-height: 100%;
`;
export const Time = styled.div`
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
export const MoreBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
