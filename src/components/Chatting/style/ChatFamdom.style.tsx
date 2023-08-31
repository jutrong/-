import styled from 'styled-components';



export const ChatFandomWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 70px;
`;

export const FandomImage = styled.img`
    width: 56px;
    height: 56px;
    
    margin-right: 15px;
    border-radius: 70%;
    border: 1px solid #F6F6F6;
`;

export const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
`;

export const FandomWrapper = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 9px;
`;

export const FandomTitle = styled.p`
    margin-right: 10px;

    font-size: 16px;
    font-weight: bold;
`;

export const MemberIcon = styled.img`
    width: 16px;
    height: 16px;
    
    margin-right: 2px;
`;

export const FandomMember = styled.p`
    font-size: 13px;
    vertical-align: bottom;
`;

export const FandomActive = styled.p`
    font-size: 13px;
    & span {
        margin: 0 4px;
        color: #EBEEF2;
        font-size: 2px;
    }
`;