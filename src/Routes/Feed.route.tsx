import Signup from "../pages/Signup";

export const FeedRouter = {
  path: "feed",
  element: <Signup />, //피드 리스트 컴포넌트
  children: [
    //   { path: "details", element: <Terms /> }, //피드 상세보기
  ],
};
