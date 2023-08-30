import { useState } from "react";
import { Outlet } from "react-router-dom";
import * as S from "./style/Signup.Style";

type userInfoType = {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
  code: string;
  email: string;
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    password: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
    code: "",
    email: "",
  });

  console.log(email, "indexemail");
  console.log(emailCode, "indexemailCode");
  return (
    <S.Container>
      <Outlet
        context={{
          email,
          emailCode,
          setEmail,
          password: userInfo.password,
          setUserInfo,
          setEmailCode,
          userInfo,
        }}
      />
    </S.Container>
  );
};
export default Signup;
