import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const ChatWindow = styled.div`
    border: 1px solid black;

    width: 390px;
    height: 844px;

    box-sizing: border-box;
`;


const Chatting = () => {

    return (
        <ChatWindow>
            <Outlet />
        </ChatWindow>

    )
}

export default Chatting;