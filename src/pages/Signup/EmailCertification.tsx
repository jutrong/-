import React, { useState } from "react";
import axios from "../../api/axios";
import * as S from "./style/EmailCertification.style";
import PageHeader from "./PageHeader";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../elements/Button";

const EmailCertification = () => {
  const [authValid, setAuthValid] = useState<string>("");
  const [sendValid, setSendValid] = useState<boolean>(false);
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);
  const navigation = useNavigate();
  const { email, setEmail, setEmailCode } = useOutletContext<{
    email: string;
    setEmailCode: (value: string) => void;
    setEmail: (value: string) => void;
  }>();

  const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSendValid(true);
    axios
      .get(`/auth/verification-code?email=${email}`)
      .then((res) => {
        console.log("email res", res);
      })
      .catch((e) => console.log(e));
  };
  const handleEmailAuthVaildClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    axios
      .post(`auth/verification-code`, {
        email: email,
        code: authValid,
      })
      .then((res) => {
        console.log("email res", res);
        setEmailCode(authValid);
        setIsAuthValid(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <S.Container>
        <PageHeader totalPages={3} currentPage={2} />

        <S.Agreement>본인인증하기</S.Agreement>
        <S.SubAgreement>
          정의로운 손민수 이용을 위해
          <br /> 이메일 인증을 해주세요
        </S.SubAgreement>
        <S.Form>
          <S.EmailContainer>
            <S.InputEmail
              type="email"
              id="email"
              placeholder="이메일을 입력해 주세요."
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            {sendValid || (
              <S.SendButton onClick={handleEmailAuthClick}>
                인증번호발송
              </S.SendButton>
            )}
          </S.EmailContainer>
          <S.EmailContainer>
            <S.InputEmail
              type="text"
              id="emailCertificaton"
              placeholder="이메일 인증 번호를 입력해 주세요"
              value={authValid}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthValid(e.target.value)
              }
            />
            <S.SendButton onClick={handleEmailAuthVaildClick}>
              인증하기
            </S.SendButton>
          </S.EmailContainer>
          <S.TextWithLink>
            이메일 인증번호가 발송되지 않았나요?
            <S.ReSend onClick={handleEmailAuthClick}>재발송하기</S.ReSend>
          </S.TextWithLink>
        </S.Form>
      </S.Container>
      {isAuthValid ? (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          onClick={() => {
            navigation("/signup/enterMembersInfo");
          }}
        >
          다음
        </Button>
      ) : (
        <Button
          background="#EBEEF2"
          border="none"
          color="#6A6774"
          onClick={() => {}}
        >
          다음
        </Button>
      )}
    </>
  );
};
export default EmailCertification;
