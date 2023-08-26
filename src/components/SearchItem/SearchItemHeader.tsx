import * as S from "./style/SearchItemHeader.style";
import LeftArrow from "../../assets/images/svg/ic-arrow-left.svg";
import Search from "../../assets/images/svg/ic-search.svg";
const SearchItemHeader = () => {
  return (
    <S.SearchItemHeaderContainer>
      <S.LeftArrow src={LeftArrow} />
      <S.SearchItemInput placeholder="손민수템을 검색해주세요" />
      <S.SearchIcon src={Search} />
    </S.SearchItemHeaderContainer>
  );
};
export default SearchItemHeader;
