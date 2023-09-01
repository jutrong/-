import React, { useState } from 'react';
import * as S from './style/ChatGridImage.style';
import { ChatImageType } from '../../types/chattingType';
import ChatImageViewer from './ChatImageViewer';



const ChatGridImage = ({imageList}: ChatImageType) => {

    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const $imageCount = imageList.length;
    const imageThumbs: string[] = $imageCount >= 3 ? imageList.slice(0, 3) : imageList;

    return (
        <S.GridImageWrapper>
            <S.GridImageContainer $imageCount={$imageCount} >
                {imageThumbs.map((image, index) => (
                    <S.GridImage 
                        key={index}
                        src={image} 
                        $imageCount={$imageCount} 
                        onClick={() => {
                            document.body.style.overflow = "hidden";
                            setIsViewerOpen(true);
                            setImageIndex(index);
                        }}
                    />
                ))}
                {$imageCount > 3 && 
                    <S.ModalImage 
                        onClick={() => {
                            document.body.style.overflow = "hidden";
                            setIsViewerOpen(true);
                            setImageIndex(2);
                        }}
                    >
                        <p>+{($imageCount > 3 && $imageCount - 3)}개</p>
                    </S.ModalImage>
                }
                {isViewerOpen ?
                    <ChatImageViewer 
                        imageList={imageList} 
                        setIsViewerOpen={setIsViewerOpen} 
                        startSlideIndex={imageIndex}
                    />
                    : null
                }
            </S.GridImageContainer>
        </S.GridImageWrapper>
    )
};

export default ChatGridImage;