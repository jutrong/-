import React from "react";

import * as S from "./style/FandomCircle.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomdataProps = {
    item: FandomRankData;
};
const FandomCircle: React.FC<FandomdataProps> = ({ item }) => {
    return (
        <S.FandomCircleContainer>
            <S.FandomShadowCircle src={item?.image} />
            <S.FandomCircleName>{item.fandomName}</S.FandomCircleName>
        </S.FandomCircleContainer>
    );
};
export default FandomCircle;
