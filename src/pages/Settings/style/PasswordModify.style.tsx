import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  gap: 40px;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 100%;
  color: #1d1b20;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 40px;
`;
export const PasswordInput = styled.input<{ border?: string }>`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  ${(props) =>
    props.border ? `border:${props.border}` : `border: 1px solid #e8e8e8`};
  background-color: #f6f6f6;
  margin-bottom: 14px;
`;
export const ContentContainer = styled.div`
  width: 100%;
`;
export const Valid = styled.div`
  color: #09ee65;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 0 12px 12px;
`;
