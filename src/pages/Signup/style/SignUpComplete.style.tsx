import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 16px 41px;
  display: flex;
  flex-direction: column;
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arial", sans-serif;
  min-height: 722px;
  gap: 16px;
  justify-content: center;
`;

export const CompletionMessage = styled.div`
회원가입이 완료되었습니다!
Copy
color: var(--grey-100-black, #1D1B20);
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 24px */
`;
export const Icon = styled.img`
  cursor: pointer;
  width: 82px;
  height: 82px;
`;
