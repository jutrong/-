import React, { useState } from 'react';
import * as S from './style/ChatUserInfo.style';
    


type MemberProps = {
    $ban: boolean;
    userName: string;
}
    
const ChatUserInfo = ({$ban, userName}:MemberProps) => {

    const [banToggle, setBanToggle] = useState($ban);
    const chatBanText: string = banToggle ? '채팅정지 취소' : '채팅정지';

    const banHandler = () => {
        banToggle ? setBanToggle(false) : setBanToggle(true);
    }

    return (
        <S.UserInfoWrapper>
            <S.UserWrapper>
                <S.UserImage />
                <S.UserName>{userName}</S.UserName>
            </S.UserWrapper>
            <S.BanButton $ban={banToggle} onClick={banHandler}>{chatBanText}</S.BanButton>
        </S.UserInfoWrapper>
    )
}

export default ChatUserInfo;