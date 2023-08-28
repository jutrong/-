import { ifError } from "assert";
import * as S from "./style/HotFandomCircle.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type HotFandomCircleProps = {
    item: FandomRankData;
};

const HotFandomCircle: React.FC<HotFandomCircleProps> = ({ item }) => {
    //  console.log("item:", item.thumbnailImgUrl);
    return (
        <S.PandomCircleContainer>
            <S.imgContainer>
                <S.NumberOne />
                <S.PandomShadowCircle src={item?.image} />
            </S.imgContainer>

            <S.PandomCircleName>{item && item.fandomName}</S.PandomCircleName>
        </S.PandomCircleContainer>
    );
};
export default HotFandomCircle;
