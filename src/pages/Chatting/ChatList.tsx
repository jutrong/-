import React from 'react';
import styled from 'styled-components';
import { ChatFandom } from './ChatFandom';
import { Link } from 'react-router-dom';
import FooterNavBar from '../../components/FooterNavBar';

import { ReactComponent as logo } from '../../assets/images/svg/logo.svg';



export const ChatHeader = styled.div`
    // background-color: gray;

    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 390px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
`;

const Logo = styled(logo)`

`;

const ChatListWindow = styled.div`
    height: calc(100% - 133px);

    margin-top: 6px;
    padding-left: 16px;
    padding-right: 16px;
`;


const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    &:visited {
        color: black;
    }
`


type fandomProps = {
    id: number,
    title: string,
    memberCount: number,
    image: string,
}

const fandomMok: fandomProps = {
    id: 1234,
    title: "꾹이의 모든 것",
    memberCount: 22,
    image: '',
}




const ChatList = () => {

    return (
        <>
            <ChatHeader>
                <Logo />
            </ChatHeader>
            <ChatListWindow>
                <LinkItem to="chatroom">
                    <ChatFandom />
                </LinkItem>
                <LinkItem to="chatroom">
                    <ChatFandom />
                </LinkItem>
                <ChatFandom />
            </ChatListWindow>
            <FooterNavBar />
        </>
      
    )
}


export default ChatList;
