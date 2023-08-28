import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Feed from "./pages/Feed/Feed";
// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import HotFandom from "./pages/HotFandom/HotFandom";
import FandomDetail from "./pages/MyFandom/FandomDetail";

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
} from "./Routes";
import Requests from "./pages/Request/Requests";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
    FeedWriteRouter,
    SearchItemRouter,
    MyFandomRouter,
]);

export default Router;
