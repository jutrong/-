import React, { useState, useEffect } from "react";
import styled from "styled-components";
const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 305px;
  margin-left: 16px;
`;
const Hash = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Medium";
  color: #6138f8;
  cursor: pointer;
  margin: 8px 10px 0 0;
`;
type FeedData = {
  hashTag: string[];
};
type FeedHashTagProps = {
  feedData: FeedData;
};
const HashTag: React.FC<FeedHashTagProps> = ({ feedData }) => {
  const [hashTag, setHashTag] = useState<string[]>([]);
  useEffect(() => {
    if (feedData) {
      setHashTag(feedData.hashTag);
    }
  }, []);
  return (
    <HashTags>
      {hashTag && hashTag.map((tag, index) => <Hash key={index}>{tag}</Hash>)}
    </HashTags>
  );
};

export default HashTag;
