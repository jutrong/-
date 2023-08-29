import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "./style/FeedWriteHashTag.style";

type FeedWriteHashTagProps = {
  hashTagInput: string;
  handleHashTagChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FeedWriteHashTag: React.FC<FeedWriteHashTagProps> = ({
  hashTagInput,
  handleHashTagChange,
}) => {
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
