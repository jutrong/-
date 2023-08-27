import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteHashTag from "./FeedWriteHashTag";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import * as S from "./style/NewFeed.style";
import idol1 from "../../assets/images/png/idol1.png";

const NewFeed = () => {
  const [checked, setChecked] = useState<boolean>(false);
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
      <S.FeedWriteContent placeholder="작성할 내용을 입력해 주세요.&#13;(정의로운 손민수 주의사항 내용 필요해 보임)"></S.FeedWriteContent>
      {checked ? null : (
        <>
          <FeedWriteHashTag />
          <FeedWriteLink $updatePage={$updatePage} />
          <FeedWriteTarget $updatePage={$updatePage} />
        </>
      )}
      {$updatePage ? null : (
        <S.NoticeText>
          <S.NoticeBtn
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          공지피드
        </S.NoticeText>
      )}
    </>
  );
};
export default NewFeed;
