import Feed from "../pages/Feed";
import FeedList from "../pages/Feed/FeedList";

export const FeedRouter = {
  path: "feed",
  element: <Feed />, //피드 리스트 컴포넌트
  children: [
    { path: "", element: <FeedList /> }, //피드 상세보기
  ],
};
