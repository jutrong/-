import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";
import axios from "../../api/axios";
import * as S from "./style/Login.style";
import { Button } from "../../elements/Button";
import passwordView from "../../assets/images/svg/passwordView.svg";
import kakao from "../../assets/images/svg/kakaoTalk.svg";
import google from "../../assets/images/png/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const auth = useSelector((state: any) => {
    return state.auth.accessToken;
  });
  useEffect(() => {
    console.log("token!", auth);
    if (auth) navigation("/home");
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
          type="email"
          id="email"
          placeholder="이메일을 입력해 주세요."
          autoComplete="off"
          value={email}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <S.StyledInput
          type={passwordType ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <S.PasswordView
          src={passwordView}
          onClick={() => setPasswordType(!passwordType)}
        />
        <S.LinkContainer>
          {email.length > 7 && password.length > 7 ? (
            <Button
              background="#6138F8"
              border="none"
              color="#fff"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                axios
                  .post("/auth/sign-in", {
                    email,
                    password,
                  })
                  .then((response) => {
                    console.log(response);
                    if (response.status === 204) {
                      navigation("/initInfo");
                    }
                    if (response.status === 201) {
                      //TODO: setToken
                      dispatch(setToken(response.headers.authorization));
                      navigation("/home");
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              로그인
            </Button>
          ) : (
            <Button
              background="#EBEEF2"
              border="none"
              color="#6B6774"
              onClick={() => {}}
            >
              로그인
            </Button>
          )}

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
            <S.LinkToHome to={"/home"}>둘러보기</S.LinkToHome>
          </S.P>
        </S.QuickLoginContainer>
      </S.StyledForm>
    </S.Container>
  );
};

export default Login;
