import React from "react";
import * as S from "./style/MyProfile.style";

const MyProfile: React.FC = () => {
  return (
    <S.Wrap>
      <S.UserImg />
      <S.UserImgEditBTN>사진 수정</S.UserImgEditBTN>
      <S.UserName placeholder="닉네입을 입력해주세요" />
      <S.Introduce placeholder="소개글을 입력해주세요" />
    </S.Wrap>
  );
};

export default MyProfile;
