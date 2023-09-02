import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";
import axios from "../../api/axios";
import * as S from "./style/Login.style";
import { Button } from "../../elements/Button";
import passwordView from "../../assets/images/svg/passwordView.svg";
import passwordViewActive from "../../assets/images/svg/ic-eye.svg";
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
    if (auth) navigation("/home");
  }, [auth, navigation]);

  const kakaoSignInHandler = () => {
    const REST_API_KEY = "447f662d5d88aea44db745ae6b5214ca";
    const REDIRECT_URI = "http://localhost:3000/login/kakao-callback";
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
    window.location.href = link;
  };

  const googleSignIngHandler = () => {
    const CLIENT_ID =
      "107582580282-juunfb5j33sqrm5fmvaevgo4t1lkco25.apps.googleusercontent.com";
    const REDIRECT_URI = "http://localhost:3000/login/google-callback";
    const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=profile openid email&response_type=code`;
    window.location.href = link;
  };

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
          src={passwordType ? passwordViewActive : passwordView}
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
                    alert("아이디 혹은 비밀번호를 확인해 주세요");
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
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                alert("아이디 또는 비밀번호가 틀렸습니다!");
              }}
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
            <button onClick={googleSignIngHandler}>
              <S.LoginIcon src={google} />
            </button>
            <button onClick={kakaoSignInHandler}>
              <S.LoginIcon src={kakao} />
            </button>
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
