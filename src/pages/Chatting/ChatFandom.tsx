import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconUser } from '../../assets/images/svg/ic_user.svg';


const ChatFandomWrapper = styled.div`
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

type fandomProps = {
    id: number,
    title: string,
    memberCount: number,
    image: string,
}

export const ChatFandom = () => {
    // const { id, title, memberCount, image } = fandomInfo;
    const title = "꾹이의 모든 것";
    const memberCount = 22;
    const time = "";

    return (
        <ChatFandomWrapper>
            <FandomImage />
            <ChatInfo>
                <FandomWrapper>
                    <FandomTitle>{title}</FandomTitle>
                    <MemberIcon />
                    <FandomMember>{memberCount}</FandomMember>       
                </FandomWrapper>
                <FandomActive>채팅활동 10분전</FandomActive>
            </ChatInfo>
        </ChatFandomWrapper>
    )
}