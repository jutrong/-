import { styled } from "styled-components";

import { ReactComponent as LikeIcon } from "../../../assets/images/svg/home/likeIcon.svg";
import { ReactComponent as CommentIcon } from "../../../assets/images/svg/home/commentIcon.svg";

// 손민수 뉴스 컨텐츠 컨테이너
export const SonminsooNewsContentsContainer = styled.div`
  width: 254px;
  height: 327px;
  border-radius: 8px;
  border: solid black;
  background-color: white;
  box-shadow: 4px 4px;
`;

export const Box = styled.div``;

// 손민수 뉴스 컨텐츠 헤더 박스
export const SonminsooNewsContentsHeader = styled.div`
  width: 254px;
  height: 66px;
  display: flex;
  align-items: center;
`;

// 손민수 뉴스 컨텐츠 헤더 서클 이미지
export const SonminsooNewsProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 16px;
  background-color: black;
`;

// 손민수 뉴스 텍스트들 박스
export const SonminsooNewsTextBox = styled.div`
  height: 33px;
  margin-left: 6px;
`;
// 손민수 뉴스 헤더 닉네임 텍스트
export const SonminsooNewsNickNameText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

// 팬던 네임, 시간 박스
export const TextBox = styled.div`
  display: flex;
  margin-top: 5px;
`;

// 손민수 뉴스 헤더 팬덤네임 텍스트
export const SonminsooNewsFandomNameText = styled.p`
  font-size: 13px;
  opacity: 0.5;
  margin: 0;
  margin-right: 8px;
`;
// 손민수 뉴스 헤더 시간 텍스트
export const SonminsooNewsTimeText = styled.p`
  font-size: 13px;
  opacity: 0.5;
  margin: 0;
`;
// 손민수 뉴스 이미지
export const SonminsooNewsImg = styled.img`
  height: 153px;
  width: 100%;
`;
// 손민수 내용 전체 박스
export const SonminsooNewsArticleBox = styled.div`
  height: 108px;
  padding-left: 21px;
  padding-right: 21px;
`;

// 손민수 내용 글 박스
export const SonminsooNewsArticleTextBox = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 12px;
`;

// 손민수 내용 텍스트
export const SonminsooNewsArticleText = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// 손민수 내용 더보기 버튼
export const SonminsooNewsArticleViewAllBtn = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: rgba(186, 186, 186, 1);
`;

// 손민수 해쉬태그 박스
export const SonminsooNewsArticleHashtagBox = styled.div`
  display: flex;
`;
// 손민수 해쉬태그 텍스트
export const SonminsooNewsArticleHashtagText = styled.p`
  color: #6138f8;
  font-size: 14px;
  margin-top: 14px;
`;

// 손민수 아이콘 박스
export const SonminsooNewsArticleIconBox = styled.div`
  display: flex;
  margin-top: 16px;
`;
// 하트 아이콘

export const LikeIconSvg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
// 하트 갯수
export const LikeQuantity = styled.p`
  font-size: 14px;
  color: #6c7080;
  margin-left: 3px;
`;

// 댓글 아이콘
export const CommentIconSvg = styled(CommentIcon)`
  width: 16px;
  height: 16px;
  margin-left: 12px;
  float: right;
`;

// 댓글 갯수
export const CommentQuantity = styled.p`
  font-size: 14px;
  color: #6c7080;
  margin-left: 3px;
`;
