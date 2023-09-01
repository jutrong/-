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

export const LinkItem = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    
    &:visited {
        color: blue;
    }
`

export const ChatTitle = styled.p`
    width: 100%;
    height: 100%;

    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;

`;

export const ChatRoomWindow = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 70px 16px 98px;
    background-image: url(${flowerBg});
    backbround-size: contain;
`;

export const IconButton = styled.img`
    width: 24px;
    height: 24px;

    border: 0;
    cursor: pointer;
`;

