import MyFandom from "../pages/MyFandom/MyFandom";
import FandomSearch from "../pages/MyFandom/FandomSearch";

export const MyFandomRouter = {
    path: "myfandom",
    element: <MyFandom />, //마이페이지 컴포넌트
    children: [
        { path: "search", element: <FandomSearch /> },
        // { path: "/mypage/request", element: <MyReqeust /> },
        // { path: "/mypage/follow", element: <MyFollow /> },
        // { path: "/mypage/follower", element: <MyFollower /> },
        // { path: "/mypage/profile", element: <MyProfile /> },
    ],
};
