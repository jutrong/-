import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import check from "../../assets/images/svg/icon-check.svg";
import * as S from "./style/FeedWriteHeader.style";
import { type } from "os";

type FeedWriteProps = {
  $updatePage: boolean;
  handleSubmitFeed: () => void;
};
const FeedWriteHeader: React.FC<FeedWriteProps> = ({
  $updatePage,
  handleSubmitFeed,
}) => {
  const navigation = useNavigate();

  return (
    <S.NewFeedHeader>
      <S.FeedHeaderArrow
        src={arrow}
        onClick={() => {
          navigation("/feed");
        }}
      />
      {$updatePage ? (
        <S.FeedHeaderText>피드 수정</S.FeedHeaderText>
      ) : (
        <S.FeedHeaderText>새 피드 작성</S.FeedHeaderText>
      )}
      <S.FeedHeaderCheck src={check} onClick={handleSubmitFeed} />
    </S.NewFeedHeader>
  );
};
export default FeedWriteHeader;
