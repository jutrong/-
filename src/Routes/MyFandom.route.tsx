import MyFandom from "../pages/MyFandom/MyFandom";
import FandomSearch from "../pages/MyFandom/FandomSearch";
import CreateNewFandom from "../pages/MyFandom/CreateNewFandom";
import MyFamdomRoot from "../pages/MyFandom/MyFandomRoot";

export const MyFandomRouter = {
    path: "myfandom",
    element: <MyFamdomRoot />, //마이페이지 컴포넌트
    children: [
        { path: "", element: <MyFandom /> },
        { path: "search", element: <FandomSearch /> },
        { path: "createfandom", element: <CreateNewFandom /> },
    ],
};
