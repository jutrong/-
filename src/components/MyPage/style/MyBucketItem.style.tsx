import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 109px;
  display: flex;
  flex-direction: column;
`;
export const ItemImg = styled.img`
  width: 109px;
  height: 109px;
  border-radius: 8px;
  border: 1px solid #1d1b20;
  margin-bottom: 9px;
`;
export const Artist = styled.p<{ width: number }>`
  ${(props) => `width: ${props.width + 8}px;`};
  height: 16px;
  border-radius: 4px;
  background: #dee9ff;
  font-size: 12px;
  font-family: "Pretendard-Bold";
  color: #208df1;
  text-align: center;
  line-height: 16px;
  margin-bottom: 8px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemName = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  color: #555;
  overflow: hidden;
  width: 81px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 6px;
`;
export const Bookmark = styled.img``;
export const Price = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Bold";
  color: #6138f8;
`;
