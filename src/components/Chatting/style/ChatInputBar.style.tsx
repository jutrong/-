import styled from 'styled-components';
import { IconButton } from './ChatButton.style';
import iconSend from '../../../assets/images/svg/ic-send.svg';



export const ChatBarWrapper = styled.div`
    width: 100%;
    max-width: 450px;
    height: 98px;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 16px;
    box-shadow: 0 -5px 5px -5px lightgray;
    background-color: #fff;


    display: flex;
    position: fixed;
    bottom: 0;
`;

export const IconWrapper = styled.div`
    padding-top: 24px;

    display: flex;
`;

export const ChatIconImage = styled(IconButton)`
    cursor: pointer;
    margin-right: 16px;
`;

export const ChatInputWrapper = styled.div`
    width: 100%;
    margin-top: 16px;

    display: flex;

`;

export const ChatInput = styled.input`
    width: calc(100% - 50px);
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

    &:disabled {
        background-color: #DDDFE1;
    }
`;

export const ChatInputButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;

    border: 0;
    border-radius: 10px;
    background: #208DF1 url(${iconSend}) no-repeat center;
    cursor: pointer;

    &:disabled {
        background-color: #DDDFE1;
        cursor: default;
    }
`;