import React from 'react';
import styled from 'styled-components';

import { HeaderWrapper } from './ChatRoom';
import IconButton, { BackButton } from '../../components/Chatting/IconButton';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';

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
    height: calc(100% - 50px);

    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
`;


const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

type MemberProps = {
    isBan: boolean,
}

const UserInfoWithButton = ({isBan}: MemberProps) => {


    const BanButton = styled.button`
        width: 103px;
        height: 30px;

        background: ${isBan ? '#FC1E6E' : '#EBEEF2'} ;
        color: ${isBan ? '#FFFFFF' : '#83839F'};
        font-weight: bold;
        font-size: 14px;
    
        border: 0;
        border-radius: 4px;
        // box-sizing: border-box;
        display: inline;
        
        cursor: pointer;
    `;

    const chatBanText: string = isBan ? '채팅정지 취소' : '채팅정지';


    return (
        <UserInfoWrapper>
            <ChatUserInfo />
            <BanButton>{chatBanText}</BanButton>
        </UserInfoWrapper>
    )
}


type userInfoProps = {
    id: number,
    fandomId: number,
    
}

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
                <UserInfoWithButton isBan={false} />
                <UserInfoWithButton isBan={false} />
                <UserInfoWithButton isBan={false} />
                <UserInfoWithButton isBan={false} />
                <UserInfoWithButton isBan={true} />
                <UserInfoWithButton isBan={true} />
            </MemberWindow>
        </>
    )
}


export default ChatMember;