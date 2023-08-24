import MyBucket from "../pages/MyPage/MyBucket";
import MyFollow from "../pages/MyPage/MyFollow";
import MyFollower from "../pages/MyPage/MyFollower";
import MyPage from "../pages/MyPage/MyPage";
import MyPageRoot from "../pages/MyPage/MyPageRoot";
import MyProfile from "../pages/MyPage/MyProfile";
import MyReqeust from "../pages/MyPage/MyReqeust";

export const MyPageRouter = {
  path: "/mypage",
  element: <MyPageRoot />, //마이페이지 컴포넌트
  children: [
    { index: true, element: <MyPage /> },
    { path: "/mypage/bucket", element: <MyBucket /> },
    { path: "/mypage/request", element: <MyReqeust /> },
    { path: "/mypage/follow", element: <MyFollow /> },
    { path: "/mypage/follower", element: <MyFollower /> },
    { path: "/mypage/profile", element: <MyProfile /> },
  ],
};
