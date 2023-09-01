import React, { useState } from "react";
import * as S from "./style/MyBucketItem.style";
import bookmarkon from "../../assets/images/svg/ic-bookmark.svg";
import bookmarkoff from "../../assets/images/svg/ic-bookmark-off.svg";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

type ItemType = {
  id: number;
  artistName: string;
  name: string;
  price: string;
  imgUrl: string;
};

const MyBucketItem: React.FC<ItemType> = ({
  artistName,
  name,
  price,
  imgUrl,
  id,
}) => {
  const axiosPrivate = useAxiosPrivate();
  let { bucketId } = useParams();
  const navigation = useNavigate();

  const [bookmarkValue, setBookMarkValue] = useState(true);

  const clickBookMark = async () => {
    setBookMarkValue((prev) => !prev);

    try {
      const response = await axiosPrivate.put(
        `/sonminsu-items/${id}/buckets/${bucketId}`
      );
    } catch (err) {
      
    }
  };

  return (
    <S.Wrap>
      <S.ItemImg
        src={imgUrl}
        onClick={() => {
          navigation(`/minsooItem/details/${id}`);
        }}
      />
      <S.Artist width={artistName.length * 11}>{artistName}</S.Artist>
      <S.Box>
        <S.ItemName>{name}</S.ItemName>
        <S.Bookmark
          src={bookmarkValue ? bookmarkon : bookmarkoff}
          onClick={clickBookMark}
        />
      </S.Box>
      <S.Price>{price}</S.Price>
    </S.Wrap>
  );
};

export default MyBucketItem;
