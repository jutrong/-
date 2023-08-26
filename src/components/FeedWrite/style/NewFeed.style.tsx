import styled from "styled-components";
import checkIcon from "../../../assets/images/svg/Exclude.svg";

export const FeedWriteImage = styled.img`
  width: 100%;
  height: 390px;
`;
export const NoticeBtn = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  margin-left: 16px;
  margin-right: 10px;
  border: 1px solid #ebeef2;
  display: inline-block;
  &:checked {
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export const NoticeText = styled.label`
  width: 30%;
  height: 100%;
  margin-left: 10px;
  margin-bottom: 80px;
  color: #1d1b20;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const FeedWriteContent = styled.textarea`
  width: 100%;
  height: 216px;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  padding: 16px;
  font-family: "Pretendard-Medium";
  &::placeholder {
    font-size: 16px;
    color: #6c7080;
    line-height: 140%;
  }
  border-bottom: 1px solid #b9bed7;
`;
