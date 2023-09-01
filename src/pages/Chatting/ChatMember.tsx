import React, { useContext, useEffect, useState } from 'react';
import BackButton from '../../components/Chatting/BackButton';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';
import iconSearch from '../../assets/images/svg/ic-search.svg';
import * as S from './styles/ChatMember.style';
import ChatSearchMember from '../../components/Chatting/ChatSearchMember';
import { MemberType } from '../../types/chattingType';
import { useLocation } from 'react-router-dom';
import { SocketContext } from '../../App';
import { Socket } from 'socket.io-client';



const ChatMember = () => {

    const socket = useContext<Socket | undefined>(SocketContext);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [members, setMembers] = useState<MemberType[]>([]);
    const { pathname } = useLocation();
    const roomId = Number(pathname.split("/chatting/chatmember/")[1]);

    useEffect(() => {
        if (socket) {
            const getMember = (v: React.SetStateAction<MemberType[]>) => setMembers(v);

            socket.emit("members", {room: roomId});
            socket.on("members", getMember);

            return () => {
                socket.emit("members", {room: roomId});
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
                { members && members.map((member, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ChatUserInfo
                                id={member.id}
                                isAdmin={member.isAdmin}
                                nickName={member.nickName}
                                image={member.image}
                                isJail={member.isJail}
                            />
                        </React.Fragment>
                    )}
                )}
            </S.MemberWindow>
            {openSearch ? 
                <ChatSearchMember 
                    setOpenSearch={setOpenSearch} 
                    members={members}
                /> 
                : null
            }  
        </>
    )
}


export default ChatMember;