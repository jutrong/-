import * as S from "./style/MinsooItem.style";
import item from "../../assets/images/png/item1.png";
const MinsooItem = () => {
  return (
    <S.ListContainer>
      <S.SearchItemImg src={item} />
      <S.SearchItemContent>
        <S.SearchItemTags>
          <S.SearchItemTag>BTS</S.SearchItemTag>
          <S.SearchItemTag>정전국</S.SearchItemTag>
        </S.SearchItemTags>
        <S.SearchItemProduct>
          비행사 우주곰 우주냥 비행사 LED 비행사우주곰
        </S.SearchItemProduct>
        <S.SearchItemPrice>
          12,000<S.SearchItemWon>원</S.SearchItemWon>
        </S.SearchItemPrice>
      </S.SearchItemContent>
    </S.ListContainer>
  );
};
export default MinsooItem;
