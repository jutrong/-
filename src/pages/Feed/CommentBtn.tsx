import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import comment from "../../assets/images/svg/ic-message-circle.svg";
import commentActive from "../../assets/images/svg/ic-message-active.svg";
type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
};
type CommentIconProps = Omit<CommentBtnProps, "commentOpen">;
const CommentBtnContainer = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const CommentIcon = styled.div<CommentIconProps>`
  width: 24px;
  height: 24px;
  background: url(${(props) =>
    props.commentClicked ? commentActive : comment});
  cursor: pointer;
`;
const CommentNumber = styled.span<CommentIconProps>`
  font-size: 15px;
  margin-left: 3px;
  color: ${(props) => (props.commentClicked ? "#208DF1" : "#6c7080")};
`;

const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
}) => {
  const [commentNumber, setCommentNumber] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/comment");
        setCommentNumber(response.data.length);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, [commentNumber]);
  return (
    <CommentBtnContainer>
      <CommentIcon commentClicked={commentClicked} onClick={commentOpen} />
      <CommentNumber commentClicked={commentClicked}>
        {commentNumber}
      </CommentNumber>
    </CommentBtnContainer>
  );
};

export default CommentBtn;
