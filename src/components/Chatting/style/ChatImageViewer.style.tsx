import styled from 'styled-components';
import {Swiper as OriginSwiper, SwiperSlide as OriginSwiperSlide} from 'swiper/react';



export const ImageViewerContainer = styled.div`
    width: 100%;
    max-width: 450px;
    height: 100vh;
    background: black;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ImageViewerHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 16px;

    display: flex;
    align-items: center;
`;

export const HeaderText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const ImageButton = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
`;

export const SwiperWrapper = styled.div`
    width: 100%;

    & .mySwiper {
        width: 100%;
        height: 53px;
        box-sizing: border-box;

        .swiper-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swiper-slide {
            width: 40px;
            opacity: 0.4;
          }

        .swiper-slide-thumb-active {
            opacity: 1;
        }

        img {
            display: block;
            object-fit: cover;
        }
    }

    & .mySwiper2 {
        --swiper-navigation-color: #fff;
        --swiper-pagination-color: #fff;

        .swiper-slide {
            display: flex;
            justify-content: center;
        }

        .swiper-wrapper {
            align-items: center;
        }
    }
`;

export const SwiperSlideWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center;

`;

export const ImageView = styled.img`
    max-width: 100%;
    max-height: 700px;
`;

export const ImageViewerThumbs = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageThumbsList = styled.div`
    width: 100%;
    height: 53px;
    margin-top: 10px;
    margin-bottom: 10px;
    // display: flex;
    padding: 0 16px;
`;

export const ImageThumbsItem = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    cursor: pointer;
`;

export const ImageIndex = styled.p`
    color: #FFFFFF;

    & span {
        opacity: 0.5;
    }
`;