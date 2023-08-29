import { styled } from "styled-components";

export const FeedWriteLinkContainer = styled.div`
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid #b9bed7;
`;

export const FeedLink = styled.p`
  margin-bottom: 6px;
  color: #1d1b20;
  font-size: 14px;
  font-family: "Pretendard-Bold";
`;
export const MaxLinkText = styled.span`
  margin-bottom: 16px;
  color: #1d1b2080;
  font-size: 14px;
  font-family: "Pretendard-Medium";
`;
export const LinkItemBox = styled.div`
  // display: flex;
  width: 100%;
  overflow: hidden;
`;
export const LinkButton = styled.button`
  width: 100px;
  height: 100px;
  border: 2px solid #c7cdda;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 12px;
`;
export const LinkItem = styled.div`
  width: 100px;
  margin-right: 12px;
  position: relative;
`;
export const LinkItemImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 8px;
`;
export const LinkItemName = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  color: #1d1b20;
  font-family: "Pretendard-Medium";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const LinkItemPrice = styled.p`
  color: #6138f8;
  font-size: 14px;
  font-family: "Pretendard-Medium";
`;
export const LinkCloseBtn = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`;
export const PriceWon = styled.span`
  font-size: 12px;
`;
export const LinkImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 11px;
`;
export const LinkText = styled.p`
  font-size: 14px;
  color: #acb5c8;
`;
