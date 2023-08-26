import * as S from "./style/HotFandomCircle.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};

type HotFandomCircleProps = {
    item: FandomRankData;
};

const HotFandomCircle: React.FC<HotFandomCircleProps> = ({ item }) => {
    console.log("item:", item);
    return (
        <S.PandomCircleContainer>
            <S.PandomShadowCircle>
                <S.NumberOne />
            </S.PandomShadowCircle>
            <S.PandomCircleName>{item && item.fandomName}</S.PandomCircleName>
        </S.PandomCircleContainer>
    );
};
export default HotFandomCircle;
