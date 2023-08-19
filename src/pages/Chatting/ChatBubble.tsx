import React from 'react';
import styled from 'styled-components';


const ChatBubbleWrapper = styled.div`
    // background-color: white;

    display: flex;

    margin-bottom: 30px;
`;

const ChatProfileImage = styled.img`
    background-color: gray;

    width: 40px;
    height: 40px;
    border-radius: 70%;

    margin-right: 7px;
`;

const ChatBubbleWrapped = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChatProfileName = styled.p`
    margin: 0;
    margin-bottom: 6px;

    font-size: 14px;
    font-weight: bold;
    
`;

const ChatBubble = styled.p`
    max-width: 272px;
    margin: 0;
    margin-bottom: 8px;
    padding: 16px;
    border-radius: 10px;
    box-sizing: border-box;

    background-color: #CFE4FF;
    font-size: 14px;
`;

const ChatSubWrapper = styled.div`
    display: flex;
`;
const ChatTime = styled.p`
    margin: 0;
    margin-right: 7px;

    font-size: 13px;
    color: #1D1B20;
    opacity: 0.5;
`;

const ChatReadCount = styled.p`
    margin: 0;
    font-size: 13px;
    color: #09EE65;
`;


const MyChatWrapper = styled.div`
    // background-color: white;
    
    max-width: 272px;
    display: flex;
    flex-direction: column;
    float: right;
`;

const MyChatBubble = styled.p`
    background-color: #09EE65;

    margin: 0;
    margin-bottom: 8px;
    padding: 16px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
`;

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
    console.log();
    return (
        <MyChatWrapper>
            <MyChatBubble>{content}</MyChatBubble>
            <ChatSubWrapper>
                <ChatTime>10분전</ChatTime>
                <ChatReadCount>{readCount}</ChatReadCount>
            </ChatSubWrapper>
        </MyChatWrapper>
    )
}

export const OtherChat = ({id, fandomId, author, content, profileImage, readCount, createAt}: ChatProps) => {
    return (
        <ChatBubbleWrapper>
            <ChatProfileImage />
            <ChatBubbleWrapped>
                <ChatProfileName>{author}</ChatProfileName>
                <ChatBubble>{content}</ChatBubble>
                <ChatSubWrapper>
                    <ChatTime>10분전</ChatTime>
                    <ChatReadCount>{readCount}</ChatReadCount>
                </ChatSubWrapper>
            </ChatBubbleWrapped>
        </ChatBubbleWrapper>
    )
}