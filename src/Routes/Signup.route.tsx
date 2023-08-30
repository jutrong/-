import Signup from "../pages/Signup/Signup";
import Terms from "../pages/Signup/Terms";
import EmailCertification from "../pages/Signup/EmailCertification";
import EnterMembersInfo from "../pages/Signup/EnterMembersInfo";
import SignUpComplete from "../pages/Signup/SignUpComplete";

export const SignupRouter = {
  path: "signup",
  element: <Signup />,
  children: [
    { path: "", element: <Terms /> },
    { path: "emailCertification", element: <EmailCertification /> },
    { path: "enterMembersInfo", element: <EnterMembersInfo /> },
    { path: "signUpComplete", element: <SignUpComplete /> },
  ],
};
