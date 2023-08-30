import React, { useContext } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "../../assets/images/svg/ic-link.svg";
import closeBtn from "../../assets/images/svg/x.svg";
import * as S from "./style/FeedWriteLink.style";

export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItems[];
  image: string;
  tags: string[];
  comments: number;
  groupName: string;
  artistName: string;
};
export type SonminsuItems = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
type FeedWriteProps = {
  $updatePage: boolean;
  setLinkModalClick: React.Dispatch<React.SetStateAction<boolean>>;
  urlItem: itemtype[];
  feedData: Data | undefined;
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
  feedData,
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
          {$updatePage ? undefined : (
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
          )}

          {$updatePage
            ? feedData?.sonminsuItems.map((item) => (
                <SwiperSlide>
                  <S.LinkItem key={item.id}>
                    <S.LinkItemImg src={item.imgUrl}></S.LinkItemImg>
                    <S.LinkItemName>{item.title}</S.LinkItemName>
                    <S.LinkItemPrice>
                      {item.price}
                      <S.PriceWon>원</S.PriceWon>
                    </S.LinkItemPrice>
                  </S.LinkItem>
                </SwiperSlide>
              ))
            : urlItem.map((item) => (
                <SwiperSlide>
                  <S.LinkItem key={item.id}>
                    <S.LinkItemImg src={item.imgUrl}></S.LinkItemImg>
                    <S.LinkItemName>{item.title}</S.LinkItemName>
                    <S.LinkItemPrice>
                      {item.price}
                      <S.PriceWon>원</S.PriceWon>
                    </S.LinkItemPrice>
                  </S.LinkItem>
                </SwiperSlide>
              ))}
        </Swiper>
      </S.LinkItemBox>
    </S.FeedWriteLinkContainer>
  );
};
export default FeedWriteLink;
