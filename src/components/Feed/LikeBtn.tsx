import React from "react";
import styled from "styled-components";
import heart from "../../assets/images/svg/ic-heart.svg";
const LikeWrap = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const LikeNumber = styled.span`
  font-size: 15px;
  margin-left: 6px;
  color: #6c7080;
  font-family: "Pretendard-Medium";
`;
const LikeBtn = () => {
  return (
    <LikeWrap>
      <LikeIcon src={heart}></LikeIcon>
      <LikeNumber>23</LikeNumber>
    </LikeWrap>
  );
};

export default LikeBtn;
