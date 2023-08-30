import { styled } from "styled-components";
import checkIcon from "../../../assets/images/svg/Exclude.svg";

export const Container = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 12px;
`;

export const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 37px;
`;

export const CheckboxLabel = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #666;
`;

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
