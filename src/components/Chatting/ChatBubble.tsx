import React from 'react';
import * as S from './style/ChatBubble.style';


export type ChatProps = {
    id: number,
    fandomId: number,
    author: string,
    content: string,
    profileImage?: string,
    readCount: number,
    createAt: Date,
}


export const MyChat = ({id, fandomId, author, content, readCount, createAt}: ChatProps) => {
    return (
        <S.MyChatWrapper>
            <S.MyChatBubble>{content}</S.MyChatBubble>
            <S.ChatSubWrapper>
                <S.ChatTime>10분전</S.ChatTime>
                <S.ChatReadCount>{readCount}</S.ChatReadCount>
            </S.ChatSubWrapper>
        </S.MyChatWrapper>
    )
}

export const OtherChat = ({id, fandomId, author, content, profileImage, readCount, createAt}: ChatProps) => {
    return (
        <S.ChatBubbleWrapper>
            <S.ChatProfileImage />
            <S.ChatBubbleWrapped>
                <S.ChatProfileName>{author}</S.ChatProfileName>
                <S.ChatBubble>{content}</S.ChatBubble>
                <S.ChatSubWrapper>
                    <S.ChatTime>10분전</S.ChatTime>
                    <S.ChatReadCount>{readCount}</S.ChatReadCount>
                </S.ChatSubWrapper>
            </S.ChatBubbleWrapped>
        </S.ChatBubbleWrapper>
    )
}