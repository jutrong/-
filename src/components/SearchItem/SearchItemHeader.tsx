import * as S from "./style/SearchItemHeader.style";
import LeftArrow from "../../assets/images/svg/ic-arrow-left.svg";
import Search from "../../assets/images/svg/ic-search.svg";
import { useNavigate } from "react-router-dom";
type headerProps = {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
  fetchItem: any;
};

const SearchItemHeader: React.FC<headerProps> = ({
  searchItem,
  setSearchItem,
  fetchItem,
}) => {
  const navigate = useNavigate();
  return (
    <S.SearchItemHeaderContainer>
      <S.LeftArrow
        src={LeftArrow}
        onClick={() => {
          navigate(-1);
        }}
      />
      <S.SearchItemInput
        type="text"
        placeholder="손민수템을 검색해주세요"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <S.SearchIcon src={Search} onClick={fetchItem} />
    </S.SearchItemHeaderContainer>
  );
};
export default SearchItemHeader;
