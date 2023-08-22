import React, { useState, useContext } from "react";
import { signupContext } from "./index";
import axios from "../../api/axios";

const EmailCertification = () => {
  const [authValid, setAuthValid] = useState("");
  const useSignupContext = useContext(signupContext);
  console.log(useSignupContext, "useSignupContext");

  const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .get(`/auth/verification-code?email=${useSignupContext?.email}`)
      .then((res) => console.log("email res", res))
      .catch((e) => console.log(e));
    //   axios
    //     .get(
    //       `http://146.56.143.108/auth/verification-code?email=${useSignupContext?.email}`
    //     )
    //     .then((res) => console.log("email res", res))
    //     .catch((e) => console.log(e));
  };
  const handleEmailAuthVaildClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    axios
      .post(`http://146.56.143.108/auth/verificationCode`, {
        email: useSignupContext?.email,
        code: authValid,
      })
      .then((res) => {
        console.log("email res", res);
        useSignupContext?.setSignupStep("emailCertification");
        // setEmailAuthValidState(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h1>본인인증하기</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <form>
        <label htmlFor="email">이메일을 입력해 주세요.</label>
        <input
          type="text"
          id="email"
          placeholder="이메일을 입력해 주세요."
          value={useSignupContext?.email}
          onChange={(e) => useSignupContext?.setEmail(e.target.value)}
        />
        <button onClick={handleEmailAuthClick}>인증번호 발송 하기</button>
        <label htmlFor="emailCertificaton">
          이메일 인증 번호를 입력해 주세요
        </label>
        <input
          type="text"
          id="emailCertificaton"
          placeholder="이메일 인증 번호를 입력해 주세요"
          value={authValid}
          onChange={(e) => setAuthValid(e.target.value)}
        />

        <button onClick={handleEmailAuthVaildClick}>인증하기</button>
        {/* {() => useSignupContext?.setSignupStep("enterMembersInfo")} */}
        <p>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </p>
      </form>
    </div>
  );
};
export default EmailCertification;
