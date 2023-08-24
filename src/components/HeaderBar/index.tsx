import logo from "../assets/images/svg/logo.svg";
import arrowLeft from "../assets/images/svg/ic-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

type propsType = { BackButton: boolean; title?: string; items?: any[] };

const HeaderBar = ({ BackButton = false, title = "", items }: propsType) => {
  const navigation = useNavigate();
  return (
    <S.Container>
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
