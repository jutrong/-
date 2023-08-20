import React, { useState, useEffect } from "react";
import styled from "styled-components";
const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 305px;
  margin-left: 6px;
`;
const Hash = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #6138f8;
  margin: 8px 0 0 10px;
  cursor: pointer;
`;
type FeedData = {
  hashtag: string[];
};
type FeedHashTagProps = {
  feedData: FeedData;
};
const HashTag: React.FC<FeedHashTagProps> = ({ feedData }) => {
  const [hashTag, setHashTag] = useState<string[]>([
    "#우리애들절대지켜",
    "#ARMY",
    "#정전국",
    "#유포리아",
    "#비오는날리허설",
  ]);
  useEffect(() => {
    if (feedData) {
      setHashTag(feedData.hashtag);
    }
  }, []);
  return (
    <HashTags>
      {hashTag.map((tag, index) => (
        <Hash key={index}>{tag}</Hash>
      ))}
    </HashTags>
  );
};

export default HashTag;
