import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import iconHome from '../assets/images/svg/ic-home-active.svg';
import iconHomeInActive from '../assets/images/svg/ic-home-inactive.svg';
import iconFeed from '../assets/images/svg/ic-feed-active.svg';
import iconFeedInActive from '../assets/images/svg/ic-feed-inactive.svg';
import iconItem from '../assets/images/svg/ic-item-active.svg';
import iconItemInActive from '../assets/images/svg/ic-item-inactive.svg';
import iconChat from '../assets/images/svg/ic-chat-active.svg';
import iconChatInActive from '../assets/images/svg/ic-chat-inactive.svg';
import iconMypage from '../assets/images/svg/ic-mypage-active.svg'
import iconMypageInActive from '../assets/images/svg/ic-mypage-inactive.svg';



const FooterNavBarWrapper = styled.div`
    width: 390px;
    height: 83px;

    border-top: 1px solid #A5A8B8;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-sizing: border-box;
`;

const TabIconWrapper = styled.div`
    width: 100%;

    margin-top: 7px;
    padding-left: 15px;
    padding-right: 15px;

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`

type IconWithTextProps = {
    text: string,
    pathname: string,
}


const IconWithText = ({text, pathname}: IconWithTextProps) => {
    let active = false;
    let iconUrl;

    switch(text) {
        case '홈':
            if (pathname === "/") {
                iconUrl = iconHome;
                active = true;
            } else {
                iconUrl = iconHomeInActive;
                active = false;
            }
        break;

        case '피드':
            if (pathname === "/feed") {
                iconUrl = iconFeed;
                active = true;
            } else {
                iconUrl = iconFeedInActive;
                active = false;
            }
        break;

        case '손민수템':
            if (pathname === "/minsooItem") {
                iconUrl = iconItem;
                active = true;
            } else {
                iconUrl = iconItemInActive;
                active = false;
            }
        break;

        case '채팅방':
            if (pathname === "/chatting") {
                iconUrl = iconChat;
                active = true;
            } else {
                iconUrl = iconChatInActive;
                active = false;
            }
        break;

        case '마이페이지':
            if (pathname === "/myPage") {
                iconUrl = iconMypage;
                active = true;
            } else {
                iconUrl = iconMypageInActive;
                active = false;
            }
        break;
    }

    console.log(iconUrl);

    const IconGroup = styled.div`
        width: 50px;
        height: 40px;

        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const TabIcon = styled.div`
        width: 24px;
        height: 24px;
        background-image: url(${iconUrl});

        
    `;

    const IconText = styled.p`
        margin: 0;
        margin-top: 1px;

        font-size: 10px;

        color: ${active ? '#6138F8' : '#A5A8B8'}
    `;

    return (
        <IconGroup >
            <TabIcon />
            <IconText>{text}</IconText>
        </IconGroup>
    )
}


const FooterNavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;    

    return (
        <FooterNavBarWrapper>
                <TabIconWrapper>
                    <LinkItem to="/">
                        <IconWithText text="홈" pathname={pathname} />
                    </LinkItem>
                    <LinkItem to="/feed">
                        <IconWithText text="피드" pathname={pathname} />
                    </LinkItem>
                    <LinkItem to="/minsooItem">
                        <IconWithText text="손민수템" pathname={pathname} />
                    </LinkItem>
                    <LinkItem to="/chatting">
                        <IconWithText text="채팅방" pathname={pathname} />
                    </LinkItem>
                    <LinkItem to="/myPage">
                        <IconWithText text="마이페이지" pathname={pathname} />
                    </LinkItem>
                </TabIconWrapper>
            </FooterNavBarWrapper>
    )
}

export default FooterNavBar;