import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import iconArrowLeft from '../../assets/images/svg/ic-arrow-left.svg';



export const BackButton = () => {
    const BackButtonIcon = styled.button`
        width: 24px;
        height: 24px;
    
        border: 0;
        margin-right: 14px;
        background: url(${iconArrowLeft}) center;
        cursor: pointer;
    `;

    const navigate = useNavigate();
    const onBackButton = () => navigate(-1);

    return (
        <BackButtonIcon onClick={onBackButton} />
    )
}

type IconButtonProps = {
    iconName: string,
}

const IconButton = ({iconName}: IconButtonProps) => {
    
    const IconButton = styled.button`
        width: 24px;
        height: 24px;
    
        border: 0;
        padding-left: 12px;
        padding-right: 12px;
        background: url(${iconName}) center border-box;
        cursor: pointer;
    `;

    return <IconButton />

}

export default IconButton;