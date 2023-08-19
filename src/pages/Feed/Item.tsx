import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const Item = styled.div<ImageProps>`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 10px;
  flex: 0 0 auto;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100px;
`;
const ItemWrap = styled.div`
  overflow: hidden;
  width: 390px;
  cursor: pointer;
`;
const Items = styled.div`
  display: flex;
  width: 1000px;
  overflow: hidden;
  margin-left: 16px;
`;
const ProductName = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const Price = styled.p`
  margin: 0;
  color: #6138f8;
  font-size: 14px;
  font-weight: 700;
`;
type FeedItemType = {
  itemImg: string;
  itemName: string;
  itemPrice: string;
};

type FeedType = {
  feedItem: FeedItemType[];
};
type ImageProps = {
  imageUrl: string;
};

const ItemBox = () => {
  const [feedItems, setFeedItem] = useState<FeedType[]>([]);

  useEffect(() => {
    const fetchFeedItem = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/feed");
        setFeedItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeedItem();
  }, []);

  return (
    <ItemWrap>
      <Items>
        {feedItems.map((feed, feedIndex) =>
          feed.feedItem?.map((item, itemIndex) => (
            <div key={`${feedIndex}-${itemIndex}`}>
              <Item imageUrl={item.itemImg} />
              <ProductName>{item.itemName}</ProductName>
              <Price>{item.itemPrice}</Price>
            </div>
          ))
        )}
      </Items>
    </ItemWrap>
  );
};

export default ItemBox;
