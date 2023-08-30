import MyBucket from "../pages/MyPage/MyBucket";
import MyFollowing from "../pages/MyPage/MyFollowing";
import MyFollower from "../pages/MyPage/MyFollower";
import MyPage from "../pages/MyPage/MyPage";
import MyPageRoot from "../pages/MyPage/MyPageRoot";
import MyProfile from "../pages/MyPage/MyProfile";
import MyReqeust from "../pages/MyPage/MyReqeust";

export const MyPageRouter = {
  path: "/mypage",
  element: <MyPageRoot />, //마이페이지 컴포넌트
  children: [
    { path: "/mypage/:userId", element: <MyPage /> },
    { path: "/mypage/:userId/bucket/:bucketId", element: <MyBucket /> },
    { path: "/mypage/request", element: <MyReqeust /> },
    { path: "/mypage/following/:userId", element: <MyFollowing /> },
    { path: "/mypage/follower/:userId", element: <MyFollower /> },
    { path: "/mypage/profile/:userId", element: <MyProfile /> },
  ],
};
