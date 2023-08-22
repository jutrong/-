import React from "react";
import styled from "styled-components";
const Item = styled.div<ImageProps>`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 10px;
  flex: 0 0 auto;
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
  margin-bottom: 8px;

`;
const ItemWrap = styled.div`
  overflow: hidden;
  width: 390px;
  cursor: pointer;
  
`;
const Items = styled.div`
  display: flex;
  width: 2000px;
  margin-left: 16px;
`;
const ProductName = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  margin-bottom: 5px;
  color: #1d1b20;
  width: 94px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Price = styled.p`
  margin: 0;
  font-family: "Pretendard-Bold";
  color: #6138f8;
  font-size: 14px;
`;
const Won = styled.span`
  font-size: 12px;
`;
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
type ImageProps = {
  $imageUrl: string;
};

const ItemBox: React.FC<FeedProps> = ({ feedData }) => {
  return (
    <ItemWrap>
      <Items>
        {feedData.sonminsuItems &&
          feedData.sonminsuItems.map((item, itemIndex) => (
            <div key={`${itemIndex}`}>
              <Item $imageUrl={item.itemImg} />
              <ProductName>{item.title}</ProductName>
              <Price>
                {item.price}
                <Won>원</Won>
              </Price>
            </div>
          ))}
      </Items>
    </ItemWrap>
  );
};

export default ItemBox;
