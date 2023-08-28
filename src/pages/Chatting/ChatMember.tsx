import React from 'react';
import BackButton from '../../components/Chatting/BackButton';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';
import iconSearch from '../../assets/images/svg/ic-search.svg';
import * as S from './styles/ChatMember.style';



type MemberProps = {
    isBan: boolean,
}


type userInfoProps = {
    id: number,
    fandomId: number,
    
}

const ChatMember = () => {

    return (
        <>
            <S.ChatHeader>
                <BackButton />
                <S.ChatTitle>채팅방 멤버 관리</S.ChatTitle>  
                <S.IconButton src={iconSearch} />
            </S.ChatHeader>
            <S.MemberWindow>
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={false} />
                <ChatUserInfo $ban={true} />
                <ChatUserInfo $ban={true} />
            </S.MemberWindow>
        </>
    )
}


export default ChatMember;