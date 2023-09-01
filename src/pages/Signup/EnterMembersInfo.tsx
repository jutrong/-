import React, { useState, useEffect, useCallback } from "react";
import axios from "../../api/axios";
import PageHeader from "./PageHeader";
import * as S from "./style/EnterMembersInfo.style";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../elements/Button";
import SignUpHeader3 from "../../components/SignUp/SignUpHeader3";

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
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    passwordretry: true,
    name: true,
    birthday: true,
    phone: true,
  });
  const [isClicked, setIsClicked] = useState({
    email: true,
    password: true,
    passwordretry: true,
    name: true,
    birthday: true,
    phone: true,
  });

  useEffect(() => {
    if (email === "") {
      alert("인증기간 만료! 다시 이메일 인증을 해주세요.");
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

  const validatePassword = useCallback(() => {
    const isValidFormat =
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-=_+]{8,}|(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()-=_+])[a-zA-Z0-9!@#$%^&*()-=_+]{10,}$/.test(
        userInfo.password
      );
    setIsValid((prev) => ({
      ...prev,
      password: isValidFormat,
    }));
    setIsClicked((prev) => ({
      ...prev,
      password: true,
    }));
  }, [userInfo.password]);

  const validateName = useCallback(() => {
    if (userInfo.userName === "") {
      setIsValid((prev) => ({
        ...prev,
        name: false,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        name: true,
      }));
    }
    setIsClicked((prev) => ({
      ...prev,
      name: true,
    }));
  }, [userInfo.userName]);

  const validateBirthday = useCallback(() => {
    const isValidFormat =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(
        userInfo.birthDate
      );
    setIsValid((prev) => ({
      ...prev,
      birthday: isValidFormat,
    }));
    setIsClicked((prev) => ({
      ...prev,
      birthday: true,
    }));
  }, [userInfo.birthDate]);

  const validatePhone = useCallback(() => {
    const isValidFormat = /^\d{3}\d{4}\d{4}$/.test(userInfo.phoneNumber);
    setIsValid((prev) => ({
      ...prev,
      phone: isValidFormat,
    }));
    setIsClicked((prev) => ({
      ...prev,
      phone: true,
    }));
  }, [userInfo.phoneNumber]);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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
        <SignUpHeader3 />
        <S.Agreement>개인정보 입력하기</S.Agreement>
        <S.SubAgreement>
          당장 손민수 이용을 위해 <br />
          아래의 정보를 입력해 주세요
        </S.SubAgreement>
        <S.SubAgreement2>기본정보입력</S.SubAgreement2>
        <S.Form1>
          <S.InputLabel>아이디</S.InputLabel>
          <S.Label id="email">
            {email ? email : "다시 이메일 요청을 해주세요"}
          </S.Label>
          <S.InputLabel>비밀번호</S.InputLabel>
          <S.InputSubLabel>영문+숫자+특수기호 8자 이상</S.InputSubLabel>
          <S.Input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            value={userInfo.password}
            onChange={handleInfoChange}
            pattern="^[a-zA-Z0-9]{8,16}$"
            required
            onBlur={validatePassword}
          />
          {!isValid.password && isClicked.password && (
            <S.Warning>
              영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상으로
              입력해주세요.
            </S.Warning>
          )}
          <S.Input
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호 재입력"
            value={passwordCheck}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordCheck(e.target.value)
            }
            //pattern="^[a-zA-Z0-9]{8,16}$"
            required
          />
          {userInfo.password !== passwordCheck && (
            <S.Warning>비밀번호가 일치하지 않습니다</S.Warning>
          )}
        </S.Form1>
        <S.Form2>
          <S.SubAgreement3>개인정보입력</S.SubAgreement3>
          <S.InputLabel>이름</S.InputLabel>
          <S.Input
            type="text"
            id="userName"
            placeholder="홍길동"
            onChange={handleInfoChange}
            value={userInfo.userName}
            required
            onBlur={validateName}
          />
          {!isValid.name && isClicked.name && (
            <S.Warning>이름을 확인해주세요.</S.Warning>
          )}
          <S.InputLabel>생년월일</S.InputLabel>
          <S.Input
            type="text"
            id="birthDate"
            placeholder="YYYYMMDD"
            onChange={handleInfoChange}
            value={userInfo.birthDate}
            required
            //pattern="^[0-9]{8}$"
            onBlur={validateBirthday}
          />
          {!isValid.birthday && isClicked.birthday && (
            <S.Warning>올바른 형식(YYYYMMDD)으로 입력해주세요.</S.Warning>
          )}
          <S.InputLabel>전화번호</S.InputLabel>
          <S.Input
            type="text"
            id="phoneNumber"
            placeholder="01012345678"
            onChange={handleInfoChange}
            value={userInfo.phoneNumber}
            required
            //pattern="^[0-9]{7,}$"
            onBlur={validatePhone}
          />
          {!isValid.phone && isClicked.phone && (
            <S.Warning>올바른 형식(01012345678)으로 입력해주세요.</S.Warning>
          )}
        </S.Form2>
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
                navigation("/signup/signUpComplete");
              })
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
      <S.Box></S.Box>
    </>
  );
};
export default EnterMembersInfo;
