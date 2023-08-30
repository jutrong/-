import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import EmptyItem from "./EmptyItem";
import * as S from "./style/SonminsooItemList.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";
import useInput from "../../hooks/useInput";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type sonminsooItemInfo = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
};

const SonminsooItemList = () => {
  const [items, setItems] = useState<sonminsooItemInfo[]>([]);
  const [searchView, setSearchView] = useState<boolean>(false);
  const [keyword, setKeyword] = useInput();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getSonminsooItemList = async () => {
      try {
        const { data } = await axiosPrivate.get(
          "/sonminsu-items?page=1&perPage=10"
        );
        console.log(data.data);
        setItems(data.data);
      } catch (err) {
        console.log(err, "axios err");
      }
    };
    getSonminsooItemList();
  }, []);

  console.log(keyword);
  const handleSearch = async () => {
    if (keyword.length === 0) {
      setItems([]);
      return;
    }
    try {
      const { data } = await axios.get(
        `sonminsu-items/search?page=1&perPage=10&search=${keyword}`
      );
      console.log({ data });
      setItems(data.data);
    } catch (err) {
      console.log(err, "axios err");
    }
  };

  return (
    <>
      {useMemo(() => {
        return (
          <>
            <HeaderBar
              BackButton={false}
              items={[
                searchView && (
                  <S.SearchText
                    key={"keyword"}
                    value={keyword}
                    onChange={setKeyword}
                  />
                ),
                <Icon
                  key={"search"}
                  src={search}
                  onClick={
                    searchView
                      ? handleSearch
                      : () => {
                          setSearchView(!searchView);
                        }
                  }
                />,
                <Icon key={"settings"} src={settings} />,
              ]}
            />
            <S.LinkRequestList to="/requests">
              <span>손민수템 의뢰 리스트</span>
              <span>&gt;</span>
            </S.LinkRequestList>
          </>
        );
      }, [searchView, keyword])}
      <S.SonminsooItemListContainer>
        <S.SonminsooItemTitle>손민수템</S.SonminsooItemTitle>

        <S.SonminsooItemsContainer>
          {items.length === 0 ? (
            <EmptyItem />
          ) : (
            items.map((data) => {
              return (
                <SonMinsooItemInfo
                  key={data.id}
                  groupName={data.groupName}
                  id={data.id}
                  originUrl={data.originUrl}
                  imgUrl={data.imgUrl}
                  artistName={data.artistName}
                  title={data.title}
                  price={data.price}
                />
              );
            })
          )}
        </S.SonminsooItemsContainer>
      </S.SonminsooItemListContainer>
    </>
  );
};
export default SonminsooItemList;
