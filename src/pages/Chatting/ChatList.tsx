import React, { Component, ComponentRef, SVGProps } from 'react';
import styled from 'styled-components';
import { ChatFandom } from './ChatFandom';

// const svgUrl = '../../assets/images/svg/';

import { ReactComponent as logo } from '../../assets/images/svg/logo.svg';
import { ReactComponent as IconHome } from '../../assets/images/svg/ic-home-active.svg';
import { ReactComponent as IconFeed } from '../../assets/images/svg/ic-feed-inactive.svg';
import { ReactComponent as IconItem } from '../../assets/images/svg/ic-item-inactive.svg';
import { ReactComponent as IconChat } from '../../assets/images/svg/ic-chat-inactive.svg';
import { ReactComponent as IconMypage  } from '../../assets/images/svg/ic-mypage-inactive.svg';

export const ChatWindow = styled.div`
    // border: 1px solid black;

    width: 390px;
    height: 844px;

    box-sizing: border-box;
`;

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


const Footer = styled.div`
    // background-color: pink;

    width: 390px;
    height: 83px;

    border-top: 1px solid #A5A8B8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
`;

const FooterIconWrapper = styled.div`
    // background: skyblue;

    width: 100%;

    margin-top: 7px;
    padding-left: 15px;
    padding-right: 15px;

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

type Props = {
    text: string,
    Icon: React.ReactNode,
    active: boolean,
}


const IconWithText = ({ text, Icon, active } : Props) => {
    const IconGroup = styled.div`
        // background-color: green;

        width: 50px;
        height: 40px;

        display: flex;
        flex-direction: column;
        align-items: center;

        cursor: pointer;

        & + & {
            margin-left: 30.25px;
        }
    `;

    const IconText = styled.p`
        margin: 0;
        margin-top: 1px;

        font-size: 10px;
        color: ${active ? '#6138F8' : '#A5A8B8'}
    `;

    return (
        <IconGroup>
            {Icon}
            <IconText>{text}</IconText>
        </IconGroup>
    )
}

const ChatContainer = () => {
    return (
        <ChatWindow>
            <ChatHeader>
                <Logo />
            </ChatHeader>
            <ChatListWindow>
                <ChatFandom />
                <ChatFandom />
            </ChatListWindow>
            <Footer>
                <FooterIconWrapper>
                    <IconWithText text="홈" Icon={<IconHome />} active={true} />
                    <IconWithText text="피드" Icon={<IconFeed />} active={false} />
                    <IconWithText text="손민수템" Icon={<IconItem />} active={false} />
                    <IconWithText text="채팅방" Icon={<IconChat />} active={false} />
                    <IconWithText text="마이페이지" Icon={<IconMypage />} active={false} />
                </FooterIconWrapper>
            </Footer>
        </ChatWindow>
    )
}


export default ChatContainer;
