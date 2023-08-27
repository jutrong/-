import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style/ChatButton.style';
import iconBack from '../../assets/images/svg/ic-arrow-left.svg';


const BackButton = () => {

    const navigate = useNavigate();
    const onBackButton = () => navigate(-1);

    return (
        <S.BackButtonIcon src={iconBack} onClick={onBackButton} />
    )
}

export default BackButton;