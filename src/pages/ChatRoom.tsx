import React from 'react';
import styled from 'styled-components';
import * as ChatList from './ChatList';
import { ReactComponent as IconArrowLeft } from '../assets/images/svg/ic-arrow-left.svg';
import { ReactComponent as IconMember } from "../assets/images/svg/ic-member.svg";
import { ReactComponent as IconImage } from "../assets/images/svg/ic-image.svg";
import { ReactComponent as IconCamera } from "../assets/images/svg/ic-camera.svg";
import { ReactComponent as IconVideo } from "../assets/images/svg/ic-video.svg";


const ChatHeaderWrapper = styled.div`
    background-color: white;

    display: flex;
    align-items: center;
`;

const ChatBack = styled(IconArrowLeft)`
    margin-right: 14px;
`;

const ChatMember = styled(IconMember)`
`;


const ChatWindow = styled.div`
    background-color: pink;    

    width: 100%;
    min-height: calc(100% - 148px);

    box-sizing: border-box;
`;

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

const ChatBar = styled.div`
    background-color: red;

    width: 390px;
    height: 98px;

    box-sizing: border-box;
    display: flex;
`;

const IconWrapper = styled.div`
    background-color: blue;

    padding-top: 24px;
    padding-left: 16px;
`;

const ChatIconImage = styled(IconImage)`

`;

const ChatIconCamera = styled(IconCamera)`
`;

const ChatIconVideo = styled(IconVideo)`
`;

const ChatInput = styled.input`
    width: 189px;
    height: 40px;
    
    margin-left: 3px;
    margin-top: 16px;
    padding-left: 13px;
    padding-right: 13px;
    
    border: none;
    border-radius:10px;
    background-color: #EBEEF2;
    box-sizing: border-box;

    color: #6C7080;
    font-size: 14px;
`;

const ChatInputButton = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 6px;
    margin-top: 16px;

    background-color: #208DF1;
    box-sizing: border-box;
`;

// 상대방 말풍선
const OtherChat = () => {
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

// 내 말풍선
const MyChat = () => {
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

// 채팅방 화면
const ChatRoom = () => {
    return (
        <div>
            <ChatList.ChatWrapper>
                <ChatHeaderWrapper>
                    <ChatBack />
                    <ChatList.ChatHeader>A.R.M.Y</ChatList.ChatHeader>
                    <ChatMember />
                </ChatHeaderWrapper>
                <ChatWindow>
                    <OtherChat />
                    <MyChat />
                </ChatWindow>
            </ChatList.ChatWrapper>
            <ChatBar>
                <IconWrapper>
                    <ChatIconImage />
                    <ChatIconCamera />
                    <ChatIconVideo /> 
                </IconWrapper>
                <ChatInput placeholder="채팅을 입력해 주세요" />
                <ChatInputButton />
            </ChatBar>
        </div>
    )
}

export default ChatRoom;