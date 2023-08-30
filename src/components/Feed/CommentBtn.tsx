import React from "react";
import * as S from "./style/CommentBtn.style";
// import { CommentBtnProps } from "../../types/feed";
export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItem[];
  groupName: string;
  artistName: string;
  image: string;
  tags: string[];
  comments: number;
};

type SonminsuItem = {
  id: number;
  originUrl: string;
  imgUrl: string;
  title: string;
  price: string | number;
  groupName?: string;
  artistName?: string;
};
export type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  feedData: Data;
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
        {feedData?.comments}
      </S.CommentNumber>
    </S.CommentBtnContainer>
  );
};

export default CommentBtn;
