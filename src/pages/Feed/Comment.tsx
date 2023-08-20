import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CommentList from "./CommentList";
import submit from "../../assets/images/svg/ic-navigation.svg";

const CommentInput = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 16px;
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

type FeedCommentData = {
  id: number;
  user_id: number;
  user_name: string;
  feed_id: number;
  content: string;
  created_at: string;
};
const Comment: React.FC = () => {
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentData, setCommentData] = useState<FeedCommentData[]>([
    {
      id: 1,
      user_id: 111111,
      user_name: "아마추어 손민수",
      feed_id: 111,
      content:
        "와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도 감사합니당!!",
      created_at: "2023-08-16T14:30:00Z",
    },
  ]);
  useEffect(() => {
    fetchCommentData();
  }, [commentData]);

  const fetchCommentData = async () => {
    try {
      const commentResponse = await axios.get("http://localhost:3001/comment");
      setCommentData(commentResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const handleSubmitComment = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/comment", {
        content: commentInput,
        user_name: commentData[0].user_name,
        created_at: new Date(),
      });
      setCommentInput("");
      fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommentList comments={commentData} />
      <CommentInput onSubmit={handleSubmitComment}>
        <CommentInputBox
          placeholder="댓글을 입력해 주세요"
          onChange={handleInputChange}
          value={commentInput}
        ></CommentInputBox>
        <SendBtn type="submit"></SendBtn>
      </CommentInput>
    </>
  );
};

export default Comment;
