import React from "react";
import FeedHeader from "./FeedHeader";
import FeedContent from "./FeedContent";
import * as S from "../../pages/Feed/style/Feed.style";
import { FeedProps } from "../../types/feed";

const FeedItem: React.FC<FeedProps> = ({ feedData }) => {
  return (
    <>
      <FeedHeader
        feedId={feedData.id}
        author={feedData.author}
        fandom={feedData.fandom}
        createdAt={feedData.createdAt}
      />
      <S.FeedImage src={feedData.image} />
      <FeedContent feedData={feedData} />
    </>
  );
};

export default FeedItem;
