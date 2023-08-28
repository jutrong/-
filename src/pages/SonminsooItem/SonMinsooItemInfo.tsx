import * as S from "./style/SonMinsooItemInfo.style";
import bookMark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import { Link, useOutletContext } from "react-router-dom";
import { useMemo } from "react";

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
const SonMinsooItemInfo = ({
  imgURL,
  artistName,
  title,
  bucket,
  price,
}: sonminsooItemInfo) => {
  const { setModalView, setBucketList } = useOutletContext<{
    setModalView: React.Dispatch<React.SetStateAction<boolean>>;
    setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
  }>();
  return (
    <S.SonminsooItemInfoContainer>
      <Link to={`details/${1}`}>
        <S.ItemImage $url={imgURL} />
        <S.ArtistName>{artistName}</S.ArtistName>
      </Link>
      <S.TitleContainer>
        <Link to={`details/${1}`}>
          {" "}
          <S.ItemTitle>{title}</S.ItemTitle>
        </Link>
        <S.bookMarkIcon
          $iconUrl={bookMark}
          onClick={() => {
            setBucketList(bucket);
            setModalView(true);
          }}
        />
      </S.TitleContainer>
      <Link to={`details/${1}`}>
        <S.ItemPrice>{price.toLocaleString()}원</S.ItemPrice>
      </Link>
    </S.SonminsooItemInfoContainer>
  );
};
export default SonMinsooItemInfo;
