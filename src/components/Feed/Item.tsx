import React from "react";
import * as S from "./style/Item.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FeedItemProps } from "../../types/feed";

const ItemBox: React.FC<FeedItemProps> = ({ feedData }) => {
  const swiperParams = {
    slidesPerView: 3.5,
    spaceBetween: 10,
  };
  return (
    <S.ItemWrap>
      <Swiper {...swiperParams}>
        {feedData.sonminsuItems &&
          feedData.sonminsuItems.map((item, itemIndex) => (
            <SwiperSlide key={`${itemIndex}`}>
              <S.Item src={item.itemImg} />
              <S.ProductName>{item.title}</S.ProductName>
              <S.Price>
                {item.price}
                <S.Won>원</S.Won>
              </S.Price>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.ItemWrap>
  );
};

export default ItemBox;
