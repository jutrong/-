import React from "react";
import detailDate from "../../utils/time";
import * as S from "./style/MyRequestItem.style";

type MyRequestItemType = {
  title: string;
  userName: string;
  date: string;
  mainimg: string;
};

const MyRequestItem: React.FC<MyRequestItemType> = ({
  title,
  userName,
  date,
  mainimg,
}) => {
  return (
    <S.Wrap>
      <S.RequestImg src={mainimg} />
      <S.RequestInfo>
        <S.RequestTitle>{title}</S.RequestTitle>
        <S.Box>
          <S.RequestUser>{userName}</S.RequestUser>
          <S.RequestDate>{detailDate(date)}</S.RequestDate>
        </S.Box>
      </S.RequestInfo>
    </S.Wrap>
  );
};

export default MyRequestItem;
