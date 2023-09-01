import { useMemo, useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
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
import useGetToken from "../../hooks/useGetToken";
type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

type productType = {
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
const SonminsooItemDetails = () => {
  const token = useGetToken();
  const axiosPrivate = useAxiosPrivate();
  const api = token ? axiosPrivate : axios;
  const { setModalView, setBucketList, setSelectItem } = useOutletContext<{
    setModalView: React.Dispatch<React.SetStateAction<boolean>>;
    setBucketList: React.Dispatch<React.SetStateAction<bucketList>>;
    setSelectItem: React.Dispatch<React.SetStateAction<number>>;
  }>();
  const { id } = useParams();
  const navigation = useNavigate();

  const [productInfo, setProductInfo] = useState<productType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/sonminsu-items/${id}`);
        setProductInfo(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [token]);

  return (
    <S.DetailContainer>
      <HeaderBar
        BackButton={true}
        items={[
          <Icon
            src={!!productInfo?.isInMyBucket ? activeBookmark : bookmark}
            key={"bookmark"}
            onClick={() => {
              if (!token) {
                navigation("/login");
              }
              !!productInfo?.isInMyBucket
                ? axiosPrivate
                    .put(
                      `/sonminsu-items/${id}/buckets/${productInfo?.isInMyBucket.bucketId}`
                    )
                    .then((res) => {
                      console.log(res);
                      document.body.style.overflow = "unset";
                      setModalView(false);
                      window.location.reload();
                    })
                    .catch((err) => {
                      
                    })
                : axiosPrivate
                    .get(`/buckets`)
                    .then(({ data }) => {
                      setSelectItem(Number(id));
                      setBucketList(data.data);
                      document.body.style.overflow = "hidden";
                      setModalView(true);
                    })
                    .catch((err) => {
                      
                    });
            }}
          />,
        ]}
      />
      <S.Image
        src={productInfo?.imgUrl}
        onClick={() =>
          productInfo?.originUrl && window.open(productInfo.originUrl)
        }
      />
      <S.ContentContainer>
        <S.TagContainer>
          <S.Tag>{productInfo?.groupName}</S.Tag>
          <S.Tag>{productInfo?.artistName}</S.Tag>
        </S.TagContainer>
        <S.Title>{productInfo?.title}</S.Title>
        <S.Price>{productInfo?.price}</S.Price>
      </S.ContentContainer>
    </S.DetailContainer>
  );
};

export default SonminsooItemDetails;
