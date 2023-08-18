import React from 'react';
import styled from 'styled-components';

const ChatUserInfo = () => {

    const UserWrapper = styled.div`
        height: 70px;
        display: flex;
        align-items: center;
    `;

    const UserImage = styled.div`
        background-color: gray;

        width: 56px;
        height: 56px;
        
        margin-right: 15px;
        border-radius: 70%;
    `;

    const UserName = styled.p`
        margin: 0;

        font-size: 16px;
        font-weight: bold;
    `;


    return (
        <UserWrapper>
            <UserImage />
            <UserName>아마추어 손민수</UserName>
        </UserWrapper>
    )
}

export default ChatUserInfo;