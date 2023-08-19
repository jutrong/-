import React from "react";
import CommentItem from "./CommentItem";

type FeedCommentData = {
  id: number;
  user_id: number;
  user_name: string;
  feed_id: number;
  content: string;
  created_at: string;
};

type CommentListProps = {
  comments: FeedCommentData[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comments={comment} />
      ))}
    </>
  );
};

export default CommentList;
