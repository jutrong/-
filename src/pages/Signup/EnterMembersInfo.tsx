import { signupContext } from "./index";
import React, { useState, useContext } from "react";
import axios from "axios";

const EnterMembersInfo = () => {
  // const navigation = useNavigate();
  // useEffect(() => {
  //   if (email === "") {
  //     navigation("/signup");
  //   }
  // }, []);
  // const  useContext(signupContext);
  const { email, setUserInfo, userInfo } = useContext(signupContext);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    console.log(e.target.value);
    //@ts-ignore
    //TODO: prev 타입 에러 해결
    setUserInfo((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <div>
      <h1>개인정보 입력하기</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <h2>기본정보입력</h2>
      <form>
        <label htmlFor="email">이메일을 입력해 주세요.</label>
        <input
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요"
          value={email}
        />
        <label htmlFor="password">비밀번호를 입력해 주세요</label>
        <input
          type="text"
          id="password"
          placeholder="비밀번호를 입력해 주세요"
          value={userInfo.password}
          onChange={handleInfoChange}
        />
        <label htmlFor="passwordConfirm">비밀번호를 다시 입력해 주세요</label>
        <input
          type="text"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
        <h2>개인정보입력</h2>
      </form>
      <form>
        <label htmlFor="userName">이름을 입력해 주세요.</label>
        <input
          type="text"
          id="userName"
          placeholder="이름을 입력해 주세요."
          onChange={handleInfoChange}
          value={userInfo.userName}
        />
        <label htmlFor="birthDate">
          생년월일을 입력해 주세요 &#40;ex 991121&#41;
        </label>
        <input
          type="text"
          id="birthDate"
          placeholder="생년월일을 입력해 주세요 &#40;ex 991121&#41;"
          onChange={handleInfoChange}
          value={userInfo.birthDate}
        />
        <label htmlFor="phoneNumber">
          전화번호를 입력해 주세요 &#40;ex 01022222222&#41;
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="전화번호를 입력해 주세요 &#40;ex 01022222222&#41;"
          onChange={handleInfoChange}
          value={userInfo.phoneNumber}
        />
      </form>
    </div>
  );
};
export default EnterMembersInfo;
