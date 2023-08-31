import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import * as S from "./style/SonminsooItem.style";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import BucketListModal from "../../components/common/BucketListModal/BucketListModal";

type bucketList = {
  id: number;
  img?: string;
  bucketName: string;
}[];

const SonminsooItem = () => {
  const [modalView, setModalView] = useState(false);
  const [bucketList, setBucketList] = useState<bucketList>([]);
  const [selectItem, setSelectItem] = useState<number>();

  let bucketListData = useMemo(() => {
    return bucketList;
  }, [bucketList]); //bucketList 데이터가 변경 될 때만 BucketListModal 렌더링

  return (
    <>
      <S.SonminsooItemContainer>
        <Outlet context={{ setModalView, setBucketList, setSelectItem }} />
        {modalView && (
          <BucketListModal
            setModalOpen={setModalView}
            itemId={selectItem}
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
