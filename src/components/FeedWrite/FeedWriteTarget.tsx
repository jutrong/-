import React, { useState, useContext } from "react";
import * as S from "./style/FeedWriteTarget.style";

type FeedWriteProps = {
  $updatePage: boolean;
  grouptInput: string;
  setGroupInput: React.Dispatch<React.SetStateAction<string>>;
  artistInput: string;
  setArtistInput: React.Dispatch<React.SetStateAction<string>>;
};
const FeedWriteTarget: React.FC<FeedWriteProps> = ({
  $updatePage,
  grouptInput,
  setGroupInput,
  artistInput,
  setArtistInput,
}) => {
  return (
    <S.TargetContainer>
      <S.Targeting>손민수 대상자</S.Targeting>
      <S.Target>
        <S.TargetingBox>
          <S.TargetGroupInput
            placeholder="그룹명"
            readOnly={$updatePage}
            value={grouptInput}
            onChange={(e) => {
              setGroupInput(e.target.value);
            }}
          />
          <S.GroupLimit>
            <S.GroupLimitNum>{grouptInput.length}</S.GroupLimitNum>/10자
          </S.GroupLimit>
        </S.TargetingBox>
        <S.TargetingBox>
          <S.TargetArtistInput
            placeholder="아티스트 이름"
            readOnly={$updatePage}
            value={artistInput}
            onChange={(e) => {
              setArtistInput(e.target.value);
            }}
          />
          <S.ArtistLimit>
            <S.ArtistLimitNum>{artistInput.length}</S.ArtistLimitNum>/10자
          </S.ArtistLimit>
        </S.TargetingBox>
      </S.Target>
      <S.TargetLabel>작성하신 이름이 노출됩니다.</S.TargetLabel>
    </S.TargetContainer>
  );
};

export default FeedWriteTarget;
