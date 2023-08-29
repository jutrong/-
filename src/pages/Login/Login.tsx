import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";
import axios from "../../api/axios";
import * as S from "./style/Login.style";
import { Button } from "../../elements/Button";
import kakao from "../../assets/images/svg/kakaoTalk.svg";
import google from "../../assets/images/png/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const data = JSON.stringify({ email, password });
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => {
    return state.auth.accessToken;
  });
  //TODO: 카카오 구글로그인 버튼 추가
  useEffect(() => {
    console.log("token!", auth);
  }, []);

  return (
    <S.Container>
      <S.Title>
        안녕하세요
        <br />
        당장 손민수 입니다 :)
      </S.Title>
      <S.StyledForm>
        <S.StyledInput
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          autoComplete="off"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <S.StyledInput
          type={passwordType ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <S.LinkContainer>
          <Button
            background="#EBEEF2"
            border="none"
            color="#6B6774"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              axios
                .post("/auth/sign-in", {
                  email,
                  password,
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            로그인
          </Button>

          <S.P>
            <S.LinkTag to={"/signup"}>회원가입</S.LinkTag>
          </S.P>
        </S.LinkContainer>
        <S.QuickLoginContainer>
          <S.QuickLoginTitle>
            <S.Hr />
            <S.P>빠르게 로그인하기</S.P>
            <S.Hr />
          </S.QuickLoginTitle>
          <S.QuickLoginIcons>
            <S.LoginIcon src={google} />
            <S.LoginIcon src={kakao} />
          </S.QuickLoginIcons>
          <S.P>
            로그인 없이 한번 구경해 볼까요?
            <S.LinkToHome to={"/"}>둘러보기</S.LinkToHome>
          </S.P>
        </S.QuickLoginContainer>
      </S.StyledForm>
    </S.Container>
  );
};

export default Login;
