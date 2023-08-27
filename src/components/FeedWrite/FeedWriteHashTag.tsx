import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "./style/FeedWriteHashTag.style";
import useInput from "../../hooks/useInput";

const FeedWriteHashTag = () => {
  //#넣어입력하면 배열로 변환
  const [hashTagInput, handleHashTagChange] = useInput("");
  const hashtagss = hashTagInput.match(/#\w+/g) || [];

  return (
    <S.WriteForm>
      <S.FeedWriteTags
        placeholder="태그입력하기(최대 10개)"
        onChange={handleHashTagChange}
        value={hashTagInput}
      ></S.FeedWriteTags>
    </S.WriteForm>
  );
};
export default FeedWriteHashTag;
