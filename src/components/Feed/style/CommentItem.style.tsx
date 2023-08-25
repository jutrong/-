import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  margin: 19px 0;
`;
export const CommentProfile = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;
export const CommentContent = styled.div`
  width: 100%;
`;
export const CommnetContentWrap = styled.div`
  display: flex;
  margin-bottom: 6px;
  position: relative;
`;
export const UserContenWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const CommentNickname = styled.div`
  color: #1d1b20;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  color: #1d1b20;
`;
export const CommentTime = styled.div`
  color: #6c7080;
  font-size: 13px;
  font-family: "Pretendard-Medium";
  margin-left: 6px;
`;
export const CommentText = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  line-height: 135%;
  color: #1d1b20;
  height: 38px;
`;
export const CommentMoreBtn = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ReplyBtn = styled.div`
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
  position: absolute;
`;
export const Delete = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
