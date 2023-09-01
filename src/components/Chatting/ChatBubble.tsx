import React from 'react';
import * as S from './style/ChatBubble.style';
import { ChatType } from '../../types/chattingType';
import { useNavigate } from 'react-router';
import ChatGridImage from './ChatGridImage';



export const MyChat = ({author, content, images, readCount, createdAt, $visibleTime}: ChatType) => {
    
    return (
        <S.MyChatWrapper>
            { (content !== undefined && content !== "-") ?
                <S.MyChatBubble>{content}</S.MyChatBubble>
                : null
            }
            { images?.length ?
                <ChatGridImage imageList={images} />
                : null
            }
            <S.ChatSubWrapper className={$visibleTime ? 'visible' : ''}>
                <S.ChatTime>{createdAt}</S.ChatTime>
                <S.ChatReadCount>{readCount}</S.ChatReadCount>
            </S.ChatSubWrapper>
        </S.MyChatWrapper>
    )
}

export const OtherChat = ({author, content, images, readCount, createdAt, $visibleProfile, $visibleTime}: ChatType) => {
    
    const navigate = useNavigate();
    const clickMyPageHandler = () => {
        navigate(`/mypage/${author.id}`);
    }

    return (
        <S.ChatBubbleWrapper>
            <S.ChatProfileImage 
                src={author?.image} 
                className={$visibleProfile ? 'visible' : ''} 
                onClick={clickMyPageHandler}
            />
            <S.ChatBubbleWrapped>
                <S.ChatProfileName className={$visibleProfile ? 'visible' : ''}>{author?.nickName}</S.ChatProfileName>
                { (content !== undefined && content !== "-") ?
                    <S.ChatBubble>{content}</S.ChatBubble>
                    : null
                }
                { images?.length ? 
                    <ChatGridImage imageList={images} />
                    : null
                }
                <S.ChatSubWrapper className={$visibleTime ? 'visible' : ''}>
                    <S.ChatTime>{createdAt}</S.ChatTime>
                    <S.ChatReadCount>{readCount}</S.ChatReadCount>
                </S.ChatSubWrapper>
            </S.ChatBubbleWrapped>
        </S.ChatBubbleWrapper>
    )
}