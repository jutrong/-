import styled from "styled-components";
import comment from "../../../assets/images/svg/ic-message-circle.svg";
import commentActive from "../../../assets/images/svg/ic-message-active.svg";

export const CommentBtnContainer = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
export const CommentIcon = styled.div<{ $commentClicked: boolean }>`
  width: 24px;
  height: 24px;
  background: url(${(props) =>
    props.$commentClicked ? commentActive : comment});
  cursor: pointer;
`;
export const CommentNumber = styled.span<{ $commentClicked: boolean }>`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  margin-left: 3px;
  color: ${(props) => (props.$commentClicked ? "#208DF1" : "#6c7080")};
`;
