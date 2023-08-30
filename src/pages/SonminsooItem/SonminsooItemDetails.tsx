import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style/SonminsooItemDetails.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import bookmark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookmark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import report from "../../assets/images/svg/SonminsooItem/ic-alert.svg";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";
import axios from "../../api/axios";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

type productType = {
  artistName: string;
  groupName: string;
  id: 7;
  imgUrl: string;
  originUrl: string;
  price: string;
  title: string;
};
const SonminsooItemDetails = () => {
  const auth = useSelector((state: any) => {
    return state.auth.accessToken;
  });
  const axiosPrivate = useAxiosPrivate();
  // const api = auth ? axiosPrivate : axios;
  const api = axios;

  const { id } = useParams();
  const [modalView, setModalView] = useState(false);
  const [productInfo, setProductInfo] = useState<productType>();
  const [bucketList, setBucketList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/sonminsu-items/${id}`);
        console.log(data.data, "fetched");
        setProductInfo(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const registBookMark = async () => {
    try {
      const { data } = await api.get("/users/buckets");
      setModalView(() => true);
      setBucketList(() => data.data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <S.DetailContainer>
      {useMemo(() => {
        return (
          <HeaderBar
            BackButton={true}
            items={[
              <Icon src={bookmark} key={"bookmark"} onClick={registBookMark} />,
            ]}
          />
        );
      }, [])}
      <S.Image src={productInfo?.imgUrl} />
      <S.ContentContainer>
        <S.TagContainer>
          <S.Tag>{productInfo?.groupName}</S.Tag>
          <S.Tag>{productInfo?.artistName}</S.Tag>
        </S.TagContainer>
        <S.Title>{productInfo?.title}</S.Title>
        <S.Price>{productInfo?.price}</S.Price>
      </S.ContentContainer>
      {modalView && (
        <BucketListModal
          setModalOpen={setModalView}
          itemId={productInfo?.id}
          bucketList={bucketList}
        />
      )}
    </S.DetailContainer>
  );
};

export default SonminsooItemDetails;
