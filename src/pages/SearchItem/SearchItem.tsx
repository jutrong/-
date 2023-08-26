import React from "react";
import * as S from "./style/SearchItem.style";
import SearchItemHeader from "../../components/SearchItem/SearchItemHeader";
import MinsooItem from "../../components/SearchItem/MinsooItem";

const SearchItem = () => {
  return (
    <S.SearchItemContainer>
      <SearchItemHeader />
      <S.SearchItemList>
        <MinsooItem />
        <MinsooItem />
        <MinsooItem />
      </S.SearchItemList>
    </S.SearchItemContainer>
  );
};

export default SearchItem;
