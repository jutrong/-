import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

import {
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
} from "./Routes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "home",
    element: <Main />, //홈 화면 컴포넌트
  },
  {
    path: "hotFandom",
    element: <Main />, //타오르는 팬덤 컴포넌트
  },
  { path: "login", element: <Main /> },
  {
    path: "fandom/:fandomId",
    element: <Main />, //팬덤 상세보기 컴포넌트
  },
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
]);

export default Router;
