import React, { useContext, useEffect, useState } from 'react';
import type { Fandom } from '../../types/chattingType';
import ChatFandom from '../../components/Chatting/ChatFandom';
import FooterNavBar from '../../components/common/FooterNavBar/FooterNavBar';
import logo from '../../assets/images/svg/ic-logo.svg';
import * as S from './styles/ChatList.style';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../App';
import { useOutletContext } from 'react-router';

type FandomData = Fandom[];

const ChatList = () => {
    const { roomList, setRoomList } = useOutletContext<{
        roomList: FandomData;
        setRoomList: React.Dispatch<React.SetStateAction<FandomData>>;
    }>();

    // const [roomList, setRoomList] = useState<FandomData>([]);
    const [room, setRoom] = useState<number>();
    const socket = useContext<Socket | undefined>(SocketContext);


    useEffect(() => {
        
        if (socket) {
            const initRoom = (v: any) => socket.emit("initRoom", v);
            const setData = (v: any) => setRoomList(v);

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
                <S.Logo src={logo} />
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
