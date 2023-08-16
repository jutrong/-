import Main from "../pages/Main";

export const FeedRouter = {
  path: "feed",
  element: <Main />, //피드 리스트 컴포넌트
  children: [
    //   { path: "details", element: <Terms /> }, //피드 상세보기
  ],
};
