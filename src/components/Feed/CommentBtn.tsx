import React from "react";
import styled from "styled-components";
import comment from "../../assets/images/svg/ic-message-circle.svg";
import commentActive from "../../assets/images/svg/ic-message-active.svg";

const CommentBtnContainer = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const CommentIcon = styled.div<CommentNumberProps>`
  width: 24px;
  height: 24px;
  background: url(${(props) =>
    props.$commentClicked ? commentActive : comment});
  cursor: pointer;
`;
const CommentNumber = styled.span<CommentNumberProps>`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  margin-left: 3px;
  color: ${(props) => (props.$commentClicked ? "#208DF1" : "#6c7080")};
`;
type Feed = {
  id: number;
  user: User;
  feedImg: string;
  content: string;
  hashTag: string[];
  created_at: string;
  sonminsuItems: SonminsuItem[];
  comments: CommentType[];
};

type User = {
  id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  fandom_name: string;
};

type SonminsuItem = {
  id: number;
  itemImg: string;
  title: string;
  price: number;
  url: string;
};
type CommentType = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
  replies?: CommentType[];
};

type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  feedData: Feed;
};
type CommentNumberProps = {
  $commentClicked: boolean;
};
const CommentBtn: React.FC<CommentBtnProps> = ({
  commentOpen,
  commentClicked,
  feedData,
}) => {
  return (
    <CommentBtnContainer>
      <CommentIcon $commentClicked={commentClicked} onClick={commentOpen} />
      <CommentNumber $commentClicked={commentClicked}>
        {feedData?.comments?.length || 0}
      </CommentNumber>
    </CommentBtnContainer>
  );
};

export default CommentBtn;
