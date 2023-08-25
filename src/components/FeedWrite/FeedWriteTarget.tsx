import styled from "styled-components";
import * as S from './style/FeedWriteTarget.style';



const FeedWriteTarget = () => {
  return (
    <S.TargetContainer>
      <S.Targeting>손민수 대상자</S.Targeting>
      <S.TargetingBox>
        <S.TargetGroupInput placeholder="그룹명" />
        <S.TargetArtistInput placeholder="아티스트 이름" />
      </S.TargetingBox>
      <S.TargetLabel>작성하신 이름이 노출됩니다.</S.TargetLabel>
    </S.TargetContainer>
  );
};

export default FeedWriteTarget;
