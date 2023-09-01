import * as S from "./style/RecommendItem.style";
import { useNavigate } from "react-router-dom";
import BookMarkIcon from "../../assets/images/svg/home/bookmarkIcon.svg";
import ActiveBookMarkIcon from "../../assets/images/svg/home/activebookmarkIcon.svg";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import { useState } from "react";
import useGetToken from "../../hooks/useGetToken";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
type RecommendItem = {
  id: number;
  originUrl: string;
  title: string;
  price: string;
  imgUrl: string;
  groupName: string;
  artistName: string;
  isInMyBucket?: {
    bucketId: number;
  };
};
type bucketList = {
  id: string;
  img?: string;
  bucketName: string;
}[];
type RecommendItemProps = {
  item: RecommendItem;
  setModalView: React.Dispatch<React.SetStateAction<boolean>>;
  setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
  setSelectItem: React.Dispatch<React.SetStateAction<number>>;
};
const RecommendItem: React.FC<RecommendItemProps> = ({
  item,
  setModalView,
  setBucketList,
  setSelectItem,
}) => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate(`/minsooItem/details/${item.id} `);
  };
  const token = useGetToken();
  const axiosPrivate = useAxiosPrivate();
  const api = token ? axiosPrivate : axios;

  return (
    <>
      <S.RecommendItemContainer>
        <S.RecommendItemImg
          src={item?.imgUrl}
          key={item.id}
          onClick={handleItemClick}
        />
        <S.RecommendItemLabelBox>
          <S.RecommendItemLabel>{item.artistName}</S.RecommendItemLabel>
        </S.RecommendItemLabelBox>
        <S.RecommendItemTextIconBox>
          <S.RecommendItemNameText>{item.title}</S.RecommendItemNameText>
          <S.BookMarkIconSvg
            src={!!item.isInMyBucket ? ActiveBookMarkIcon : BookMarkIcon}
            onClick={() => {
              if (!token) {
                alert("로그인후 가능합니다.");
                return;
              }
              !!item.isInMyBucket
                ? api
                    .put(
                      `/sonminsu-items/${item.id}/buckets/${item.isInMyBucket.bucketId}`
                    )
                    .then((res) => {
                      console.log(res);
                      document.body.style.overflow = "unset";
                      setModalView(false);
                    })
                    .catch((err) => {
                      
                    })
                : api
                    .get(`/buckets`)
                    .then(({ data }) => {
                      console.log(data.data);
                      document.body.style.overflow = "hidden";
                      setSelectItem(item.id);
                      setBucketList(data.data);
                      setModalView(true);
                    })
                    .catch((err) => {
                      
                    });
            }}
          />
        </S.RecommendItemTextIconBox>
        <S.RecommendItemPriceText>{item.price}</S.RecommendItemPriceText>
      </S.RecommendItemContainer>
    </>
  );
};
export default RecommendItem;
