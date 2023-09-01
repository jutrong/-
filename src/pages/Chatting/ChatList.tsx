import React, { useContext, useEffect, useState } from 'react';
import type { FandomType } from '../../types/chattingType';
import ChatFandom from '../../components/Chatting/ChatFandom';
import FooterNavBar from '../../components/common/FooterNavBar/FooterNavBar';
import logo from '../../assets/images/svg/ic-logo.svg';
import * as S from './styles/ChatList.style';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../App';
import { useNavigate, useOutletContext } from 'react-router-dom';


const ChatList = () => {
    const { roomList, setRoomList } = useOutletContext<{
        roomList: FandomType[];
        setRoomList: React.Dispatch<React.SetStateAction<FandomType[]>>;
    }>();

    const socket = useContext<Socket | undefined>(SocketContext);
    const navigate = useNavigate();


    useEffect(() => {
        
        if (socket) {
            const initRoom = (v: Socket) => socket.emit("initRoom", v);
            const setData = (v: React.SetStateAction<FandomType[]>) => setRoomList(v);

            socket.on("rooms", initRoom);
            socket.on("roomInfo", setData);

            socket.emit("rooms");

            return () => {
                socket.off("rooms", initRoom);
                socket.off("roomInfo", setData);
            }
        }
    }, [socket]);

    return (
        <>
            <S.ChatHeader>
                <S.Logo 
                    src={logo} 
                    onClick={() => {
                        navigate("/home");
                    }}
                />
            </S.ChatHeader>
            <S.ChatListWindow>
                {roomList?.map((fandom) => {
                    return (
                        <React.Fragment key={fandom.id}>
                            <S.LinkItem to={`chatroom/${fandom.id}`}>
                                <ChatFandom 
                                    id={fandom.id}
                                    fandomName={fandom.fandomName} 
                                    memberLength={fandom.memberLength} 
                                    image={fandom.image}
                                    lastMessage={fandom.lastMessage}
                                />
                            </S.LinkItem>
                        </React.Fragment>
                    )}
                )}
            </S.ChatListWindow>
            <FooterNavBar />
        </>
    )
}


export default ChatList;
