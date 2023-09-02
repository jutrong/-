import styled from "styled-components";
import submit from "../../../assets/images/svg/ic-navigation.svg";

export const CommentInput = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 19px 16px;
  z-index: 12;
`;
export const CommentInputBox = styled.input`
  width: calc(100% - 50px);
  height: 40px;
  border-radius: 10px;
  background: #ebeef2;
  border: none;
  outline: none;
  padding-left: 13px;
  box-sizing: border-box;
  &::placeholder {
    color: #6c7080;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const SendBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #208df1;
  cursor: pointer;
  background-image: url(${submit});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
`;
