import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChatProps, MyChat, OtherChat } from '../../components/Chatting/ChatBubble';
import BackButton from '../../components/Chatting/BackButton';
import ChatInputBar from '../../components/Chatting/ChatInputBar';
import iconMember from '../../assets/images/svg/ic-member.svg';
import ChatGridImage from '../../components/Chatting/ChatGridImage';
import * as S from './styles/ChatRoom.style';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../App';
import { useLocation, useOutletContext } from "react-router-dom";
import { Fandom } from '../../types/chattingType';


const imageMock: string[] = [
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/17/4a3691f8-a5b9-4705-9c47-44be7988c66a.jpg",
    "https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg",
    "https://cdnweb01.wikitree.co.kr/webdata/editor/202203/20/img_20220320152018_d56ef2d9.webp",
    "https://image.jtbcplus.kr/data/contents/jam_photo/202209/21/37a8d815-ed8d-4cf5-8cd4-3714f3d8c649.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNzUg/MDAxNjEyMzY5MDQ2ODMw.k6txr5dsICIPp9EzfUknZABzC8RYutPHYkGSIrwbv-sg.Vb8kG_i1p1YpDLQVp7zAlYCdWm2O4aTjekdAOdIzM7wg.JPEG.kisluvme/IMG_2574.JPG?type=w800",
    "https://dimg.donga.com/wps/SPORTS/IMAGE/2022/01/27/111487379.1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUURz18LJaYfQPqh2P0EWzvsGXJqZNI3UUA&usqp=CAU",
    "https://image.bugsm.co.kr/essential/images/500/540/54066.jpg",
    "https://play-lh.googleusercontent.com/4CyGC7CiaxkyDloyji4IMH07nTPUluhrlV1A0SJ-VkYbobIo--ndgJ1bikONNnr5zN0",
];

type FandomData = Fandom[];

const ChatRoom = () => {
    const { roomList, setRoomList } = 
        useOutletContext<{
            roomList: FandomData;
            setRoomList: React.Dispatch<React.SetStateAction<FandomData>>;
        }>();

    const socket = useContext<Socket | undefined>(SocketContext);
    const { pathname }  = useLocation();
    const roomId = Number(pathname.split("/chatting/chatroom/")[1]);
    const roomName = roomList.find(item => item.id===roomId)?.fandomName;

    const [myId, setMyId] = useState<number>();
    const [message, setMessage] = useState<string>('');
    const [chatMessages, setChatMessages] = useState<ChatProps[]>([]);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // const myId = 123;
    const ban: boolean = false;

    const dateTime = (date: string) => {
        const newDate = new Date(date).toLocaleString();
        const splitDate = newDate.split(" ");
        const splitTime = splitDate[3] + " " + splitDate[4].slice(0, -3);
        return splitTime;
    }

    useEffect(() => {
        if(socket) {
            const initMessage = (v: any) => setChatMessages(v);
            const newMessage = (v: any) => setChatMessages((prev) => ([...prev, v]));
            const getMyId = (v: any) => setMyId(v.userId);

            socket.emit("joinRoom", roomId);
            socket.emit("myInfo", roomId);
            socket.on("joinRoom", initMessage);
            socket.on("myInfo", getMyId);
            socket.on("bias", newMessage);


            return () => {
                socket.emit("leaveRoom", roomId);
                socket.emit("myInfo", roomId);
                socket.off("bias", newMessage);
                socket.off("myInfo", getMyId);
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
                    <S.LinkItem to={`/chatmember/${roomId}`}>
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
                                message.author.id === myId ?
                                <React.Fragment key={index}>
                                    <MyChat 
                                        author={message.author}
                                        content={message.content}
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
                                        readCount={message.readCount}
                                        createdAt={dateTime(message.createdAt)}
                                        $visibleProfile={visibleProfile}
                                        $visibleTime={visibleTime}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                    <ChatGridImage imageList={imageMock} />
                    <div ref={scrollRef}></div>
                </S.ChatRoomWindow>
                <ChatInputBar 
                    ban={ban} 
                    message={message}
                    setMessage={setMessage}
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
            </>
            
    )
}

export default ChatRoom;