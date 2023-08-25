import styled from "styled-components";
import Link from "../../assets/images/svg/ic-link.svg";
import closeBtn from "../../assets/images/svg/x.svg";
import * as S from './style/FeedWriteLink.style';
import clothes from "../../assets/images/png/clothes.png";
import pants from "../../assets/images/png/pants.png";



const FeedWriteLink = () => {
  return (
    <S.FeedWriteLinkContainer>
      <S.FeedLink>링크</S.FeedLink>
      <S.MaxLinkText>최대 9개의 링크 업로드 가능</S.MaxLinkText>
      <S.LinkItemBox>
        <S.LinkButton>
          <S.LinkImg src={Link} />
          <S.LinkText>링크 등록</S.LinkText>
        </S.LinkButton>
        <S.LinkItem>
          <S.LinkItemImg src={clothes}></S.LinkItemImg>
          <S.LinkItemName>비행사 우주곰우주곰</S.LinkItemName>
          <S.LinkItemPrice>
            12000<S.PriceWon>원</S.PriceWon>
          </S.LinkItemPrice>
          <S.LinkCloseBtn src={closeBtn} />
        </S.LinkItem>
        <S.LinkItem>
          <S.LinkItemImg src={pants}></S.LinkItemImg>
          <S.LinkItemName>비행사 우주곰우주곰</S.LinkItemName>
          <S.LinkItemPrice>
            12000<S.PriceWon>원</S.PriceWon>
          </S.LinkItemPrice>
          <S.LinkCloseBtn src={closeBtn} />
        </S.LinkItem>
      </S.LinkItemBox>
    </S.FeedWriteLinkContainer>
  );
};
export default FeedWriteLink;
