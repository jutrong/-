import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteForm from "./FeedWriteForm";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import * as S from "./style/NewFeed.style";
import idol1 from "../../assets/images/png/idol1.png";

const NewFeed = () => {
  const location = useLocation();
  const $updatePage = location.state.isUpdate;
  const writeImg = location.state.selectedImage;
  return (
    <>
      <FeedHeaderWrite $updatePage={$updatePage} />
      {$updatePage ? (
        <S.FeedWriteImage src={idol1} />
      ) : (
        <S.FeedWriteImage src={writeImg} />
      )}
      <WriteFandom $updatePage={$updatePage} />
      <FeedWriteForm />
      <FeedWriteLink $updatePage={$updatePage} />
      <FeedWriteTarget $updatePage={$updatePage} />
    </>
  );
};
export default NewFeed;
