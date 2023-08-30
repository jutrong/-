import { useMemo, useState } from "react";
import SonMinsooItemInfo from "./SonMinsooItemInfo";
import EmptyItem from "./EmptyItem";
import * as S from "./style/SonminsooItemList.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import search from "../../assets/images/svg/SonminsooItem/ic-search.svg";
import settings from "../../assets/images/svg/SonminsooItem/ic-settings.svg";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

type sonminsooItemInfo = {
  imgURL: string;
  artistName: string;
  title: string;
  bucket: bucketList;
  price: number;
};

const SonminsooItemList = () => {
  const [items, setItems] = useState<sonminsooItemInfo[]>([]);

  const testData: sonminsooItemInfo[] = [
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "123",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
        {
          id: "2",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
        {
          id: "13",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "4",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
        {
          id: "423525",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "정",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "55",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "6",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
        {
          id: "7",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "8",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "9",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "10",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "111",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "12",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
    {
      imgURL: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
      artistName: "전정국",
      title: "비행사 우주 뭐시기",
      bucket: [
        {
          id: "1233",
          img: "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg",
          title: "title",
        },
      ],
      price: 12000,
    },
  ];
  return (
    <>
      {useMemo(() => {
        return (
          <>
            <HeaderBar
              BackButton={false}
              items={[
                <Icon key={"search"} src={search} />,
                <Icon key={"settings"} src={settings} />,
              ]}
            />
            <S.LinkRequestList to="/requests">
              <span>손민수템 의뢰 리스트</span>
              <span>&gt;</span>
            </S.LinkRequestList>
          </>
        );
      }, [])}
      <S.SonminsooItemListContainer>
        <S.SonminsooItemTitle>손민수템</S.SonminsooItemTitle>
        <button onClick={() => setItems(testData)}>아이템 추가</button>
        <S.SonminsooItemsContainer>
          {items.length === 0 ? (
            <EmptyItem />
          ) : (
            testData.map((data, index) => {
              return (
                <SonMinsooItemInfo
                  key={index}
                  imgURL={data.imgURL}
                  artistName={data.artistName}
                  title={data.title}
                  bucket={data.bucket}
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
