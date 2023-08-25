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
export const TargetingBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;
export const TargetGroupInput = styled.input`
  width: 45%;
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
  width: 45%;
  height: 48px;
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
  padding-bottom: 125px;
  margin-right: 18px;
`;

// export const GroupLimit = styled.p`
//   font-size: 13px;
//   color: #bdbdbd;
//   font-family: "Pretendard-Medium";
// `;
// export const ArtistLimit = styled.p`
//   font-size: 13px;
//   color: #bdbdbd;
//   font-family: "Pretendard-Medium";
// `;
