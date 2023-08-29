import { styled } from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100px;
  height: 142px;
  display: flex;
  flex-direction: column;
`;
export const AttachImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #1d1b20;
  margin-bottom: 8px;
`;
export const Delete = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`;
export const AttachTitle = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  color: #1d1b20;
  margin-bottom: 5px;
  overflow: hidden;
  width: 90px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const AttachPrice = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  color: #6138f8;
`;
