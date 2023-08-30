import * as S from "./style/FeedDetailHeader.style";
import { useNavigate } from "react-router-dom";
import leftarrow from "../../assets/images/svg/ic-arrow-left.svg";

const FeedHeaderBar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Logo
        src={leftarrow}
        onClick={() => {
          navigate(-1);
        }}
      ></S.Logo>
    </S.Container>
  );
};

export default FeedHeaderBar;
