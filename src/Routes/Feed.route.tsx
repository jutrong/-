import FeedIndex from "../pages/Feed";
import Feed from "../pages/Feed/Feed";

export const FeedRouter = {
  path: "feed",
  element: <FeedIndex />, //피드 리스트 컴포넌트
  children: [
    { path: "", element: <Feed /> }, //피드 상세보기
  ],
};
