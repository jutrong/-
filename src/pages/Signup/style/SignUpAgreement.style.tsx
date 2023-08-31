import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 844px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
`;

export const AgreementBox = styled.div`
  border-radius: 8px;
  background-color: #fff;
  max-width: 800px;
`;

export const AgreementHeader = styled.h1`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: center;
  font-family: "Pretendard-Bold";
`;

export const AgreementText = styled.div`
  margin-top: 20px;
  line-height: 1.6;
  border: 1px solid black;
  margin: 0 16px;
  padding: 16px;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const Paragraphtitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  margin-bottom: 15px;
`;
export const Paragraph = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  margin-bottom: 15px;
`;
