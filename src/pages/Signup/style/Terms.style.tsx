import { styled } from "styled-components";
import checkIcon from "../../../assets/images/svg/Exclude.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-family: "Arial", sans-serif;
  margin-bottom: 380px;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-top: 31px;
  margin-bottom: 12px;
  font-family: "Pretendard-Bold";
`;

export const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 37px;
  font-family: "Pretendard-Medium";
  line-height: 140%;
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
  margin: 0 auto 0 10px;
`;
export const Icon = styled.img``;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  margin-right: 5px;
  width: 18px;
  height: 18px;
  border: 1px solid #ebeef2;
  border-radius: 2px;
  &:checked {
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`;
