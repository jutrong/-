import React from "react";
import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./style/SignUpComplete.style";

const SignUpComplete = () => {
  return (
    <S.Container>
      <S.CompletionMessage>회원가입 완료되었습니다.</S.CompletionMessage>
    </S.Container>
  );
};

export default SignUpComplete;
