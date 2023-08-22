import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import detailDate from "../../utils/time";
import more from "../../assets/images/svg/ic-more-vertical-16.svg";

const CommentContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  margin: 19px 0;
`;
const Profile = styled.div<ProfileImgProps>`
  background-image: url(${(props) => props.$profileUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
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
  color: #1d1b20;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
`;
const Time = styled.div`
  color: #6c7080;
  font-size: 13px;
  font-family: "Pretendard-Medium";
  margin-left: 6px;
`;
const CommentText = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  line-height: 135%;
  color: #1d1b20;
  height: 38px;
`;
const MoreBtn = styled.img`
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
type CommentData = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
};
type FeedCommentData = {
  id: number;
  user_id: number;
  user_name: string;
  profileImg: string;
  feed_id: number;
  content: string;
  created_at: string;
  comments?: CommentData[];
};

type CommentItemProps = {
  comment: FeedCommentData;
  showModal: () => void;
};
type ProfileImgProps = {
  $profileUrl: string;
};
const CommentItem: React.FC<CommentItemProps> = ({ comment,showModal }) => {
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

  // const handleDelete = async (feedId: number, commentId: number) => {
  //   // try {
  //   //   await axios.delete(
  //   //     `http://localhost:5000/feed/${feedId}/comments/${commentId}`
  //   //   );
  //   //   alert("댓글이 삭제되었습니다.");
  //   //   setOpenedModalId(null);
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   alert("댓글 삭제에 실패했습니다. 다시 시도해주세요.");
  //   // }
  // };
  return (
    <>
      <CommentContainer>
        <Profile $profileUrl={comment.profileImg} />
        <CommentContent>
          <ContentWrap>
            <Nickname>{comment.user_name}</Nickname>
            <Time>{detailDate(comment.created_at)}</Time>
            <MoreBtn
              src={more}
              onClick={(e) => {
                e.stopPropagation();
                setOpenedModalId(comment.id);
              }}
            />
            {openedModalId === comment.id && (
              <ReplyBtn ref={modalRef}>
                <Delete
                  onClick={showModal}
                >
                  삭제하기
                </Delete>
              </ReplyBtn>
            )}
          </ContentWrap>
          <CommentText>{comment.content}</CommentText>
        </CommentContent>
      </CommentContainer>
    </>
  );
};

export default CommentItem;
