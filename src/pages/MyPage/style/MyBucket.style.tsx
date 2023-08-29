import { styled } from "styled-components";

export const Wrap = styled.div`
  padding: 12px 16px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const deleteBTN = styled.button`
  width: 65px;
  height: 26px;
  border-radius: 4px;
  background: #208df1;
  color: #fff;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  line-height: 26px;
  text-align: center;
`;

export const NoItems = styled.div`
  margin-top: 140px;
  width: 358px;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
export const NoItemIcon = styled.img`
  width: 61.037px;
  height: 58px;
`;
export const NoItemDesc = styled.p`
  display: block;
  font-size: 14px;
  color: rgba(29, 27, 32, 0.5);
  font-family: "Pretendard-Medium";
  white-space: nowrap;
`;
