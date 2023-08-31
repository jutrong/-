import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Fandom } from '../../types/chattingType';

export const ChatWindow = styled.div`
    width: 100%;
    height: 100vh;
    font-family: Pretendard-Medium;
`;


type FandomData = Fandom[];

const Chatting = () => {
    const [roomList, setRoomList] = useState<FandomData>([]);
    
    const props = { roomList, setRoomList };
    
    return (
        <ChatWindow>
            <Outlet context={props} />
        </ChatWindow>
    );
};

export default Chatting;