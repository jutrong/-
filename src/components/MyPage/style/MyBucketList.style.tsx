import { styled } from "styled-components";

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
