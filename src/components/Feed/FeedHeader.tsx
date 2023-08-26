import React from "react";
import more from "../../assets/images/svg/ic-more-horizontal.svg";
import detailDate from "../../utils/time";
import * as S from "./style/FeedHeader.style";
import { FeedDataProps } from "../../types/feed";

const FeedHeader: React.FC<FeedDataProps> = ({ feedData, setIsFeedDelete }) => {
  return (
    <S.FeedHeaderContainer>
      {feedData && feedData.user ? (
        <>
          <S.Profile src={feedData.user.profileImg} />
          <S.HeaderContent>
            <S.Nickname>{feedData.user.user_name}</S.Nickname>
            <S.ContentWrap>
              <S.FeedName>{feedData.user.fandom_name}</S.FeedName>
              <S.Time>
                {feedData.created_at
                  ? detailDate(feedData.created_at)
                  : "시간 정보 없음"}
              </S.Time>
            </S.ContentWrap>
          </S.HeaderContent>
          <S.MoreBtn src={more} onClick={() => setIsFeedDelete(true)} />
        </>
      ) : null}
    </S.FeedHeaderContainer>
  );
};
export default FeedHeader;
