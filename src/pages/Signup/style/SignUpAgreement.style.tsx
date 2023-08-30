import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const AgreementBox = styled.div`
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  max-width: 800px;
`;

export const AgreementHeader = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: center;
`;

export const AgreementText = styled.div`
  margin-top: 20px;
  line-height: 1.6;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;
