import Main from "../pages/Main";

export const SignupRouter = {
  path: "signup",
  element: <Main />,
  children: [
    { path: "terms", element: <Main /> },
    { path: "emailCertification", element: <Main /> },
    { path: "enterMembersInfo", element: <Main /> },
    { path: "signUpComplete", element: <Main /> },
  ],
};
