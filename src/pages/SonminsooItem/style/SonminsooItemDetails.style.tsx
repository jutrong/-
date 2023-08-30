import { styled } from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 390px;
`;
export const ContentContainer = styled.div`
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TagContainer = styled.div`
  width: 100%;
`;
export const Tag = styled.span`
  margin-right: 10px;
  width: max-content;
  display: inline-flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #dee9ff;
  color: #208df1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 12px */
`;
export const Title = styled.span`
  width: 100%;
  color: #1d1b20;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const Price = styled.span`
  width: 100%;
  color: #6138f8;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
