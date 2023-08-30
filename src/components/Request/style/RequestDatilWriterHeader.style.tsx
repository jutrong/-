import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const Left = styled.div`
  display: flex;
`;
export const QuestionSVG = styled.img``;
export const QuestionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const QuestionTitle = styled.p`
  font-size: 16px;
  font-family: "Pretendard-Medium";
  line-height: 16px;
  margin-bottom: 7px;
`;
export const QuestionTitleInfo = styled.div`
  display: flex;
  gap: 10px;
`;
export const QuestionUserName = styled.p`
  font-size: 13px;
  font-family: "Pretendard-Medium";
  color: #666;
`;
export const QuestionDate = styled.p`
  font-size: 13px;
  font-family: "Pretendard-Medium";
  color: #666;
`;
export const Right = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 16px;
`;
export const PushPin = styled.img``;
export const More = styled.img``;
