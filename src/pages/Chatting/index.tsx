import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FandomType } from '../../types/chattingType';

export const ChatWindow = styled.div`
    width: 100%;
    height: 100vh;
    font-family: Pretendard-Medium;
`;



const Chatting = () => {
    const [roomList, setRoomList] = useState<FandomType[]>([]);
    
    const props = { roomList, setRoomList };
    
    return (
        <ChatWindow>
            <Outlet context={props} />
        </ChatWindow>
    );
};

export default Chatting;