import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";

type bucketList = {
  id: string;
  img: string;
  title: string;
}[];

const SonminsooItem = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  return (
    <>
      <S.SonminsooItemContainer>
        <Outlet context={{ setModalView, setBucketList }} />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            // addClickHandler={() => {}}
            bucketList={bucketListData}
          />
        )}
        {useMemo(() => {
          return <FooterNavBar />;
        }, [])}
      </S.SonminsooItemContainer>
    </>
  );
};

export default SonminsooItem;
