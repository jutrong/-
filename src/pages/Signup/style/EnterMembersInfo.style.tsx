import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

export const SubAgreement = styled.h2`
  font-size: 24px;
  color: #555;
  margin-bottom: 15px;
`;

export const SubAgreement2 = styled.h1`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Label = styled.label`
  width: 100%;
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 14px;
`;
export const Warning = styled.label`
  width: 100%;
  color: red;
  font-size: 14px;
  margin-left: 10px;
`;
