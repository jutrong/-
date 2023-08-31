import React, { useContext, useEffect, useState } from 'react';
import BackButton from '../../components/Chatting/BackButton';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';
import iconSearch from '../../assets/images/svg/ic-search.svg';
import * as S from './styles/ChatMember.style';
import ChatSearchMember from '../../components/Chatting/ChatSearchMember';
import { ChatMemberType, FandomType } from '../../types/chattingType';
import { useLocation } from 'react-router-dom';
import { SocketContext } from '../../App';
import { Socket } from 'socket.io-client';


const memberMock:ChatMemberType[] = [
    {
        $ban: false,
        userName: "아마추어 손민수1",
    },
    {
        $ban: false,
        userName: "나는야 손민수",
    },
    {
        $ban: false,
        userName: "손민수 하러 옴",
    },
    {
        $ban: true,
        userName: "룰라랄라",
    },
    {
        $ban: true,
        userName: "호에에엥",
    },
];

const ChatMember = () => {

    const socket = useContext<Socket | undefined>(SocketContext);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const { pathname } = useLocation();
    const roomId = Number(pathname.split("/chatting/chatmember/")[1]);
    const [members, setMembers] = useState();

    useEffect(() => {
        if (socket) {
            const getMember = (v: any) => setMembers(v);

            socket.emit("members", roomId);
            socket.on("members", getMember);

            return () => {
                socket.emit("members", roomId);
                socket.off("members", getMember);
            }
        }
    }, [socket]);

    

    return (
        <>
            <S.ChatHeader>
                <BackButton />
                <S.ChatTitle>채팅방 멤버 관리</S.ChatTitle> 
                <S.IconButton src={iconSearch} onClick={() => setOpenSearch(true)} />
            </S.ChatHeader>
            <S.MemberWindow>
                { memberMock && memberMock.map((member, index) => (
                    <React.Fragment key={index}>
                        <ChatUserInfo
                            $ban={member.$ban}
                            userName={member.userName}
                        />
                    </React.Fragment>
                ))}
            </S.MemberWindow>
            {openSearch ? 
                <ChatSearchMember setOpenSearch={setOpenSearch} /> 
                : null}  
        </>
    )
}


export default ChatMember;