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
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
};
const SonMinsooItemInfo = ({
  artistName,
  groupName,
  id,
  imgUrl,
  originUrl,
  price,
  title,
}: sonminsooItemInfo) => {
  const { setModalView, setBucketList } = useOutletContext<{
    setModalView: React.Dispatch<React.SetStateAction<boolean>>;
    setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
  }>();
  return (
    <S.SonminsooItemInfoContainer>
      <Link to={`details/${id}`}>
        <S.ItemImage $url={imgUrl} />
        <S.ArtistName>{artistName}</S.ArtistName>
      </Link>
      <S.TitleContainer>
        <Link to={`details/${id}`}>
          {" "}
          <S.ItemTitle>{title}</S.ItemTitle>
        </Link>
        <S.bookMarkIcon
          $iconUrl={bookMark}
          onClick={() => {
            // setBucketList(bucket);
            setModalView(true);
          }}
        />
      </S.TitleContainer>
      <Link to={`details/${id}`}>
        <S.ItemPrice>{price}</S.ItemPrice>
      </Link>
    </S.SonminsooItemInfoContainer>
  );
};
export default SonMinsooItemInfo;
