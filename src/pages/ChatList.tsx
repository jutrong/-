import React from 'react';
import styled from 'styled-components';
import { ReactComponent as logo } from '../assets/images/svg/logo.svg';
import { ReactComponent as IconUser } from '../assets/images/svg/ic_user.svg';

export const ChatWrapper = styled.div`
    border: 1px solid black;

    width: 390px;
    height: 844px;
    padding-left: 16px;
    padding-right: 16px;

    box-sizing: border-box;
`;

export const ChatHeader = styled.div`
    // background-color: gray;

    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 390px;
    height: 50px;
    margin-bottom: 6px;

    font-size: 20px;
    font-weight: 700;
`;

const Logo = styled(logo)`
`;

const ChatFandomWrapper = styled.div`
    // background-color: pink;
    
    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 390px;
    height: 70px;
`;

const FandomImage = styled.img`
    background-color: gray;

    width: 56px;
    height: 56px;
    
    margin-right: 15px;
    border-radius: 70%;
`;

const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
`;

const FandomWrapper = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 9px;
`;

const FandomTitle = styled.p`
    margin: 0;
    margin-right: 10px;

    font-size: 16px;
    font-weight: bold;
`;

const MemberIcon = styled(IconUser)`
    width: 16px;
    height: 16px;
    
    margin-right: 2px;
`;

const FandomMember = styled.p`
    margin: 0;

    font-size: 13px;
    vertical-align: bottom;
`;

const FandomActive = styled.p`
    margin: 0;  

    font-size: 13px;
`;

const ChatTab = styled.div`
    background-color: black;

    width: 390px;
    height: 83px;
`;


const ChatContainer = () => {
    return (
        <ChatWrapper>
            <ChatHeader>
                <Logo />
            </ChatHeader>
            <ChatFandomWrapper>
                <FandomImage />
                <ChatInfo>
                    <FandomWrapper>
                        <FandomTitle>A.R.M.Y</FandomTitle>
                        <MemberIcon />
                        <FandomMember>22</FandomMember>       
                    </FandomWrapper>
                    <FandomActive>채팅활동 10분전</FandomActive>
                </ChatInfo>
            </ChatFandomWrapper>
            <ChatFandomWrapper>
                <FandomImage />
                <ChatInfo>
                    <FandomWrapper>
                        <FandomTitle>꾹이의 모든 것</FandomTitle>
                        <MemberIcon />
                        <FandomMember>22</FandomMember>       
                    </FandomWrapper>
                    <FandomActive>채팅활동 10분전</FandomActive>
                </ChatInfo>
            </ChatFandomWrapper>
            {/* <ChatTab></ChatTab> */}
        </ChatWrapper>
    )
}


export default ChatContainer;
