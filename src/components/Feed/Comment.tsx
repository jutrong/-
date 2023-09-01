import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import CommentItem from "../Feed/CommentItem";
import * as S from "./style/Comment.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type CommentType = {
  id: number;
  feedId: number;
  createdAt: string;
  content: string;
  parent: number;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  replies?: {};
};
type FeedCommentProps = {
  showModal: (commentId: number) => void;
  comments: CommentType[];
  feedId: number;
  fetchFeedData: () => Promise<void>;
};

const Comment: React.FC<FeedCommentProps> = ({
  comments,
  showModal,
  feedId,
  fetchFeedData,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentList, setCommentList] = useState<CommentType[]>(comments);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const submitComments = async (id: number) => {
    if (!commentInput.trim()) {
      return;
    }
    try {
      const response = await axiosPrivate.post(`/comments/${id}`, {
        parentId: null,
        content: commentInput,
      });
      setCommentInput("");
      setCommentList([...commentList, response.data.data]);
    } catch (error) {

    }
  };

  return (
    <>
      {commentList &&
        commentList.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              comment={comment}
              showModal={showModal}
            />
          );
        })}
      <S.CommentInput>
        <S.CommentInputBox
          placeholder="댓글을 입력해 주세요"
          onChange={handleInputChange}
          value={commentInput}
        />
        <S.SendBtn
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitComments(feedId);
            fetchFeedData();
          }}
        />
      </S.CommentInput>
    </>
  );
};

export default Comment;
