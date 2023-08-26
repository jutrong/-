import React, { useState, useContext } from "react";
import * as S from "./style/FeedWriteTarget.style";
type FeedWriteProps = {
  $updatePage: boolean;
};
const FeedWriteTarget: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  const [grouptLimit, setGroupLimit] = useState<string>("");
  const [artistLimit, setArtistLimit] = useState<string>("");

  return (
    <S.TargetContainer>
      <S.Targeting>손민수 대상자</S.Targeting>
      <S.Target>
        <S.TargetingBox>
          <S.TargetGroupInput
            placeholder="그룹명"
            readOnly={$updatePage}
            value={grouptLimit}
            onChange={(e) => {
              setGroupLimit(e.target.value);
            }}
          />
          <S.GroupLimit>
            <S.GroupLimitNum>{grouptLimit.length}</S.GroupLimitNum>/10자
          </S.GroupLimit>
        </S.TargetingBox>
        <S.TargetingBox>
          <S.TargetArtistInput
            placeholder="아티스트 이름"
            readOnly={$updatePage}
            value={artistLimit}
            onChange={(e) => {
              setArtistLimit(e.target.value);
            }}
          />
          <S.ArtistLimit>
            <S.ArtistLimitNum>{artistLimit.length}</S.ArtistLimitNum>/10자
          </S.ArtistLimit>
        </S.TargetingBox>
      </S.Target>
      .<S.TargetLabel>작성하신 이름이 노출됩니다.</S.TargetLabel>
    </S.TargetContainer>
  );
};

export default FeedWriteTarget;
