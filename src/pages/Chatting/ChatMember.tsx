import React, { useEffect, useState } from 'react';
import BackButton from '../../components/Chatting/BackButton';
import useInput from '../../hooks/useInput';
import ChatUserInfo from '../../components/Chatting/ChatUserInfo';
import iconSearch from '../../assets/images/svg/ic-search.svg';
import * as S from './styles/ChatMember.style';
import ChatSearchMember from '../../components/Chatting/ChatSearchMember';


type MemberProps = {
    isBan: boolean,
}


type userInfoProps = {
    id: number,
    fandomId: number,
    
}

const ChatMember = () => {
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    return (
        <>
            <S.ChatHeader>
                <BackButton />
                <S.ChatTitle>채팅방 멤버 관리</S.ChatTitle> 
                <S.IconButton src={iconSearch} onClick={() => setOpenSearch(true)} />
            </S.ChatHeader>
            <S.MemberWindow>
                <ChatUserInfo $ban={false} userName="아마추어 손민수" />
                <ChatUserInfo $ban={false} userName="아마추어 손민수" />
                <ChatUserInfo $ban={false} userName="아마추어 손민수" />
                <ChatUserInfo $ban={false} userName="아마추어 손민수" />
                <ChatUserInfo $ban={true} userName="아마추어 손민수" />
                <ChatUserInfo $ban={true} userName="아마추어 손민수" />
            </S.MemberWindow>
            {openSearch ? 
                <ChatSearchMember setOpenSearch={setOpenSearch} /> 
                : null}  
        </>
    )
}


export default ChatMember;