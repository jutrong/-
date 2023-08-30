import React, { useState, useEffect } from "react";
import * as S from "./style/HashTag.style";
import { FeedHashTagProps } from "../../types/feed";

const HashTag: React.FC<FeedHashTagProps> = ({ feedData }) => {
  const [hashTag, setHashTag] = useState<string[]>([]);
  useEffect(() => {
    if (feedData) {
      setHashTag(feedData.tags);
    }
  }, []);
  return (
    <S.HashTags>
      {hashTag &&
        hashTag.map((tag, index) => <S.Hash key={index}>#{tag}</S.Hash>)}
    </S.HashTags>
  );
};

export default HashTag;
