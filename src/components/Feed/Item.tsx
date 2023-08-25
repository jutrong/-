import React from "react";
import * as S from "./style/Item.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Feed = {
  id: number;
  user: User;
  feedImg: string;
  content: string;
  hashTag: string[];
  created_at: string;
  sonminsuItems: SonminsuItem[];
  comments: Comment[];
};

type User = {
  id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  fandom_name: string;
};

type SonminsuItem = {
  id: number;
  itemImg: string;
  title: string;
  price: number;
  url: string;
};
type Comment = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
  replies?: Comment[];
};

type FeedProps = {
  feedData: Feed;
};

const ItemBox: React.FC<FeedProps> = ({ feedData }) => {
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
