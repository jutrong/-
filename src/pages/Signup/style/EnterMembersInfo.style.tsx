import { styled } from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 57px 16px 41px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  font-family: "Pretendard-Bold";
  margin-top: 28px;
  margin-bottom: 12px;
`;

export const SubAgreement = styled.p`
  font-size: 24px;
  color: #1d1b20;
  font-family: "Pretendard-Medium";
  line-height: 140%;
  margin-bottom: 33px;
`;

export const SubAgreement2 = styled.p`
  font-size: 16px;
  color: #595454;
  font-family: "Pretendard-Bold";
  margin-bottom: 18px;
`;

export const SubAgreement3 = styled.p`
  font-size: 16px;
  color: #595454;
  font-family: "Pretendard-Bold";
  margin-bottom: 18px;
`;

export const Form1 = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Form2 = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Input = styled.input`
  padding: 16px;
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  background: #f6f6f6;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
  margin-bottom: 12px;
`;

export const InputLabel = styled.p`
  color: #595454;
  margin-bottom: 5px;
`;
export const InputSubLabel = styled.p`
  font-size: 14px;
  color: #595454;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 14px;
  background: #f6f6f6;
  border-radius: 4px;
  font-family: "Pretendard-Medium";
  margin-bottom: 15px;
`;
export const Warning = styled.label`
  width: 100%;
  color: red;
  font-size: 14px;
  line-height: 140%;
  margin-top: -5px;
  margin-bottom: 5px;
`;
export const Box = styled.div`
  width: 100%;
  height: 30px;
`;
