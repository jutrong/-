import Main from "../pages/Main";

export const ChattingRouter = {
  path: "chatting",
  element: <Main />, //채팅 컴포넌트
  children: [
    // { path: "room", element: <EmailCertification /> }, //채팅방
  ],
};
