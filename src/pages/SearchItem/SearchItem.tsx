import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import * as S from "./style/SearchItem.style";
import SearchItemHeader from "../../components/SearchItem/SearchItemHeader";
import MinsooItem from "../../components/SearchItem/MinsooItem";
type minsooItemType = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string | number;
  title: string;
};

const SearchItem = () => {
  const [minsooItem, setMinsooItem] = useState<minsooItemType[]>([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    try {
      const response = await axios.get(
        `/sonminsu-items/search?search=${encodeURIComponent(searchItem)}`
      );
      setMinsooItem(response.data.data);
    } catch (error) {
      
    }
  };

  return (
    <S.SearchItemContainer>
      <SearchItemHeader
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        fetchItem={fetchItem}
      />
      <S.SearchItemList>
        <MinsooItem minsooItem={minsooItem} />
      </S.SearchItemList>
    </S.SearchItemContainer>
  );
};

export default SearchItem;
