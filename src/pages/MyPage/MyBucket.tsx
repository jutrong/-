import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import MyBucketItem from "../../components/MyPage/MyBucketItem";
import document from "../../assets/images/svg/ic-document.svg";
import * as S from "./style/MyBucket.style";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

type ItemsType = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
  artistName: string;
};

const MyBucket: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();
  let { userId, bucketId } = useParams();
  const navigation = useNavigate();

  const [itemsdata, setItemsData] = useState<ItemsType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(`/buckets/${bucketId}`);
      setItemsData(response.data.data.items);
    } catch (err) {
      
    }
  };

  const clickBucketDelete = async () => {
    try {
      const response = await axiosPrivate.delete(`/buckets/${bucketId}`);
      navigation(`/mypage/${userId}`);
    } catch (err) {
      
    }
  };

  return (
    <>
      <HeaderBar
        BackButton={true}
        color="#fff"
        title="나의 버킷리스트"
        items={[
          <S.deleteBTN onClick={clickBucketDelete}>전체 삭제</S.deleteBTN>,
        ]}
      />
      <S.Wrap>
        {itemsdata.length === 0 ? (
          <S.NoItems>
            <S.NoItemIcon src={document} />
            <S.NoItemDesc>새 아이템을 버킷리스트에 담아주세요!</S.NoItemDesc>
          </S.NoItems>
        ) : (
          itemsdata.map((item) => (
            <MyBucketItem
              artistName={item.artistName}
              name={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              id={item.id}
            />
          ))
        )}
      </S.Wrap>
    </>
  );
};

export default MyBucket;
