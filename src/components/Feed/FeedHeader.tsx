import React from "react";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";
import * as S from "./style/FeedHeader.style";
// import { FeedDataProps } from "../../types/feed";
export type Data = {
  id: number;
  content: string;
  createdAt: string; // 더 정확한 날짜 처리를 원한다면 Date 또는 string 대신 'Date' 타입을 사용하세요.
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: any[]; // sonminsuItems의 구체적인 항목을 모르므로 any[]로 지정했습니다. 필요에 따라서 수정하세요.
  image: string;
  tags: string[];
  comments: number;
};
export type DataArray = Data[];

export type FeedDataProps = {
  feedData: Data;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const FeedHeader: React.FC<FeedDataProps> = ({
  feedData,
  setIsFeedDelete,
  setFeedId,
}) => {
  const handleMoreClick = () => {
    setIsFeedDelete(true);
    setFeedId(feedData.id);
  };
  return (
    <S.FeedHeaderContainer>
      {feedData && feedData.author ? (
        <>
          <S.Profile src={feedData.author.image} />
          <S.HeaderContent>
            <S.Nickname>{feedData.author.nickName}</S.Nickname>
            <S.ContentWrap>
              <S.FeedName>{feedData.fandom.fandomName}</S.FeedName>
              <S.Time>
                {feedData.createdAt
                  ? detailDate(feedData.createdAt)
                  : "시간 정보 없음"}
              </S.Time>
            </S.ContentWrap>
          </S.HeaderContent>
          <S.MoreBtn src={more} onClick={handleMoreClick} />
        </>
      ) : null}
    </S.FeedHeaderContainer>
  );
};
export default FeedHeader;
