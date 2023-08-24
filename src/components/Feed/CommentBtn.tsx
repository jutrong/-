import React from "react";
import * as S from "../../pages/Feed/style";



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
