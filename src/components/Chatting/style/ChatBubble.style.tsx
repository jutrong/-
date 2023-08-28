import styled from 'styled-components';



export const ChatBubbleWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;
`;

export const ChatProfileImage = styled.img`
    background-color: gray;

    width: 40px;
    height: 40px;
    margin-right: 7px;
    border-radius: 70%;
`;

export const ChatBubbleWrapped = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChatProfileName = styled.p`
    margin-bottom: 6px;

    font-size: 14px;
    font-weight: bold;
`;

export const ChatBubble = styled.p`
    max-width: 272px;
    margin-bottom: 8px;
    padding: 16px;

    border-radius: 10px;
    background-color: #CFE4FF;
    font-size: 14px;
`;

export const ChatSubWrapper = styled.div`
    display: flex;
`;

export const ChatTime = styled.p`
    margin-right: 7px;

    font-size: 13px;
    color: #1D1B20;
    opacity: 0.5;
`;

export const ChatReadCount = styled.p`
    font-size: 13px;
    color: #09EE65;
`;



export const MyChatWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const MyChatBubble = styled.p`
    background-color: #09EE65;

    max-width: 272px;
    margin-bottom: 8px;
    padding: 16px;

    border-radius: 10px;
    font-size: 14px;
`;