import { styled } from "styled-components";

export const Wrap = styled.div`
  padding: 16px;
  height: 252px;
  border-bottom: 6px solid #e2e2e2;
  &:last-child {
    border-bottom: none;
  }
`;
export const ProfileBox = styled.div`
  position: relative;
  display: flex;
  gap: 7px;
  margin-bottom: 20px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: gray;
`;
export const ProfileInfo = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  margin: 0 auto 0 0;
`;
export const UserName = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  color: #1d1b20;
`;
export const ResponesInfo = styled.div`
  display: flex;
  gap: 10px;
`;
export const ClearNumber = styled.p`
  font-family: "Pretendard-Medium";
  color: #666;
  font-size: 13px;
`;
export const Date = styled.p`
  font-family: "Pretendard-Medium";
  color: #666;
  font-size: 13px;
`;
export const More = styled.img``;
export const SeleteImg = styled.img`
  position: absolute;
  top: -20px;
  right: 0;
`;
export const ImgsBox = styled.div`
  width: 374px;
  height: 145px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MoreModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #d4dae1;
  background: #fff;
  width: 73px;
  height: 75px;
`;
export const Selete = styled.p`
  height: 50%;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  line-height: 36.5px;
  text-align: center;
  color: #000;
  border-bottom: 1px solid #d4dae1;
`;
export const Delete = styled.p`
  height: 50%;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  line-height: 36.5px;
  text-align: center;
  color: #000;
`;
