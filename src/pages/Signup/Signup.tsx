import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import * as S from "./style/Signup.Style";
import { Button } from "../../elements/Button";

type userInfoType = {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
  code: string;
  email: string;
};

type signupContextType = {
  email: string;
  emailCode: string;
  setEmail: (value: string) => void;
  setSignupStep: (value: string) => void;
  setEmailCode: (value: string) => void;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
  userInfo: userInfoType;
};

export const signupContext = createContext<signupContextType>(
  {} as signupContextType
);

const Signup = () => {
  const [signupStep, setSignupStep] = useState("terms");
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
  const navigation = useNavigate();

  const nextButton = () => {
    if (signupStep === "terms")
      return (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          onClick={() => {
            navigation("emailCertification");
            setSignupStep("emailCertification");
          }}
        >
          다음
        </Button>
      );
    if (signupStep === "emailCertification")
      return (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          value="다음"
          onClick={() => {
            navigation("enterMembersInfo");
            setSignupStep("enterMembersInfo");
          }}
        >
          다음
        </Button>
      );
    if (signupStep === "enterMembersInfo")
      return (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          value="회원가입 완료"
          onClick={() => {
            console.log(userInfo, "info");
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
                navigation("signUpComplete");
                setSignupStep("signUpComplete");
              })
              .catch((e) => console.log(e));
          }}
        >
          회원가입 완료
        </Button>
      );
    return;
  };
  console.log(email, "indexemail");
  console.log(emailCode, "indexemailCode");
  return (
    <signupContext.Provider
      value={{
        email,
        emailCode,
        setEmail,
        setSignupStep,
        setUserInfo,
        setEmailCode,
        userInfo,
      }}
    >
      {/* outletcontext로 수정 */}
      <S.Container>
        <Outlet />
        {nextButton()}
      </S.Container>
    </signupContext.Provider>
  );
};
export default Signup;
