import React from "react";
import styled from "styled-components";
import * as S from './style/WriteFandom.style';
import dropdown from "../../assets/images/svg/ic-arrow-down-14.svg";



const WriteFandom = () => {
  return (
    <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <S.WritingFandomBox>
        <S.WritingFandomSelect>꾹이의 모든 것</S.WritingFandomSelect>
        <S.WritingFandomIcon src={dropdown} />
      </S.WritingFandomBox>
    </S.WritingFandom>
  );
};
export default WriteFandom;
