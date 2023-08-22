import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import submit from "../../assets/images/svg/ic-navigation.svg";
import CommentItem from "../Feed/CommentItem";

const CommentInput = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  padding: 19px 16px;
  z-index: 12;
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
type Feed = {
  id: number;
  user: User;
  feedImg: string;
  content: string;
  hashTag: string[];
  created_at: string;
  sonminsuItems: SonminsuItem[];
  comments: Comment[];
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
type Comment = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
  replies?: Comment[];
};

type FeedProps = {
  feedData: Feed;
  showModal: () => void;
};

const Comment: React.FC<FeedProps> = ({ feedData, showModal }) => {
  const [commentInput, setCommentInput] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>(feedData.comments || []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const handleSubmitComment = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const newComment = {
      id: new Date().getTime(),
      profileImg:
        "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10010049_001_ALT100/crocs",
      user_name: "Anonymous",
      content: commentInput,
      created_at: new Date().toISOString(),
    };
    try {
      const response = await axios.get(
        `http://localhost:5000/feed/${feedData.id}`
      );
      const feed = response.data;

      const updatedComments = [...feed.comments, newComment];
      await axios.put(`http://localhost:5000/feed/${feedData.id}`, {
        ...feed,
        comments: updatedComments,
      });
      setComments(updatedComments);
      setCommentInput("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {comments.map((comment) => {
        return (
          <CommentItem
            key={comment.id}
            comment={comment}
            showModal={showModal}
          />
        );
      })}
      <CommentInput onSubmit={handleSubmitComment}>
        <CommentInputBox
          placeholder="댓글을 입력해 주세요"
          onChange={handleInputChange}
          value={commentInput}
        />
        <SendBtn type="submit" />
      </CommentInput>
    </>
  );
};

export default Comment;
