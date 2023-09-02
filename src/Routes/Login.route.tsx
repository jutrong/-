import { RouteObject } from "react-router-dom";
import Login from "../pages/Login/Login";
import OauthKakao from "../pages/Login/Oauth.kakao";
import LoginRoot from "../pages/Login/LoginRoot";
import OauthGoogle from "../pages/Login/Oauth.google";

export const LoginRouter: RouteObject = {
  path: "login",
  element: <LoginRoot />,
  children: [
    { path: "", element: <Login /> },
    { path: "kakao-callback", element: <OauthKakao /> },
    { path: "google-callback", element: <OauthGoogle /> },
  ],
};
