import styled from "styled-components";

export const Item = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 10px;
  flex: 0 0 auto;
  margin-bottom: 8px;
`;
export const ItemWrap = styled.div`
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  padding-left: 16px;
`;
export const Items = styled.div`
  display: flex;
  width: 2000px;
  margin-left: 16px;
`;
export const ProductName = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  margin-bottom: 5px;
  color: #1d1b20;
  width: 94px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Price = styled.p`
  margin: 0;
  font-family: "Pretendard-Bold";
  color: #6138f8;
  font-size: 14px;
`;
export const Won = styled.span`
  font-size: 12px;
`;
