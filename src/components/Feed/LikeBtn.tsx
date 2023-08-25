import React from "react";
import * as S from "./style/LikeBtn.style";
import heart from "../../assets/images/svg/ic-heart.svg";

const LikeBtn = () => {
  return (
    <S.LikeWrap>
      <S.LikeIcon src={heart}></S.LikeIcon>
      <S.LikeNumber>23</S.LikeNumber>
    </S.LikeWrap>
  );
};

export default LikeBtn;
