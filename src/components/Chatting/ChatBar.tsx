import React from 'react';
import styled from 'styled-components';
import iconSend from '../../assets/images/svg/ic-send.svg';
import { ReactComponent as IconImage } from "../../assets/images/svg/ic-image.svg";
import { ReactComponent as IconCamera } from "../../assets/images/svg/ic-camera.svg";

const ChatBaWrapper = styled.div`
    width: 100%;
    height: 98px;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-left: 16px;
    padding-right: 16px;


    box-shadow: 0 -5px 5px -5px lightgray;
    box-sizing: border-box;
    display: flex;
`;

const IconWrapper = styled.div`
    padding-top: 24px;

    display: flex;
`;

const ChatIconImage = styled(IconImage)`
    cursor: pointer;
    margin-right: 16px;
`;

const ChatIconCamera = styled(IconCamera)`
    cursor: pointer;
    margin-right: 16px;
`;

const ChatInputWrapper = styled.div`
    width: 100%;
    margin-top: 16px;

    display: flex;

`;

const ChatInput = styled.input`
    min-width: calc(100% - 50px);
    height: 40px;
    
    margin-left: 3px;
    margin-right: 6px;
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
    padding: 0;

    border: 0;
    border-radius: 10px;
    background: #208DF1 url(${iconSend}) no-repeat center;
    cursor: pointer;
`;

const ChatBar = () => {

    return (
        <ChatBaWrapper>
            <IconWrapper>
                <ChatIconImage />
                <ChatIconCamera />
            </IconWrapper>
            <ChatInputWrapper>
                <ChatInput placeholder="채팅을 입력해 주세요" />
                <ChatInputButton />
            </ChatInputWrapper>
        </ChatBaWrapper>
    )
}

export default ChatBar;