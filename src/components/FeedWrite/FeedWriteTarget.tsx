import React, { useState, useContext } from "react";
import * as S from "./style/FeedWriteTarget.style";
export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItems[];
  image: string;
  tags: string[];
  comments: number;
  groupName: string;
  artistName: string;
};
export type SonminsuItems = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
type FeedWriteProps = {
  $updatePage: boolean;
  groupInput: string;
  setGroupInput: React.Dispatch<React.SetStateAction<string>>;
  artistInput: string;
  setArtistInput: React.Dispatch<React.SetStateAction<string>>;
  feedData: Data | undefined;
};
const FeedWriteTarget: React.FC<FeedWriteProps> = ({
  $updatePage,
  groupInput,
  setGroupInput,
  artistInput,
  setArtistInput,
  feedData,
}) => {
  return (
    <S.TargetContainer>
      <S.Targeting>손민수 대상자</S.Targeting>
      <S.Target>
        <S.TargetingBox>
          <S.TargetGroupInput
            placeholder="그룹명"
            readOnly={$updatePage}
            value={$updatePage ? feedData?.groupName || "" : groupInput}
            onChange={(e) => {
              setGroupInput(e.target.value);
            }}
          />
          {$updatePage ? (
            <S.ArtistLimit>
              <S.ArtistLimitNum>{feedData?.groupName.length}</S.ArtistLimitNum>
              /10자
            </S.ArtistLimit>
          ) : (
            <S.ArtistLimit>
              <S.ArtistLimitNum>{groupInput.length}</S.ArtistLimitNum>/10자
            </S.ArtistLimit>
          )}
        </S.TargetingBox>
        <S.TargetingBox>
          <S.TargetArtistInput
            placeholder="아티스트 이름"
            readOnly={$updatePage}
            value={$updatePage ? feedData?.artistName || "" : artistInput}
            onChange={(e) => {
              setArtistInput(e.target.value);
            }}
          />
          {$updatePage ? (
            <S.ArtistLimit>
              <S.ArtistLimitNum>{feedData?.artistName.length}</S.ArtistLimitNum>
              /10자
            </S.ArtistLimit>
          ) : (
            <S.ArtistLimit>
              <S.ArtistLimitNum>{artistInput.length}</S.ArtistLimitNum>/10자
            </S.ArtistLimit>
          )}
        </S.TargetingBox>
      </S.Target>
      <S.TargetLabel>작성하신 이름이 노출됩니다.</S.TargetLabel>
    </S.TargetContainer>
  );
};

export default FeedWriteTarget;
