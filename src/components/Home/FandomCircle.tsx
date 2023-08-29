import React from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate(`/fandom/${item.id}`);
    };
    return (
        <S.FandomCircleContainer>
            <S.FandomShadowCircle src={item?.image} onClick={handleItemClick} />
            <S.FandomCircleName>{item.fandomName}</S.FandomCircleName>
        </S.FandomCircleContainer>
    );
};
export default FandomCircle;
