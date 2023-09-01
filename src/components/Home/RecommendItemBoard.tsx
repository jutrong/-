import * as S from "./style/RecommendItemBoard.style";
import React, { useState, useEffect } from "react";
import ContentHeader from "./ContentHeader";
import axios from "../../api/axios";
import RecommendItem from "./RecommendItem";
import useGetToken from "../../hooks/useGetToken";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
type bucketList = {
  id: string;
  img?: string;
  bucketName: string;
}[];
type RecommendItemType = {
  id: number;
  originUrl: string;
  title: string;
  price: string;
  imgUrl: string;
  groupName: string;
  artistName: string;
};

type RecommendItemData = RecommendItem[];

const RecommendItemBoard = ({
  setModalView,
  setBucketList,
  setSelectItem,
}: {
  setModalView: React.Dispatch<React.SetStateAction<boolean>>;
  setBucketList: any;
  setSelectItem: any;
}) => {
  // 요청 보내고 데이터 받아서 리코멘드 아이템으로 보내준다
  const token = useGetToken();
  const axiosPrivate = useAxiosPrivate();
  const api = token ? axiosPrivate : axios;
  const [data, setData] = useState<RecommendItemData>([]);

  useEffect(() => {
    initDataGet();
  }, [token]);

  const initDataGet = async () => {
    try {
      const res = await api.get("/sonminsu-items");
      setData(res.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const slicedData = data.slice(0, 6);

  return (
    <>
      <S.RecommendItemBoardContainer>
        <ContentHeader nav={"/minsooItem"} name={"📦 추천 손민수템"} />
        <S.RecommendItemListBox>
          {slicedData.map((item) => (
            <RecommendItem
              key={item.id}
              item={item}
              setModalView={setModalView}
              setBucketList={setBucketList}
              setSelectItem={setSelectItem}
            />
          ))}
        </S.RecommendItemListBox>
      </S.RecommendItemBoardContainer>
    </>
  );
};
export default RecommendItemBoard;
