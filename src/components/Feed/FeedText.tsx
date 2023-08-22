import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FeedText = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  line-height: 140%;
  margin: 30px 16px 20px 16px;
  width: 239px;
`;
const More = styled.span`
  color: #208df1;
  font-size: 15px;
  cursor: pointer;
  display: inline;
  line-height: 140%;
  font-family: "Pretendard-Medium";
`;
type FeedData = {
  content: string;
};
type FeedTextProps = {
  feedData: FeedData;
};
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
    <FeedText>
      {displayedComment}
      {feedText.length > textLimit && (
        <More onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? "...접기" : "...더보기"}
        </More>
      )}
    </FeedText>
  );
};

export default Text;
