import React, { useContext } from "react";
import { HomeContext } from "../../pages/Home/Home";
import * as S from "./style/FandomCircle.style";

const FandomCircle: React.FC = () => {
    const homeData = useContext(HomeContext);

    return (
        <S.FandomCircleContainer>
            <S.FandomShadowCircle />
            <S.FandomCircleName>A.R.M.Y</S.FandomCircleName>
        </S.FandomCircleContainer>
    );
};
export default FandomCircle;
