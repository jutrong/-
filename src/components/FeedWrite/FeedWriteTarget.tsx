import React, { useContext } from "react";
import * as S from "./style/FeedWriteTarget.style";
type FeedWriteProps = {
  $updatePage: boolean;
};
const FeedWriteTarget: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  return (
    <S.TargetContainer>
      <S.Targeting>손민수 대상자</S.Targeting>
      <S.TargetingBox>
        <S.TargetGroupInput placeholder="그룹명" readOnly={$updatePage} />
        <S.TargetArtistInput
          placeholder="아티스트 이름"
          readOnly={$updatePage}
        />
      </S.TargetingBox>
      <S.TargetLabel>작성하신 이름이 노출됩니다.</S.TargetLabel>
    </S.TargetContainer>
  );
};

export default FeedWriteTarget;
