import Chatting from '../pages/Chatting';
import ChatList from "../pages/Chatting/ChatList";
import ChatRoom from "../pages/Chatting/ChatRoom";
import ChatMember from '../pages/Chatting/ChatMember';

export const ChattingRouter = {
  path: "chatting",
  element: <Chatting />, //채팅 컴포넌트
  children: [
    { path: "", element: <ChatList /> }, // 채팅 리스트
    { path: "chatroom/:id", element: <ChatRoom /> },  // 채팅방
    { path: "chatmember/:id", element: <ChatMember /> }   // 채팅 멤버
  ],
};
