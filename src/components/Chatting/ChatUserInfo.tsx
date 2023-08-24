import React from 'react';
import * as S from './style/ChatUserInfo.style';
    


type MemberProps = {
    $ban: boolean;
}
    
const ChatUserInfo = ({$ban}:MemberProps) => {

    const chatBanText: string = $ban ? '채팅정지 취소' : '채팅정지';

    return (
        <S.UserInfoWrapper>
            <S.UserWrapper>
                <S.UserImage />
                <S.UserName>아마추어 손민수</S.UserName>
            </S.UserWrapper>
            <S.BanButton $ban={$ban}>{chatBanText}</S.BanButton>
        </S.UserInfoWrapper>
    )
}

export default ChatUserInfo;