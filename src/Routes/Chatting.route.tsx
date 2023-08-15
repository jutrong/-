import Signup from "../pages/Signup";

export const ChattingRouter = {
  path: "chatting",
  element: <Signup />, //채팅 컴포넌트
  children: [
    // { path: "room", element: <EmailCertification /> }, //채팅방
  ],
};
