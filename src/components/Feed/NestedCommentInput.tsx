import React from "react";
import styled from "styled-components";
import submit from "../../assets/images/svg/ic-navigation.svg";

const CommentInputWrap = styled.div`
  width: 310px;
  margin-left: 63px;
`;
const CommentInput = styled.form<{ nestedcomment?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;
const CommentInputBox = styled.input`
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
const SendBtn = styled.button`
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
const NestedCommentCancle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fc1e6e;
  margin: 10px 0;
`;
type NestedCommentInputProps = {
  onCancel: () => void;
};

const NestedCommentInput: React.FC<NestedCommentInputProps> = ({
  onCancel,
}) => {
  return (
    <CommentInputWrap>
      <CommentInput nestedcomment={true}>
        <CommentInputBox placeholder="댓글을 입력해 주세요"></CommentInputBox>
        <SendBtn></SendBtn>
      </CommentInput>
      <NestedCommentCancle onClick={onCancel}>답글 취소</NestedCommentCancle>
    </CommentInputWrap>
  );
};
export default NestedCommentInput;
