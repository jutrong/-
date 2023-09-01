import * as S from "./style/SonMinsooItemInfo.style";
import bookMark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookMark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import { Link, useOutletContext } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGetToken from "../../hooks/useGetToken";
import axios from "../../api/axios";

type bucketList = {
  id: string;
  img?: string;
  bucketName: string;
}[];
type sonminsooItemInfo = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
  isInMyBucket?: {
    bucketId: number;
  };
};
const SonMinsooItemInfo = ({
  artistName,
  id,
  imgUrl,
  price,
  title,
  isInMyBucket,
}: sonminsooItemInfo) => {
  const { setModalView, setBucketList, setSelectItem } = useOutletContext<{
    setModalView: React.Dispatch<React.SetStateAction<boolean>>;
    setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
    setSelectItem: React.Dispatch<React.SetStateAction<number>>;
  }>();

  const axiosPrivate = useAxiosPrivate();
  const token = useGetToken();
  const api = token ? axiosPrivate : axios;
  return (
    <S.SonminsooItemInfoContainer>
      <Link to={`details/${id}`}>
        <S.ItemImage $url={imgUrl} />
        <S.ArtistName>{artistName}</S.ArtistName>
      </Link>
      <S.TitleContainer>
        <Link to={`details/${id}`}>
          <S.ItemTitle>{title}</S.ItemTitle>
        </Link>
        <S.bookMarkIcon
          $iconUrl={!!isInMyBucket ? activeBookMark : bookMark}
          onClick={() => {
            if (!token) {
              alert("로그인후 가능합니다.");
              return;
            }
            !!isInMyBucket
              ? api
                  .put(`/sonminsu-items/${id}/buckets/${isInMyBucket.bucketId}`)
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
                    setSelectItem(id);
                    setBucketList(data.data);
                    document.body.style.overflow = "hidden";
                    setModalView(true);
                  })
                  .catch((err) => {
                    
                  });
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
