import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import check from "../../assets/images/svg/icon-check.svg";
import { type } from "os";

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
type FeedWriteProps = {
  $updatePage: boolean;
};
const FeedWriteHeader: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  const navigation = useNavigate();

  return (
    <NewFeedHeader>
      <FeedHeaderArrow
        src={arrow}
        onClick={() => {
          navigation("/feed");
        }}
      />
      {$updatePage ? (
        <FeedHeaderText>피드 수정</FeedHeaderText>
      ) : (
        <FeedHeaderText>새 피드 작성</FeedHeaderText>
      )}
      <FeedHeaderCheck src={check} />
    </NewFeedHeader>
  );
};
export default FeedWriteHeader;
