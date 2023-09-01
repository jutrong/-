import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;
export const ImageRegistContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  gap: 10px;
`;
export const CircleImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ebeef2;
`;
export const ImageRegistButton = styled.input.attrs({ type: "button" })`
  color: #208df1;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const InputText = styled.input.attrs({ type: "text" })`
  width: 358px;
  height: 50px;
  background-color: #f6f6f6;
  padding: 0 16px;
  color: black;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const Warning = styled.p`
  width: 358px;
  height: 20px;
  text-align: left;
  color: red;
  font-size: 14px;
  padding: 0 16px;
`;
