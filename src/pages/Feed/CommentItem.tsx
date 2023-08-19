import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import detailDate from "../../utils/time";
import profile from "../../assets/images/svg/profile1.svg";
import more from "../../assets/images/svg/ic-more-vertical-16.svg";

const CommentContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  margin: 19px 0;
`;
const Profile = styled.div`
  background: url(${profile});
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;
const CommentContent = styled.div`
  width: 300px;
`;
const ContentWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
  position: relative;
`;
const Nickname = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1d1b20;
`;
const Time = styled.div`
  color: #6c7080;
  font-size: 13px;
  font-weight: 500;
  margin-left: 6px;
`;
const CommentText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 135%;
  color: #1d1b20;
  height: 38px;
`;
const MoreBtn = styled.div`
  background: url(${more});
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  right: -7px;
`;

const ReplyBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 73px;
  height: 35px;
  border: 1px solid #d4dae1;
  border-radius: 8px;
  background-color: #fff;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;
const Delete = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
type FeedCommentData = {
  id: number;
  user_id: number;
  user_name: string;
  feed_id: number;
  content: string;
  created_at: string;
};
type CommentItemProps = {
  comments: FeedCommentData;
};
const CommentItem: React.FC<CommentItemProps> = ({ comments }) => {
  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenedModalId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/comment/${comments.id}`);
      alert("댓글이 삭제되었습니다.");
      setOpenedModalId(null);
    } catch (error) {
      console.error(error);
      alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <CommentContainer>
      <Profile />
      <CommentContent>
        <ContentWrap>
          <Nickname>{comments.user_name}</Nickname>
          <Time>{detailDate(comments.created_at)}</Time>
          <MoreBtn
            onClick={(e) => {
              e.stopPropagation();
              setOpenedModalId(comments.id);
            }}
          />
          {openedModalId === comments.id && (
            <ReplyBtn ref={modalRef}>
              <Delete onClick={handleDelete}>삭제하기</Delete>
            </ReplyBtn>
          )}
        </ContentWrap>
        <CommentText>{comments.content}</CommentText>
      </CommentContent>
    </CommentContainer>
  );
};

export default CommentItem;
