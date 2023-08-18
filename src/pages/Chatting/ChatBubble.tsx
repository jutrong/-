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

type Props = {
    id: number,
    fandomId: number,
    author: string,
    content: string,
    profileImage: string,
    readCount: number,
    createAt: Date,
}


export const MyChat = () => {
    return (
        <MyChatWrapper>
            <MyChatBubble>ㅎ헷 이게 제 삶의 낙인걸요.. 큐큐 ㅋㅋㅋ</MyChatBubble>
            <ChatSubWrapper>
                <ChatTime>10분전</ChatTime>
                <ChatReadCount>23</ChatReadCount>
            </ChatSubWrapper>
        </MyChatWrapper>
    )
}

export const OtherChat = () => {
    return (
        <ChatBubbleWrapper>
            <ChatProfileImage />
            <ChatBubbleWrapped>
                <ChatProfileName>아마추어 손민수</ChatProfileName>
                <ChatBubble>와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도 감사합니당!!</ChatBubble>
                <ChatSubWrapper>
                    <ChatTime>10분전</ChatTime>
                    <ChatReadCount>23</ChatReadCount>
                </ChatSubWrapper>
            </ChatBubbleWrapped>
        </ChatBubbleWrapper>
    )
}