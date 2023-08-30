import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const ChatWindow = styled.div`
    width: 100%;
    height: 844px;
`;


const Chatting = () => {

    return (
        <ChatWindow>
            <Outlet />
        </ChatWindow>

    )
}

export default Chatting;