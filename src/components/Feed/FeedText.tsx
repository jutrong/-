import React, { useState, useEffect } from "react";
import * as S from "./style/FeedText.style";
import { FeedTextProps } from "../../types/feed";

const Text: React.FC<FeedTextProps> = ({ feedData }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit: number = 50;
  const [feedText, setFeedText] = useState<string>("");

  const displayedComment = isShowMore ? feedText : feedText.slice(0, textLimit);

  useEffect(() => {
    if (feedData) {
      setFeedText(feedData.content);
    }
  }, []);

  return (
    <S.FeedText>
      {displayedComment}
      {feedText.length > textLimit && (
        <S.More onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? "...접기" : "...더보기"}
        </S.More>
      )}
    </S.FeedText>
  );
};

export default Text;
