import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  padding: 0px 0 10px 16px;
  margin-top: 10px;
  display: flex;
`;
export const SearchItemImg = styled.img`
  border: 1px solid #1d1b20;
  width: 65px;
  height: 65px;
  border-radius: 8px;
`;

export const SearchItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
export const SearchItemTags = styled.div`
  display: flex;
  color: #208df1;
  font-size: 12px;
  font-family: "Pretendard-Bold";
`;
export const SearchItemTag = styled.div`
  background-color: #dee9ff;
  padding: 2px 4px;
  border-radius: 4px;
  margin-right: 5px;
`;
export const SearchItemProduct = styled.p`
  font-size: 15px;
  color: #555;
  width: 209px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Pretendard-Medium";
  margin-top: 8px;
`;
export const SearchItemPrice = styled.p`
  color: #6138f8;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  margin-top: 8px;
`;
export const SearchItemWon = styled.span`
  font-size: 13px;
`;
