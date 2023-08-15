import React, { useState, useRef } from "react";
import axios from "axios";

type Props = {
  setEmailAuthValidState: (value: boolean) => void;
};
const EmailCertification = () => {
  const email = useRef(null);
  const [authValid, setAuthValid] = useState("");

  const handleEmailAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .get(`http://146.56.143.108/auth/verificationCode?email=${email}`)
      .then((res) => console.log("email res", res))
      .catch((e) => console.log(e));
  };
  const handleEmailAuthVaildClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    axios
      .post(`http://146.56.143.108/auth/verificationCode`, {
        email,
        code: authValid,
      })
      .then((res) => {
        console.log("email res", res);
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
          // defaultValue={email}
          // onChange={(e) => }
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
        <p>
          이메일 인증번호가 발송되지 않았나요?<span>재발송하기</span>
        </p>
      </form>
    </div>
  );
};
export default EmailCertification;
