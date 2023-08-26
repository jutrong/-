import { styled } from "styled-components";

export const TargetContainer = styled.form`
  padding: 16px;
`;
export const Targeting = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  color: #1d1b20;
  margin-bottom: 16px;
`;
export const Target = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
export const TargetingBox = styled.div`
  margin-bottom: 8px;
  width: 100%;
  position: relative;
`;
export const TargetGroupInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  padding-left: 16px;
  &::placeholder {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
  font-size: 16px;
`;
export const TargetArtistInput = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding-left: 16px;
  &::placeholder {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
  font-size: 16px;
`;
export const TargetLabel = styled.p`
  font-family: "Pretendard-Medium";
  color: rgba(29, 27, 32, 0.5);
  font-size: 14px;
  text-align: right;
  margin-right: 18px;
`;

export const GroupLimit = styled.p`
  font-size: 13px;
  color: #bdbdbd;
  font-family: "Pretendard-Medium";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;
export const ArtistLimit = styled.p`
  font-size: 13px;
  color: #bdbdbd;
  font-family: "Pretendard-Medium";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;
export const GroupLimitNum = styled.span``;
export const ArtistLimitNum = styled.span``;
