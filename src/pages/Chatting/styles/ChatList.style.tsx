import styled from 'styled-components';
import { Link } from 'react-router-dom';
import flowerBg from '../../../assets/images/png/flowerbg.png';


export const ChatHeader = styled.div`
    width: 100%;
    max-width: 450px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    background: url(${flowerBg});
    
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 99;
`;

export const Logo = styled.img`
`;

export const ChatListWindow = styled.div`
    width: 100%;
    height: 100%;

    padding: 56px 16px 80px;
    background: url(${flowerBg});
`;

export const LinkItem = styled(Link)`
    cursor: pointer;
    color: black;

    &:visited {
        color: black;
    }
`;