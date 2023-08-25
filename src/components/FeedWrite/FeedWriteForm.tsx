import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from './style/FeedWriteForm.style';
import useInput from "../../hooks/useInput";

const FeedWriteForm = () => {
  //#넣어입력하면 배열로 변환
  const [hashTagInput, handleHashTagChange] = useInput("");
  const hashtagss = hashTagInput.match(/#\w+/g) || [];

  return (
    <S.WriteForm>
      <S.FeedWriteContent placeholder="작성할 내용을 입력해 주세요.&#13;(정의로운 손민수 주의사항 내용 필요해 보임)"></S.FeedWriteContent>
      <S.FeedWriteTags
        placeholder="태그입력하기(최대 10개)"
        onChange={handleHashTagChange}
        value={hashTagInput}
      ></S.FeedWriteTags>
    </S.WriteForm>
  );
};
export default FeedWriteForm;
