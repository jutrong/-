import React from 'react';
import styled from 'styled-components';

import { HeaderWrapper } from './ChatRoom';
import IconButton, { BackButton } from './IconButton';
import UserComponent from './UserComponent';

import iconSearch from '../../assets/images/svg/ic-search.svg';

const ChatTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
`;

const FilterWindow = styled.div`
    height: 32px;

    box-sizing: border-box;
`;

const MemberWindow = styled.div`
    // background: pink;

    height: calc(100% - 50px);

    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
`;

const ChatMember = () => {

    return (
        <>
            <HeaderWrapper>
                <BackButton />
                <ChatTitle>채팅방 멤버 관리</ChatTitle>
                
                <IconButton iconName={iconSearch} />
            </HeaderWrapper>
            <FilterWindow>

            </FilterWindow>
            <MemberWindow>
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
            </MemberWindow>
        </>
    )
}


export default ChatMember;