import Feed from "../pages/Feed/Feed";
import FeedDetail from "../pages/FeedDetail/FeedDetail";

export const FeedRouter = {
  path: "feed",
  element: <Feed />, //피드 리스트 컴포넌트
  // children: [{ path: ":feedId", element: <FeedDetail /> }],
};
export const FeedDetailRouter = {
  path: "feed/:FeedId",
  element: <FeedDetail />,
};
