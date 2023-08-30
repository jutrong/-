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
  setLinkModalClick: React.Dispatch<React.SetStateAction<boolean>>;
  urlItem: itemtype[];
};
type itemtype = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
};

const FeedWriteLink: React.FC<FeedWriteProps> = ({
  $updatePage,
  setLinkModalClick,
  urlItem,
}) => {
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
            <S.LinkButton
              onClick={() => {
                setLinkModalClick(true);
              }}
            >
              <S.LinkImg src={Link} />
              <S.LinkText>링크 등록</S.LinkText>
            </S.LinkButton>
          </SwiperSlide>
          {urlItem.map((item) => (
            <SwiperSlide>
              <S.LinkItem key={item.id}>
                <S.LinkItemImg src={item.imgUrl}></S.LinkItemImg>
                <S.LinkItemName>{item.title}</S.LinkItemName>
                <S.LinkItemPrice>
                  {item.price}
                  <S.PriceWon>원</S.PriceWon>
                </S.LinkItemPrice>
                {$updatePage ? null : <S.LinkCloseBtn src={closeBtn} />}
              </S.LinkItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.LinkItemBox>
    </S.FeedWriteLinkContainer>
  );
};
export default FeedWriteLink;
