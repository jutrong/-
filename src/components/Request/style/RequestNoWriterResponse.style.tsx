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
export const ImgItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #1d1b20;
  border-radius: 8px;
  margin-bottom: 8px;
`;
export const ImgTitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 15px;
  color: #1d1b20;
  margin-bottom: 5px;
`;
export const ImgPrice = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: #6138f8;
`;
