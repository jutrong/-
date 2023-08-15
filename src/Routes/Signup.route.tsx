import Signup from "../pages/Signup";
import EmailCertification from "../pages/Signup/EmailCertification";
import EnterMembersInfo from "../pages/Signup/EnterMembersInfo";
import SignUpComplete from "../pages/Signup/SignUpComplete";
import Terms from "../pages/Signup/Terms";

export const SignupRouter = {
  path: "signup",
  element: <Signup />,
  children: [
    { path: "terms", element: <Terms /> },
    { path: "emailCertification", element: <EmailCertification /> },
    { path: "enterMembersInfo", element: <EnterMembersInfo /> },
    { path: "signUpComplete", element: <SignUpComplete /> },
  ],
};
