import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Feed from "./pages/Feed/Feed";
// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import HotFandom from "./pages/HotFandom/HotFandom";
import FandomDetail from "./pages/MyFandom/FandomDetail";
import CreateNewFandom from "./pages/MyFandom/CreateNewFandom";

import {
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
  FeedWriteRouter,
  SearchItemRouter,
  MyFandomRouter,
  LoginRouter,
  InitInfoRouter,
} from "./Routes";
import Requests from "./pages/Request/Requests";
import Missing from "./pages/Missing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <Missing />, //홈 화면 컴포넌트
  },
  {
    path: "home",
    element: <Home />, //홈 화면 컴포넌트
  },
  {
    path: "hotFandom",
    element: <HotFandom />, //타오르는 팬덤 컴포넌트
  },
  // { path: "login", element: <Login /> }, //로그인 컴포넌트
  {
    path: "fandom/:fandomId",
    element: <FandomDetail />, //팬덤 상세보기 컴포넌트
  },
  {
    path: "createfandom",
    element: <CreateNewFandom />, //팬덤 상세보기 컴포넌트
  },
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
  FeedWriteRouter,
  SearchItemRouter,
  MyFandomRouter,
  LoginRouter,
  InitInfoRouter,
]);

export default Router;
