import React, { useState } from 'react';
import * as S from './style/ChatBubble.style';
import detailDate from '../../utils/time';


export type ChatProps = {
    // id: number;
    // fandomId: number;
    // nickName: string;
    // image: string;
    // profileImage?: string;
    author: {
        id: number;
        nickName: string;
        image: string;
    }
    content: string;
    readCount?: number;
    createdAt: string;
    $visibleProfile?: boolean;   
    $visibleTime?: boolean;
}

const dateTime = (date: string) => {
    // return date.slice(11, 16);
    return date;
}


export const MyChat = ({author, content, readCount, createdAt, $visibleTime}: ChatProps) => {
    
    return (
        <S.MyChatWrapper>
            <S.MyChatBubble>{content}</S.MyChatBubble>
            <S.ChatSubWrapper className={$visibleTime ? 'visible' : ''}>
                <S.ChatTime>{dateTime(createdAt)}</S.ChatTime>
                <S.ChatReadCount>{readCount}</S.ChatReadCount>
            </S.ChatSubWrapper>
        </S.MyChatWrapper>
    )
}

export const OtherChat = ({author, content, readCount, createdAt, $visibleProfile, $visibleTime}: ChatProps) => {

    return (
        <S.ChatBubbleWrapper>
            <S.ChatProfileImage src={author?.image} className={$visibleProfile ? 'visible' : ''} />
            <S.ChatBubbleWrapped>
                <S.ChatProfileName className={$visibleProfile ? 'visible' : ''}>{author?.nickName}</S.ChatProfileName>
                <S.ChatBubble>{content}</S.ChatBubble>
                <S.ChatSubWrapper className={$visibleTime ? 'visible' : ''}>
                    <S.ChatTime>{dateTime(createdAt)}</S.ChatTime>
                    <S.ChatReadCount>{readCount}</S.ChatReadCount>
                </S.ChatSubWrapper>
            </S.ChatBubbleWrapped>
        </S.ChatBubbleWrapper>
    )
}