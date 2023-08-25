import logo from "../../../assets/images/svg/logo.svg";
import arrowLeft from "../../../assets/images/svg/ic-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style/HeaderBar.style";

type propsType = {
  BackButton: boolean;
  title?: string;
  items?: any[];
  color?: string;
};

const HeaderBar = ({
  BackButton = false,
  title = "",
  items,
  color,
}: propsType) => {
  const navigation = useNavigate();
  return (
    <S.Container color={color}>
      {BackButton ? (
        <S.LogoContainer>
          <S.Logo src={arrowLeft} onClick={() => navigation(-1)} />
          <S.Title>{title}</S.Title>
        </S.LogoContainer>
      ) : (
        <S.Logo src={logo} onClick={() => navigation("/")} />
      )}
      <S.Items>{items?.map((icon) => icon)}</S.Items>
    </S.Container>
  );
};

export default HeaderBar;
