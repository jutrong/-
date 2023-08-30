import React, { useState, useContext } from "react";
import axios from "../../api/axios";
import styled from "styled-components";
import PageHeader from "./PageHeader";
import * as S from "./style/EnterMembersInfo.style";
import { useOutletContext } from "react-router-dom";

type userInfoType = {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
  code: string;
  email: string;
};

const EnterMembersInfo = () => {
  // const navigation = useNavigate();
  // useEffect(() => {
  //   if (email === "") {
  //     navigation("/signup");
  //   }
  // }, []);
  // const  useContext(signupContext);
  // const { email, setUserInfo, userInfo } = useContext(signupContext);
  const { email, setUserInfo, userInfo } = useOutletContext<{
    email: string;
    setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
    userInfo: userInfoType;
  }>();
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
    <S.Container>
      {/* <PageHeader totalPages={3} currentPage={3} /> */}
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
        />
        <S.Input
          type="text"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
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
          placeholder="생년월일을 입력해 주세요 &#40;ex 991121&#41;"
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
  );
};
export default EnterMembersInfo;
