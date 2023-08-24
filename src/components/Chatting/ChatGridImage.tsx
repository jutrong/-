import React from 'react';
import * as S from './style/ChatGridImage.style';



const ChatGridImage = () => {

    const $imageCount = 4;
    const $imgUrl = '';
    const isMe: boolean = false;

    return (
        <S.GridImageWrapper isMe={isMe}>
            <S.GridImageContainer $imageCount={$imageCount} >
                {/* <GridImage $imageCount={$imageCount} />
                <GridImage $imageCount={$imageCount} /> */}
                <S.GridImage 
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
                />
                {$imageCount > 3 && 
                    <S.ModalImage>
                        <p>+{($imageCount > 3 && $imageCount - 3)}개</p>
                    </S.ModalImage>
                }
            </S.GridImageContainer>
        </S.GridImageWrapper>
    )
};

export default ChatGridImage;