import React, { useEffect, useState } from 'react';
import * as S from './style/ChatGridImage.style';
import { Chat } from '../../types/chattingType';
import ChatImageViewer from './ChatImageViewer';



const ChatGridImage = ({imageList}: Chat) => {

    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const $imageCount = imageList.length;
    const $imgUrl = '';
    const $isMe: boolean = false;

    const openViewerHandler = () => {
        setIsViewerOpen(true);
    }

    return (
        <S.GridImageWrapper $isMe={$isMe}>
            <S.GridImageContainer $imageCount={$imageCount} >
                {imageList.map((image, index) => (
                    <S.GridImage 
                        key={index}
                        src={image} 
                        $imageCount={$imageCount} 
                        onClick={openViewerHandler} 
                    />
                ))}
                {/* <S.GridImage 
                    src={require('../../assets/images/png/mini.png')}
                    // src={$imgUrl}
                    $imageCount={$imageCount} 
                />
                <S.GridImage 
                    src={require('../../assets/images/png/mini.png')}
                    // src={$imgUrl}
                    $imageCount={$imageCount} 
                />
                <S.GridImage 
                    src={require('../../assets/images/png/mini.png')}
                    // src={$imgUrl}
                    $imageCount={$imageCount} 
                /> */}
                {$imageCount > 3 && 
                    <S.ModalImage>
                        <p>+{($imageCount > 3 && $imageCount - 3)}개</p>
                    </S.ModalImage>
                }
                {isViewerOpen ?
                    <ChatImageViewer imageList={imageList} setIsViewerOpen={setIsViewerOpen} />
                    : null
                }
            </S.GridImageContainer>
        </S.GridImageWrapper>
    )
};

export default ChatGridImage;