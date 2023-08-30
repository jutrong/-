import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import PageHeader from "./PageHeader";
import * as S from "./style/EnterMembersInfo.style";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../elements/Button";

type userInfoType = {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
  code: string;
  email: string;
};

const EnterMembersInfo = () => {
  const navigation = useNavigate();
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  useEffect(() => {
    if (email === "") {
      navigation("/signup");
    }
  }, []);
  const { email, setUserInfo, userInfo, emailCode } = useOutletContext<{
    email: string;
    setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
    userInfo: userInfoType;
    emailCode: string;
  }>();

  useEffect(() => {
    if (
      email !== "" &&
      userInfo.password === passwordCheck &&
      userInfo.userName &&
      userInfo.phoneNumber.length > 10 &&
      userInfo.birthDate.length > 7
    ) {
      setIsAuthValid(true);
    } else {
      setIsAuthValid(false);
    }
  }, [
    email,
    userInfo.password,
    passwordCheck,
    userInfo.userName,
    userInfo.phoneNumber,
    userInfo.birthDate,
  ]);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    console.log(e.target.value);
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <>
      <S.Container>
        <PageHeader totalPages={3} currentPage={3} />
        <S.Agreement>개인정보 입력하기</S.Agreement>
        <S.SubAgreement>
          정의로운 손민수 이용을 위해 <br />
          아래의 정보를 입력해 주세요
        </S.SubAgreement>
        <S.SubAgreement2>기본정보입력</S.SubAgreement2>
        <S.Form>
          <S.Label id="email">
            {email ? email : "다시 이메일 요청을 해주세요"}
          </S.Label>
          <S.Input
            type="text"
            id="password"
            placeholder="비밀번호를 입력해 주세요"
            value={userInfo.password}
            onChange={handleInfoChange}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$"
          />
          <S.Input
            type="text"
            id="passwordConfirm"
            placeholder="비밀번호를 다시 입력해 주세요"
            value={passwordCheck}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordCheck(e.target.value)
            }
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$"
          />
          {userInfo.password !== passwordCheck && (
            <S.Warning>비밀번호가 일치하지 않습니다</S.Warning>
          )}
        </S.Form>
        <S.Form>
          <S.SubAgreement2>개인정보입력</S.SubAgreement2>
          <S.Input
            type="text"
            id="userName"
            placeholder="이름을 입력해 주세요."
            onChange={handleInfoChange}
            value={userInfo.userName}
          />
          <S.Input
            type="text"
            id="birthDate"
            placeholder="생년월일을 입력해 주세요 &#40;ex 19991121&#41;"
            onChange={handleInfoChange}
            value={userInfo.birthDate}
          />
          <S.Input
            type="text"
            id="phoneNumber"
            placeholder="전화번호를 입력해 주세요 &#40;ex 01022222222&#41;"
            onChange={handleInfoChange}
            value={userInfo.phoneNumber}
          />
        </S.Form>
      </S.Container>
      {isAuthValid ? (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          onClick={() => {
            axios
              .post(`/auth/sign-up`, {
                email: email,
                password: userInfo.password,
                userName: userInfo.userName,
                birthDate: userInfo.birthDate,
                phoneNumber: userInfo.phoneNumber,
                code: emailCode,
              })
              .then((res) => {
                console.log(res);
                navigation("/signup/signUpComplete");
              })
              .catch((e) => console.log(e));
          }}
        >
          회원가입 완료
        </Button>
      ) : (
        <Button
          background="#EBEEF2"
          border="none"
          color="#6A6774"
          onClick={() => {}}
        >
          회원가입 완료
        </Button>
      )}
    </>
  );
};
export default EnterMembersInfo;
