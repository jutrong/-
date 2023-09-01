import React, { useState } from 'react';
import * as S from './style/ChatImageViewer.style';
import iconX from '../../assets/images/svg/ic-x.svg';
import { ChatImageType } from '../../types/chattingType';

import SwiperCore from 'swiper';
import { Keyboard, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';


const ChatImageViewer = ({imageList, setIsViewerOpen, startSlideIndex}: ChatImageType) => {

    // 사용할 모듈 등록
    SwiperCore.use([Keyboard, FreeMode, Navigation, Thumbs]);

    const [imageSwiper, setImageSwiper] = useState<SwiperCore>();
    const [imageIndex, setImageIndex] = useState<number|undefined>(1);
    const totalIndex: number = imageList.length;

    const SwiperParams = {
        onSlideChange: (swiperCore: SwiperCore) => setImageIndex(swiperCore.activeIndex + 1),
        spaceBetween: 10,
        initialSlide: startSlideIndex,
        navigation: true,
        keyboard: {enabled: true},
        thumbs: {swiper: imageSwiper},
        modules: [Keyboard, Thumbs],
        className: 'mySwiper2'
    };

    const SwiperFooterParams = {
        onSwiper: setImageSwiper,
        spaceBetween: 4,
        slidesPerView: 9,
        freeMode: true,
        watchSlidesProgress: true,
        keyboard: {enabled: true},
        modules: [Keyboard, Thumbs],
        className: 'mySwiper',
    };

    return (
        <S.ImageViewerContainer>
            <S.ImageViewerHeader>
                <S.ImageButton 
                    src={iconX} 
                    onClick={() => {
                        document.body.style.overflow = "unset";
                        return setIsViewerOpen && setIsViewerOpen(false)
                    }} 
                />
                <S.HeaderText>뷰어</S.HeaderText>
            </S.ImageViewerHeader>
            <S.SwiperWrapper>
                <Swiper {...SwiperParams}>
                    {imageList.map((image, index) => (
                        <S.SwiperSlideWrapper>
                            <SwiperSlide key={index}>
                                <S.ImageView src={image} />
                            </SwiperSlide>
                        </S.SwiperSlideWrapper>
                    ))}
                </Swiper>
            </S.SwiperWrapper>
            <S.ImageViewerThumbs>
                <S.ImageThumbsList>
                    <S.SwiperWrapper>
                        <Swiper {...SwiperFooterParams}>
                            {imageList.map((image, index) => (
                                <S.SwiperSlideWrapper>
                                    <SwiperSlide key={index}>
                                        <S.ImageThumbsItem src={image} />
                                    </SwiperSlide>
                                </S.SwiperSlideWrapper>
                            ))}
                        </Swiper>
                    </S.SwiperWrapper>
                </S.ImageThumbsList>
                <S.ImageIndex>{totalIndex}<span>장 중</span> {imageIndex}<span>번</span></S.ImageIndex>
            </S.ImageViewerThumbs>
        </S.ImageViewerContainer>
    )
}

export default ChatImageViewer;