import Main from "../pages/Main";

export const SonminsooRouter = {
  path: "minsooItem",
  element: <Main />, //손민수템 컴포넌트
  children: [
    // { path: "details", element: <Terms /> }, //손민수템 상세보기
    //   { path: "details", element: <Terms /> }, //손민수템 의뢰
  ],
};
