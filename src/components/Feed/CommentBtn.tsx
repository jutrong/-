import React from "react";
import styled from "styled-components";
import * as S from "./style/CommentBtn.style";
import comment from "../../assets/images/svg/ic-message-circle.svg";
import commentActive from "../../assets/images/svg/ic-message-active.svg";
import { CommentBtnProps } from "../../types/feed";

const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
  feedData,
}) => {
  return (
    <S.CommentBtnContainer>
      <S.CommentIcon $commentClicked={commentClicked} onClick={commentOpen} />
      <S.CommentNumber $commentClicked={commentClicked}>
        {feedData?.comments?.length || 0}
      </S.CommentNumber>
    </S.CommentBtnContainer>
  );
};

export default CommentBtn;
