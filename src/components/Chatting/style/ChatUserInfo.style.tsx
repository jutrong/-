import styled from 'styled-components';



export const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserWrapper = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const UserImage = styled.div`
    background-color: gray;
    
    width: 56px;
    height: 56px;
    
    margin-right: 15px;
    border-radius: 70%;
`;

export const UserName = styled.p`
    margin: 0;

    font-size: 16px;
    font-weight: bold;
`;

export const BanButton = styled.button<{$ban: boolean}>`
    width: 103px;
    height: 30px;
    
    background: ${props => props.$ban ? '#FC1E6E' : '#EBEEF2'};
    color: ${props => props.$ban ? '#FFFFFF' : '#83839F'};
    font-weight: bold;
    font-size: 14px;
    text-align: center;

    border-radius: 4px;
`;