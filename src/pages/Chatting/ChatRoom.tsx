import React, { useContext, useEffect, useRef, useState } from 'react';
import { MyChat, OtherChat } from '../../components/Chatting/ChatBubble';
import BackButton from '../../components/Chatting/BackButton';
import ChatInputBar from '../../components/Chatting/ChatInputBar';
import iconMember from '../../assets/images/svg/ic-member.svg';
import * as S from './styles/ChatRoom.style';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../App';
import { useLocation, useOutletContext } from "react-router-dom";
import { ChatType, FandomType, UserInfoType } from '../../types/chattingType';



const ChatRoom = () => {
    const { roomList, setRoomList } = 
        useOutletContext<{
            roomList: FandomType[];
            setRoomList: React.Dispatch<React.SetStateAction<FandomType[]>>;
        }>();

    const socket = useContext<Socket | undefined>(SocketContext);
    const { pathname }  = useLocation();
    const roomId = Number(pathname.split("/chatting/chatroom/")[1]);
    const roomName = roomList.find(item => item.id === roomId)?.fandomName;

    const [myInfo, setMyInfo] = useState<UserInfoType | undefined>(undefined);
    const [message, setMessage] = useState<string>('');
    const [chatMessages, setChatMessages] = useState<ChatType[]>([]);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    
    const dateTime = (date: string) => {
        const newDate = new Date(date).toLocaleString();
        const splitDate = newDate.split(" ");
        const splitTime = splitDate[3] + " " + splitDate[4].slice(0, -3);
        return splitTime;
    }

    useEffect(() => {
        if(socket) {
            const initMessage = (v: React.SetStateAction<ChatType[]>) => setChatMessages(v);
            const newMessage = (v: any) => setChatMessages((prev) => ([...prev, v]));
            const getMyInfo = (v: React.SetStateAction<UserInfoType | undefined>) => setMyInfo(v);

            socket.emit("joinRoom", roomId);
            socket.emit("myInfo", roomId);
            socket.on("joinRoom", initMessage);
            socket.on("myInfo", getMyInfo);
            socket.on("bias", newMessage);


            return () => {
                socket.emit("leaveRoom", roomId);
                socket.emit("myInfo", roomId);
                socket.off("bias", newMessage);
                socket.off("myInfo", getMyInfo);
                socket.off("joinRoom", initMessage);
            };
        }
    }, [socket]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [chatMessages]);


    return (
            <>
                <S.ChatHeader>
                    <BackButton />
                    <S.ChatTitle>{roomName}</S.ChatTitle>
                    <S.LinkItem to={`/chatting/chatmember/${roomId}`}>
                        <S.IconButton src={iconMember} />
                    </S.LinkItem>
                </S.ChatHeader>
                <S.ChatRoomWindow>
                    {
                        chatMessages && chatMessages.map((message, index) => {
                            
                            let visibleProfile = false;
                            let visibleTime = true;


                            // 프로필 보이기 유무
                            // 기본적으로 profile 숨기고, 전에 보낸 사람과 지금 보낸 사람이 다른 경우 profile 정보 보이기
                            if (index !== 0) { // 첫 메시지가 아니면
                                const prevSender = chatMessages[index - 1].author.id;
                                const prevSenderTime = chatMessages[index - 1].createdAt;

                                if (prevSender !== message.author.id) {
                                    visibleProfile = true;

                                // 전 메시지와 현재 메시지를 보낸 사람이 같고, 보낸 시간이 다를 경우 프로필 보이기
                                } else if (dateTime(prevSenderTime) !== dateTime(message.createdAt)) {  
                                    visibleProfile = true;
                                }

                            } else {
                                visibleProfile = true;
                            } 


                            // 보낸시간 보이기 유무
                            if (index !== chatMessages.length - 1) { // 마지막 메시지가 아니면
                                const nextSender = chatMessages[index + 1].author.id;

                                // 현재 메시지와 다음 메시지가 같은 사람일 때
                                if (nextSender === message.author.id) {
                                    const nextTimeValue = dateTime(chatMessages[index + 1].createdAt);

                                    // 현재 메시지와 다음 메시지가 같은 시간이면 현재 메시지 시간 보이기X
                                    if (nextTimeValue === dateTime(message.createdAt)) {
                                        visibleTime = false;
                                    }                                  
                                } 
                            }

                            return  (
                                message.author.id === myInfo?.userId ?
                                <React.Fragment key={index}>
                                    <MyChat 
                                        author={message.author}
                                        content={message.content}
                                        images={message.images}
                                        createdAt={dateTime(message.createdAt)}
                                        readCount={message.readCount}
                                        $visibleTime={visibleTime}
                                    />
                                </React.Fragment>
                                    : 
                                <React.Fragment key={index}>
                                    <OtherChat
                                        author={message.author}
                                        content={message.content}
                                        images={message.images}
                                        readCount={message.readCount}
                                        createdAt={dateTime(message.createdAt)}
                                        $visibleProfile={visibleProfile}
                                        $visibleTime={visibleTime}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                    <div ref={scrollRef}></div>
                </S.ChatRoomWindow>
                <ChatInputBar 
                    ban={myInfo && myInfo.isJail ? true : false} 
                    roomId={roomId}
                    message={message}
                    setMessage={setMessage}
                />
            </>
    )
}

export default ChatRoom;