import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import check from "../../assets/images/svg/icon-check.svg";

const NewFeedHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px;
  display: flex;
  align-items: center;
`;
const FeedHeaderArrow = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const FeedHeaderText = styled.div`
  width: 100%;
  font-size: 20px;
  color: rgba(29, 27, 32, 1);
  font-family: "Pretendard-Bold";
  padding-left: 10px;
`;
const FeedHeaderCheck = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const FeedWriteHeader = () => {
  return (
    <NewFeedHeader>
      <FeedHeaderArrow src={arrow} />
      <FeedHeaderText>새 피드 작성</FeedHeaderText>
      <FeedHeaderCheck src={check} />
    </NewFeedHeader>
  );
};
export default FeedWriteHeader;
