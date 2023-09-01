import styled from 'styled-components';



export const ChatHeader = styled.div`
    width: 100%;
    max-width: 450px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 99;
`;

export const ChatTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
`;


export const MemberWindow = styled.div`
    width: 100%;
    height: 100%;
    padding: 82px 16px 0;
    background: #fff;
`;

export const IconButton = styled.img`
    width: 24px;
    height: 24px;

    cursor: pointer;
`;