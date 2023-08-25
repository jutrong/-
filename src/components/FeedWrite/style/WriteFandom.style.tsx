import { styled } from "styled-components";

export const WritingFandom = styled.div`
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #b9bed7;
  padding: 16px;
`;
export const WritingFandomText = styled.p`
  font-size: 14px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
`;
export const WritingFandomBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;
export const WritingFandomSelect = styled.p<{ $updatePage: boolean }>`
  font-family: "Pretendard-Medium";
  font-size: 16px;
  color: ${(props) => (props.$updatePage ? "#BDBDBD" : "#1D1B20")};
`;
export const WritingFandomIcon = styled.img<{ $updatePage: boolean }>`
  width: 14px;
  height: 14px;
  cursor: pointer;
  opacity: ${(props) => (props.$updatePage ? 0.3 : 1)};
`;
