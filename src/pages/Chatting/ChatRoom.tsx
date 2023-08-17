import React from 'react';
import styled from 'styled-components';
import * as ChatList from './ChatList';
import * as ChatBubble from './ChatBubble';
import { ReactComponent as IconArrowLeft } from '../../assets/images/svg/ic-arrow-left.svg';
import { ReactComponent as IconMember } from "../../assets/images/svg/ic-member.svg";
import { ReactComponent as IconImage } from "../../assets/images/svg/ic-image.svg";
import { ReactComponent as IconCamera } from "../../assets/images/svg/ic-camera.svg";
import { ReactComponent as IconVideo } from "../../assets/images/svg/ic-video.svg";
import { ReactComponent as IconSend } from '../../assets/images/svg/ic-send.svg';


const ChatHeaderWrapper = styled.div`
    // background-color: blue;

    width: 390px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

const ChatBack = styled(IconArrowLeft)`
    margin-right: 14px;

    cursor: pointer;
`;

const ChatTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 700;
`;

const ChatMember = styled(IconMember)`
    cursor: pointer;
`;


const ChatWrapper = styled.div`
    // background-color: pink;    

    width: 100%;
    min-height: calc(100% - 148px);
    padding-left: 16px;
    padding-right: 16px;
    
    box-sizing: border-box;
`;


const ChatBar = styled.div`
    width: 390px;
    height: 98px;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 0 -5px 5px -5px lightgray;
    box-sizing: border-box;
    display: flex;
`;

const IconWrapper = styled.div`
    padding-top: 24px;
    padding-left: 16px;
`;

const ChatIconImage = styled(IconImage)`
    cursor: pointer;
    margin-right: 16px;
`;

const ChatIconCamera = styled(IconCamera)`
    cursor: pointer;
    margin-right: 16px;
`;

const ChatIconVideo = styled(IconVideo)`
    cursor: pointer;
    margin-right: 16px;
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

const ChatInputButton = styled(IconSend)`
    width: 40px;
    height: 40px;
    margin-left: 6px;
    margin-top: 16px;
    padding: 8px;

    border: 0;
    border-radius: 10px;
    background-color: #208DF1;
    box-sizing: border-box;
    cursor: pointer;
`;


const ChatRoom = () => {
    return (
        <div>
            <ChatList.ChatWindow>
                <ChatHeaderWrapper>
                    <ChatBack />
                    <ChatTitle>A.R.M.Y</ChatTitle>
                    <ChatMember />
                </ChatHeaderWrapper>
                <ChatWrapper>
                    <ChatBubble.OtherChat />
                    <ChatBubble.MyChat />
                </ChatWrapper>
                <ChatBar>
                    <IconWrapper>
                        <ChatIconImage />
                        <ChatIconCamera />
                        <ChatIconVideo /> 
                    </IconWrapper>
                    <ChatInput placeholder="채팅을 입력해 주세요" />
                    <ChatInputButton />
                </ChatBar>
            </ChatList.ChatWindow>
        </div>
    )
}

export default ChatRoom;