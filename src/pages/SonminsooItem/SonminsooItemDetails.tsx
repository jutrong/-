import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style/SonminsooItemDetails.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import Icon from "../../elements/Icon";
import bookmark from "../../assets/images/svg/SonminsooItem/bookmarkIcon.svg";
import activeBookmark from "../../assets/images/svg/SonminsooItem/activebookmarkIcon.svg";
import report from "../../assets/images/svg/SonminsooItem/ic-alert.svg";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

const SonminsooItemDetails = () => {
  const { id } = useParams();
  const tags = ["BTS", "전정국"];
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([
    { id: "test", img: "test", title: "test" },
  ]);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]);

  return (
    <S.DetailContainer>
      {useMemo(() => {
        return (
          <HeaderBar
            BackButton={true}
            items={[
              <Icon
                src={bookmark}
                key={"bookmark"}
                onClick={() => setModalView(true)}
              />,
              <Icon src={report} key={"report"} />,
            ]}
          />
        );
      }, [])}
      <S.Image />
      <S.ContentContainer>
        <S.TagContainer>
          {tags.map((tag, index) => {
            return <S.Tag key={index}>{tag}</S.Tag>;
          })}
        </S.TagContainer>
        <S.Title>title</S.Title>
        <S.Price>12,000원</S.Price>
      </S.ContentContainer>
      {modalView && (
        <BucketListModal
          setModalOpen={setModalView}
          addClickHandler={() => {}}
          bucketList={bucketListData}
        />
      )}
    </S.DetailContainer>
  );
};

export default SonminsooItemDetails;
