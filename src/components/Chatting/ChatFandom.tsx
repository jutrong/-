import React from 'react';
import * as S from './style/ChatFamdom.style';
import iconUser from '../../assets/images/svg/ic_user.svg';
import type { FandomType } from '../../types/chattingType';
import detailDate from '../../utils/time';



const ChatFandom = ({id, fandomName, memberLength, image, lastMessage}: FandomType ) => {

    return (
        <S.ChatFandomWrapper>
            <S.FandomImage src={image} />
            <S.ChatInfo>
                <S.FandomWrapper>
                    <S.FandomTitle>{fandomName}</S.FandomTitle>
                    <S.MemberIcon src={iconUser} />
                    <S.FandomMember>{memberLength}</S.FandomMember>       
                </S.FandomWrapper>
                <S.FandomActive>채팅활동<span>•</span>{lastMessage[0] ? detailDate(lastMessage[0].createdAt) : "채팅내역 없음"}</S.FandomActive>
            </S.ChatInfo>
        </S.ChatFandomWrapper>
    )
}

export default ChatFandom;