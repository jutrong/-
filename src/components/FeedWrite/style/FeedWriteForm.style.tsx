import {styled} from "styled-components"

export const WriteForm = styled.form``;
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
`;
export const FeedWriteTags = styled.input`
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #b9bed7;
  border-top: 1px solid #b9bed7;
  padding: 16px 12px;
  box-sizing: border-box;
  font-family: "Pretendard-Medium";
  color: #6138f8;
  &::placeholder {
    font-size: 16px;
    color: #808080;
  }
`;
