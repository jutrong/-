import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

interface userInfoType {
  password: string;
  userName: string;
  birthDate: string;
  phoneNumber: string;
}

interface signupContextType {
  email: string;
  setEmail: (value: string) => void;
  setSignupStep: (value: string) => void;
  setUserInfo: (value: userInfoType) => void;
  userInfo: userInfoType;
}

export const signupContext = createContext<signupContextType>(
  {} as signupContextType
);

const Signup: React.FC = () => {
  const [signupStep, setSignupStep] = useState("terms");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState<userInfoType>({
    password: "",
    userName: "",
    birthDate: "",
    phoneNumber: "",
  });
  const navigation = useNavigate();
  // const handleSignupClcik = ()=>{

  // }
  const nextButton = () => {
    if (signupStep === "terms")
      return (
        <input
          type="button"
          value="다음,emailCertification"
          onClick={() => {
            navigation("emailCertification");
            setSignupStep("emailCertification");
          }}
        />
      );
    if (signupStep === "emailCertification")
      return (
        <input
          type="button"
          value="다음,enterMembersInfo"
          onClick={() => {
            navigation("enterMembersInfo");
            setSignupStep("enterMembersInfo");
          }}
        />
      );
    if (signupStep === "enterMembersInfo")
      return (
        <input
          type="button"
          value="회원가입 완료"
          onClick={() => {
            axios
              .post(`http://146.56.143.108/auth/signup`, {
                email,
                password: userInfo.password,
                userName: userInfo.userName,
                birthDate: userInfo.birthDate,
                phoneNumber: userInfo.phoneNumber,
              })
              .then((res) => {
                console.log(res);
                navigation("signUpComplete");
                setSignupStep("signUpComplete");
              })
              .catch((e) => console.log(e));
          }}
        />
      );
    return;
  };

  return (
    <signupContext.Provider
      value={{ email, setEmail, setSignupStep, setUserInfo, userInfo }}
    >
      <div>
        header
        <Outlet />
        {nextButton()}
      </div>
    </signupContext.Provider>
  );
};
export default Signup;
