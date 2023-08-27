import React, { useContext } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "../../assets/images/svg/ic-link.svg";
import closeBtn from "../../assets/images/svg/x.svg";
import * as S from "./style/FeedWriteLink.style";
import clothes from "../../assets/images/png/clothes.png";
import pants from "../../assets/images/png/pants.png";

type FeedWriteProps = {
  $updatePage: boolean;
};

const FeedWriteLink: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  const swiperParams = {
    slidesPerView: 3.5,
    spaceBetween: 12,
  };

  return (
    <S.FeedWriteLinkContainer>
      <S.FeedLink>링크</S.FeedLink>
      <S.MaxLinkText>최대 9개의 링크 업로드 가능</S.MaxLinkText>
      <S.LinkItemBox>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <S.LinkButton>
              <S.LinkImg src={Link} />
              <S.LinkText>링크 등록</S.LinkText>
            </S.LinkButton>
          </SwiperSlide>
          <SwiperSlide>
            <S.LinkItem>
              <S.LinkItemImg src={clothes}></S.LinkItemImg>
              <S.LinkItemName>비행사 우주곰우주곰</S.LinkItemName>
              <S.LinkItemPrice>
                12000<S.PriceWon>원</S.PriceWon>
              </S.LinkItemPrice>
              {$updatePage ? null : <S.LinkCloseBtn src={closeBtn} />}
            </S.LinkItem>
          </SwiperSlide>
          <SwiperSlide>
            <S.LinkItem>
              <S.LinkItemImg src={pants}></S.LinkItemImg>
              <S.LinkItemName>비행사 우주곰우주곰</S.LinkItemName>
              <S.LinkItemPrice>
                12000<S.PriceWon>원</S.PriceWon>
              </S.LinkItemPrice>
              {$updatePage ? null : <S.LinkCloseBtn src={closeBtn} />}
            </S.LinkItem>
          </SwiperSlide>
          <SwiperSlide>
            <S.LinkItem>
              <S.LinkItemImg src={pants}></S.LinkItemImg>
              <S.LinkItemName>비행사 우주곰우주곰</S.LinkItemName>
              <S.LinkItemPrice>
                12000<S.PriceWon>원</S.PriceWon>
              </S.LinkItemPrice>
              {$updatePage ? null : <S.LinkCloseBtn src={closeBtn} />}
            </S.LinkItem>
          </SwiperSlide>
        </Swiper>
      </S.LinkItemBox>
    </S.FeedWriteLinkContainer>
  );
};
export default FeedWriteLink;
